class WriteBlock {
  arr: Array<number>;

  constructor() {
    this.arr = [];
  }
  // TODO: 作用是？
  SetHead: (index: number, type: number) => void = (index, type) => {
    const val = (index << 3) | type;
    this.arr.push(val & 0xff);
  };

  SetIntValue: (val: number) => void = (val) => {
    while (val > 127) {
      this.arr.push((val % 128) + 128);
      val = Math.floor(val / 128);
    }
    this.arr.push(val);
  };

  WriteIntField: (index: number, val: number) => void = (index, val) => {
    this.SetHead(index, 0);
    this.SetIntValue(val);
  };

  WriteBooleanField: (index: number, val: boolean) => void = (index, val) => {
    this.SetHead(index, 0);
    this.SetIntValue(+val);
  };

  WriteStringField: (index: number, str: string) => void = (index, str) => {
    this.SetHead(index, 2);
    this.SetIntValue(str.length);

    for (let i = 0; i < str.length; ++i) {
      this.arr.push(str.charCodeAt(i));
    }
  };

  WriteArrayBufferField: (index: number, buf: ArrayBuffer) => void = (
    index,
    buf
  ) => {
    this.SetHead(index, 2);
    this.SetIntValue(buf.byteLength);
    const ui8 = new Uint8Array(buf);
    for (let i = 0; i < ui8.length; i++) {
      this.arr.push(ui8[i]);
    }
  };

  getArrayBuffer: () => ArrayBuffer = () => {
    return new Uint8Array(this.arr).buffer;
  };
}

class ReadBlock {
  dv: DataView;
  pos: number;
  size: number;

  constructor(buffer: ArrayBuffer) {
    this.dv = new DataView(buffer);
    this.pos = 0;
    this.size = buffer.byteLength;
  }

  GetHead: (index: number, type: number) => boolean = (index, type) => {
    if (this.pos >= this.size) {
      return false;
    }
    const head = this.dv.getUint8(this.pos);
    if (head >> 3 != index || (head & 0x07) != type) {
      return false;
    }
    this.pos++;
    return true;
  };

  GetIntValue: () => number = () => {
    let ret = 0;
    let val = this.dv.getUint8(this.pos++);
    let step = 1;
    while (val > 127) {
      val &= 0x7f;
      ret += val * step;
      step *= 128;
      val = this.dv.getUint8(this.pos++);
    }
    ret += val * step;
    return ret;
  };

  ReadIntField: (index: number) => number = (index) => {
    if (!this.GetHead(index, 0)) {
      return 0;
    }
    const val = this.GetIntValue();
    return val;
  };

  ReadStringField: (index: number) => string = (index) => {
    let str = "";
    if (!this.GetHead(index, 2)) {
      return str;
    }

    const len = this.GetIntValue();
    for (let i = 0; i < len; i++) {
      str += String.fromCharCode(this.dv.getUint8(this.pos++));
    }

    return str;
  };

  ReadArrayField: (index: number) => ArrayBuffer = (index) => {
    const arr = [];
    if (!this.GetHead(index, 2)) {
      return new Uint8Array(arr).buffer;
    }

    const len = this.GetIntValue();
    for (let i = 0; i < len; i++) {
      arr.push(this.dv.getUint8(this.pos++));
    }
    return new Uint8Array(arr).buffer;
  };
}

class Person {
  name: string; // 姓名
  age: number; // 年龄
  gender: string; // 性别

  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.gender = info.gender;
  }

  Encode: () => ArrayBuffer = () => {
    const wb = new WriteBlock();
    wb.WriteStringField(1, this.name);
    wb.WriteIntField(2, this.age);
    wb.WriteStringField(3, this.gender);
    return wb.getArrayBuffer();
  };

  Decode: (
    buffer: ArrayBuffer
  ) => {
    name: string;
    age: number;
    gender: string;
  } = (buffer) => {
    const rb = new ReadBlock(buffer);
    return {
        name: rb.ReadStringField(1),
        age: rb.ReadIntField(2),
        gender: rb.ReadStringField(3),
    }
  };
}

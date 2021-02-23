btoa: Binary to Ascii
atob: Ascii to Binary

## 已知

1. 字符串转二进制：str -> Base64.encode(str) -> btoa, 必须要有一步Base64的编码处理，若省略会有乱码，并且，btoa生成的二进制数据是可以直接用ab2str解码成功，不需要Base64.decode

问题1:
str2ArrayBuffer方法中，先调用Base64.encode 把str转为了Base64, 再调用str2ab将base64转为二进制，**但是，中文字符不能直接转Base64**


str -> Uint16转Uint8 -> btoa -> binary
binary -> atob -> Uint8转Uint16 -> str
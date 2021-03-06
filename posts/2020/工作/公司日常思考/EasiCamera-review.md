# 展台UOS - OCR版本复盘

## 关键节点回顾

2020年

- 8.17 接到需求，当天确认需求内容：没有要求混合识别，尽量提供最优方案，目标9.1交付第一个版本
- 8.26 测试同学拿到windows版本的测试用例链接(用例跟uos版本不符)
- 8.27 A1送测
- 8.31 交出第一个版本
- 9.1  测试同学指出风险：uos展台使用的是win版本用例
- 9.4  A2送测
- 9.5  A2送测结束，收到测试的负面反馈，A1问题的解决范围没有产品经理参与。
- 9.9  发现所依赖的画板组件存在丢点问题，协调资源未果，自己解决。
- 9.18 给出稳定版本的包，请同事确认是否满足省厅参数要求，当天确认ocr的识别要求为`识别文本`
---
- 9.29 收到前方反馈，ocr无法识别，定位原因: 1. 当前实现不支持识别展台拍摄的照片； 2. 期望支持手写、印刷和中英文的ocr，我们缺失了手写体
- 10.6 线上沟通，确认方案
- 10.12 交付/自测&优化迭代

## 存在的问题

### 需求确认

需求梳理可以更加细致，对于OCR，有几个点：中文/英文/手写体/印刷体/是否混合识别

### 测试规范

uos跟windows版本的需求存在不同，测试用例无法完全复用，但是在需求确认阶段没有测试同学的参与，没有及时更新测试用例，导致测试范围无法覆盖。

### 开发

在正式送测之前，必须确认本轮送测所解决问题的范围，在送测前同步信息到产品经理和测试。

### 沟通

在整个过程中，开发和需求方的沟通不够直接，多通过中间人的形式进行，信息的同步不够及时。

## 措施

1. 需求确认阶段，尽可能详细的梳理需求内容，确定需求标准。对于投标需求，如何在解读标书上做得更好？
2. 测试流程，按照规范来。
3. 加强风险意识，对于过程中暴露出的风险，及时识别并做预防措施。
4. 信息同步，研发端与需求端的沟通要采用更直接的方式。每次沟通/会议应有书面的结论输出，同步给双方。

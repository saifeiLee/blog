# 一些功能的关键代码记录

## 书写板

### 书写板切换

```javascript
// 代码位置stage/model.tsx
 private setToolDebounce = debounce(
    (tool) => {
      this.setActiveElements();
      // 这里是关键
      this.merge({
        toolType: tool,
      });
    },
    100,
    { leading: true, trailing: true },
  );

```
this.merge()更新modelData后, 组件update, 
enow-component-sketchpad中通过 'pointer-events': needSketchpad ? 'auto' : 'none', 进行书写板的开关控制
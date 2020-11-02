# F2 淘宝 PC 小程序

F2 的淘宝 PC 小程序，支持原生 [F2](https://f2.antv.vision/) 的所有功能，欢迎使用反馈。

# 目的

my-f2 组件在 pc 千牛 端显示不了 tooltip，因此写了这个库。

src/f2.js 是[F2](https://gitee.com/iloveluyan/F2)build 后的其中一个文件。

## 说明

使用方式同[my-f2](https://github.com/antvis/my-f2) 完全一致

## 如何使用

### 1. 安装依赖

```
npm install my-f2-pc2 --save
```

#### 2. 打开 json 文件，引入组件

```json
{
  "usingComponents": {
    "f2": "my-f2-pc2"
  }
}
```

#### 3. 显示 tooltip

```js
const f2 = new F2.Chart({ ...配置 });
f2.tooltip({
  triggerOn: ['mousedown', 'mousemove'],
  triggerOff: 'mouseup',
});
```

其他与[my-f2](https://github.com/antvis/my-f2)完全一致，可以参考[my-f2](https://github.com/antvis/my-f2)的 demo

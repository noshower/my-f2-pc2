import { my as my$1 } from '@antv/f2-context';
import F2 from './f2';

function dispatchEvent(canvas, ev, type) {
  my.createSelectorQuery()
    .select(`#${canvas.context.id}`)
    .boundingClientRect()
    .exec((res) => {
      const { x, y } = ev.detail;
      const { left, top } = res[0];
      // 模拟touch事件的event
      canvas.dispatchEvent(
        type,
        Object.assign({}, ev, {
          touches: [{ x, y }],
          changedTouches: [{ x: x - left, y: y - top }],
          preventDefault: () => {},
        }),
      );
    });
}

Component({
  props: {
    onInit: () => {},
    // width height 会作为元素兜底的宽高使用
    width: null,
    height: null,
  },
  didMount() {
    const id = `f2-canvas-${this.$id}`;
    const myCtx = my.createCanvasContext(id);
    const context = my$1(myCtx);

    const query = my.createSelectorQuery();
    query
      .select(`#${id}`)
      .boundingClientRect()
      .exec((res) => {
        // 获取画布实际宽高, 用props的宽高做失败兜底
        const { width, height } = res && res[0] ? res[0] : this.props;
        if (!width || !height) {
          return;
        }
        const pixelRatio = my.getSystemInfoSync().pixelRatio;
        // 高清解决方案
        this.setData(
          {
            id,
            width: width * pixelRatio,
            height: height * pixelRatio,
          },
          () => {
            const ref = this;
            const chart = this.props.onInit(F2, { context, width, height, pixelRatio }, ref);
            if (chart) {
              this.chart = chart;
              this.canvasEl = chart.get('el');
            }
          },
        );
      });
  },
  methods: {
    mouseDown(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      dispatchEvent(canvasEl, e, 'mousedown');
    },
    mouseMove(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      dispatchEvent(canvasEl, e, 'mousemove');
    },
    mouseUp(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      dispatchEvent(canvasEl, e, 'mouseup');
    },
  },
});

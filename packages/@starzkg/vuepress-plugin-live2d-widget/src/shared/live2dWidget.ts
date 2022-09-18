/**
 * User's custom config 用户自定义设置
 *
 * @see https://github.com/stevenjoezhang/live2d-widget
 * @see https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init
 */
export interface Live2dWidgetOptions {
  model?: {
    /**
     * Path to Live2D model's main json
     * model主文件路径
     * e.g. https://test.com/miku.model.json
     */
    jsonPath?: string
    /**
     * Scale between the model and the canvas
     * 模型与canvas的缩放
     */
    scale?: number
  }
  dev?: {
    /**
     * Whether to show border around the canvas
     * 在canvas周围显示边界
     */
    border?: boolean
  }
  name?: {
    /**
     * ID name of the div
     * div元素的ID
     */
    div?: string
    /**
     * ID name of the canvas
     * canvas元素的ID
     */
    canvas?: string
  }
  display?: {
    /**
     * Left of right side to show
     * 显示位置：左或右
     */
    position?: string
    /**
     * Horizontal offset of the canvas
     * canvas水平偏移
     */
    hOffset?: number
    /**
     * Vertical offset of the canvas
     * canvas垂直偏移
     */
    vOffset?: number
    /**
     * Height to the canvas which shows the model
     * canvas的高度
     */
    height?: number
    /**
     * Width to the canvas which shows the model
     * canvas的长度
     */
    width?: number
    /**
     * rate for super sampling rate
     * 超采样等级
     */
    superSample?: number
  }
  react?: {
    /**
     * opacity 透明度
     */
    opacity?: number
  }
  dialog?: {
    /**
     * Display dialog 显示人物对话框
     */
    enable?: boolean
    /**
     * Enable hitokoto 使用一言API
     */
    hitokoto?: boolean
  }
  mobile?: {
    /**
     * Whether to show on mobile device
     * 是否在移动设备上显示
     */
    show?: boolean
    /**
     * Scale on mobile device
     * 移动设备上的缩放
     */
    scale?: number
  }
}

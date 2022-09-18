import type { Live2dWidgetOptions } from './live2dWidget.js'

export interface Live2dWidgetPluginOptions extends Live2dWidgetOptions {
  enable?: boolean
  dev?: {
    /**
     * Whether to show border around the canvas
     * 在canvas周围显示边界
     */
    border?: boolean
    /**
     * 是否开启控制台日志打印
     * @default false
     */
    log?: boolean
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
    /**
     *
     */
    script?: { [key: string]: string }
  }
}

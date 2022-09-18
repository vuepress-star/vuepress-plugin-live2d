import { defineClientConfig } from '@vuepress/client'
import { L2Dwidget } from 'live2d-widget'
import type { Live2dWidgetPluginOptions } from '../shared/index.js'
import { changeDialogMessage } from './utils/index.js'

declare const __VUEPRESS_SSR__: boolean

declare const LIVE2D_WIDGET_OPTIONS: Live2dWidgetPluginOptions

const live2dWidgetPluginOptions = LIVE2D_WIDGET_OPTIONS

export default defineClientConfig({
  enhance() {
    if (!__VUEPRESS_SSR__) {
      if (live2dWidgetPluginOptions.dev?.log) {
        L2Dwidget.on('*', (name) => {
          console.log(
            '%c EVENT ' + '%c -> ' + name,
            'background: #222; color: yellow',
            'background: #fff; color: #000'
          )
        })
      }
      if (live2dWidgetPluginOptions.dialog?.script) {
        L2Dwidget.on('tapface', (name) => {
          changeDialogMessage('人家已经不是小孩子了')
        })
        L2Dwidget.on('tapbody', (name) => {
          changeDialogMessage('哎呀！别碰我！')
        })
      }
      L2Dwidget.init(live2dWidgetPluginOptions)
    }
  },
})

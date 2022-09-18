import type { Plugin } from '@vuepress/core'
import { isLinkHttp } from '@vuepress/shared'
import { getDirname, logger, path } from '@vuepress/utils'
import type { Live2dWidgetPluginOptions } from '../shared/index.js'
import models from './model.js'
const __dirname = getDirname(import.meta.url)

export const live2dWidgetPlugin =
  (options: Live2dWidgetPluginOptions): Plugin =>
  (app) => {
    if (options.model && options.model.jsonPath) {
      if (!isLinkHttp(options.model.jsonPath)) {
        options.model.jsonPath = models[options.model.jsonPath]
      }
    } else {
      options.model = { ...options.model, jsonPath: models.shizuku }
    }

    if (!options.model?.jsonPath) {
      console.log(options)
      logger.error('model json path is invalid!')
      return {
        name: '@starzkg/vuepress-plugin-live2d-widget',
      }
    }

    return {
      name: '@starzkg/vuepress-plugin-live2d-widget',
      define: () => ({
        LIVE2D_WIDGET_OPTIONS: options,
      }),
      clientConfigFile: path.resolve(__dirname, '../client/config.js'),
    }
  }

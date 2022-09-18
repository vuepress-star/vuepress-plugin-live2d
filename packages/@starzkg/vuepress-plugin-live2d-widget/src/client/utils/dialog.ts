let live2dWidgetDialogElement: HTMLElement | null = null

let closeTimer

function displayDialog(): void {
  if (live2dWidgetDialogElement === null) {
    return
  }
  live2dWidgetDialogElement.style.opacity = String(1)
}

function hiddenDialog(): void {
  if (live2dWidgetDialogElement === null) {
    return
  }
  live2dWidgetDialogElement.style.opacity = String(0)
}

function alertText(text): void {
  if (live2dWidgetDialogElement === null) {
    return
  }
  displayDialog()
  live2dWidgetDialogElement.innerText = text
  clearTimeout(closeTimer)
  closeTimer = setTimeout(function () {
    hiddenDialog()
  }, 5000)
}
export const changeDialogMessage = (message: string) => {
  if (!live2dWidgetDialogElement) {
    const live2dWidgetElement = document.getElementById('live2d-widget')

    if (live2dWidgetElement) {
      live2dWidgetDialogElement = live2dWidgetElement.getElementsByClassName(
        'live2d-widget-dialog'
      )[0] as HTMLElement
    }

    if (!live2dWidgetDialogElement) {
      return
    }
  }

  alertText(message)
}

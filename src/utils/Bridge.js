export const sendBridgeEvent = (bridge, data) => {
  window.webkit.messageHandlers[bridge].postMessage(data)
}

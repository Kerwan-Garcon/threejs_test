class WebGL {
  static isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas")
      return (
        !!window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      )
    } catch (e) {
      return false
    }
  }

  static isWebGL2Available() {
    try {
      const canvas = document.createElement("canvas")
      return !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"))
    } catch (e) {
      return false
    }
  }

  static getWebGLErrorMessage() {
    return this.getErrorMessage(1)
  }

  static getWebGL2ErrorMessage() {
    return this.getErrorMessage(2)
  }

  static getErrorMessage(version) {
    const names = {
      1: "WebGL",
      2: "WebGL 2",
    }

    const contexts = {
      1: typeof window === "undefined" ? null : window.WebGLRenderingContext,
      2: typeof window === "undefined" ? null : window.WebGL2RenderingContext,
    }

    let message =
      'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>'

    const element =
      typeof window === "undefined" ? null : document.createElement("div")
    typeof window === "undefined" ? null : (element.id = "webglmessage")
    typeof window === "undefined"
      ? null
      : (element.style.fontFamily = "monospace")
    typeof window === "undefined" ? null : (element.style.fontSize = "13px")
    typeof window === "undefined" ? null : (element.style.fontWeight = "normal")
    typeof window === "undefined" ? null : (element.style.textAlign = "center")
    typeof window === "undefined" ? null : (element.style.background = "#fff")
    typeof window === "undefined" ? null : (element.style.color = "#000")
    typeof window === "undefined" ? null : (element.style.padding = "1.5em")
    typeof window === "undefined" ? null : (element.style.width = "400px")
    typeof window === "undefined" ? null : (element.style.margin = "5em auto 0")

    if (contexts[version]) {
      message = message.replace("$0", "graphics card")
    } else {
      message = message.replace("$0", "browser")
    }

    message = message.replace("$1", names[version])

    typeof window === "undefined" ? null : (element.innerHTML = message)

    return element
  }
}

export default WebGL

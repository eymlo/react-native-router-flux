export function push() {
  if (window && window.history && window.history.pushState) {
    window.history.pushState({}, "", "");
  }
}

export function addOnPopHandler(callback) {
  if (window && window.addEventListener) {
    window.addEventListener('popstate', callback)
  }
}


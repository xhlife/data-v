const baseURL = window.location.origin || 'http://43.143.98.14/'

function _ajax(url, method, data, base = baseURL) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, base + url)

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(xhr.statusText)
      }
    }
    xhr.onerror = function() {
      reject(xhr.statusText)
    }
    xhr.send(JSON.stringify(data))
  })
}

export function ajaxGet(url) {
  return _ajax(url, 'GET')
}

export function ajaxPost(url, data) {
  return _ajax(url, 'post', data)
}

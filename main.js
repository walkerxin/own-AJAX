window.jQuery = function(nodeOrSelector) {
    let nodes = {
        length: 1,
        node: nodeOrSelector
    }

    return nodes
}

window.jQuery.ajax = function(url, method, body, success, fail) {
    // ajax async javascript and xml
    // jsonp
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = function() {
        if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300) {
                success.call(undefined, request.responseText)
            }else {
                fail.call(undefined, request)
            }
        }
    }
    request.send(body)
}

myButton.addEventListener('click', (e) => {
    jQuery.ajax('/xxx', 'post', undefined, (responseText) => {
        console.log(responseText)
    }, (request) => {
        console.log('error', request.status)
    })
})
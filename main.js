window.jQuery = function(nodeOrSelector) {
    let nodes = {
        length: 1,
        node: nodeOrSelector
    }

    return nodes
}

window.jQuery.ajax = function({url, method, body, headers}) {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url)
        for(let key in headers) {
            request.setRequestHeader(key, headers[key])
        }
        request.onreadystatechange = function() {
            if(request.readyState === 4) {
                if(request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                }else {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click', (e) => {
    jQuery.ajax({
        url: 'http://localhost:9001/xxx', 
        method: 'get',
        headers: {
            sdf: 'test1',
            'Content-Type': 'x-www-form-urlencoded'
        }
    }).then(
        (responseText) => {
            console.log('获取成功', responseText)
        },
        (request) => {
            console.log('获取失败', request)
        }
    )
})
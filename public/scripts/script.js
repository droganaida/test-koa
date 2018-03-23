
document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('input[name="uploader"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    console.log('----------- ' + this.files[0])
    var xhr = new window.XMLHttpRequest();
    var fd = new FormData();

    fd.append('fileUpload', this.files[0]);
    fd.append('action', 'savemainimage');
    xhr.open('post', '/', true);
    xhr.send(fd);

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            console.log('-----------ready ' + xhr.responseText);
        }
    }
}
function saveAsFile(filename, bytesBase64) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + bytesBase64;
    document.body.appendChild(link); // Needed for Firefox
    link.click();
    document.body.removeChild(link);
}
function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        return contents = e.target.result;
    };
    reader.readAsText(file);
}
function loadFile() {
    var input = document.createElement('input');
    input.type = 'file';

    return new Promise(function (resolve, reject) {
        input.onchange = function (event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                var base64Data = e.target.result.split(',')[1]; 
                resolve(base64Data); 
            };

            reader.onerror = function (e) {
                reject("Ошибка при чтении файла");
            };

            reader.readAsDataURL(file); 
        };

        input.click(); 
    });
}

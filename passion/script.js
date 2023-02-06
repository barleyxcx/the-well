var files = {'jpg':4};
// var pageName = "Wimoveh";
for (var ext in files) {
for (var i = 0; i < files[ext]; i++){
    var src = "Images" + (i+1) + "." + ext;}

    var img = new Image(); 
    img.src = src;
    const photos = document.getElementsByClassName("photos");
    photos.appendChild(img);
}

window.onload = myfunc;
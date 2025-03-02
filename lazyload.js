let images = document.getElementsByClassName("lazy")

for (let img of images) {
    let loaded = function() {
        // The height attribute is a placeholder for unloaded images. Once the image is loaded,
        // the Browser should work with the actual image height.
        img.removeAttribute("height")
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener('load', loaded)
    }
}

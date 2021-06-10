let wrapper = document.getElementById('wrapper')
let loader = document.getElementById('loader')

let img = document.createElement('IMG')
img.src = 'https://i.pinimg.com/originals/4e/00/ec/4e00ec5c557981c36c4bbdfaa5de1991.jpg'
img.onload = function() {
    loader.parentNode.removeChild(loader)
    wrapper.appendChild(img)
}


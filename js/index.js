new Vue({
    el: '#vue-app',
    data: () => ({
        name: 'TM',
        menu: [{
            name: 'CROP',
            link: 'crop.html'
        }, {
            name: 'Equalization',
            link: 'equalization.html'
        }, {
            name: 'Contrast',
            link: 'contrast.html'
        }, {
            name: 'Brightness',
            link: 'brightness.html'
        }]
    })
})
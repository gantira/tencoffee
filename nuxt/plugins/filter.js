import Vue from 'vue'

Vue.filter('hari', function(string){
    if (string.match(/HARI/)) {
        return string
    }

    return string + ' Hari'
})

Vue.filter('money', function (value) {
    let val = (value / 1).toFixed(0).replace('.', ',')
    return 'Rp' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

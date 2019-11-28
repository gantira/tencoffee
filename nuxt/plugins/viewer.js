import 'viewerjs/dist/viewer.css'
import Vue from 'vue'
import Viewer from 'v-viewer'

Vue.use(Viewer, {
  defaultOptions: {
    toolbar: false,
    title: true,
    button: false,
    movable: true,
    transition: false,
    navbar: false,
    zoomable: true
  }

})

import Vue from 'vue'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

if (process.browser) {
    const VueQuillEditor = require('vue-quill-editor/dist/ssr')
    Vue.use(VueQuillEditor, {
        modules: {
            toolbar: {
                container:[
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    ['image']
                ],
                handlers: {
                    image: function() {
                      document.getElementById('file').click()
                    }
                }
            },
        },
        placeholder: 'Product Description'
    })
  }
//   https://www.npmjs.com/package/vue-quill-editor
// http://www.programmersought.com/article/4960245701/
// https://stackoverflow.com/questions/43857373/quill-editor-vuejs2-image-upload-base64-image-to-url
// https://programmer.group/vue-uses-vue-quill-editor-rich-text-summary-picture-upload.html

<script>
import jsPDF from 'jspdf'
import html2pdf from 'html2pdf.js'

import { h } from 'vue'

export default {
  name:"V3Html2pdf",
  props: {
    index: {
      type: Number,
      default: 1,
    },
    filename: {
      type: String,
      default: 'mypdf-file.pdf',
    },
    readyDownload: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        margin: 15,
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'p',
        },
      },
    },
  },
  data: function () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    download() {
      const el = document.getElementById(`V3Html2pdf${this.index}`)
      if (!el) {
        return
      }

      html2pdf().from(el).set(this.options).save(this.filename)
    },
    async outImageSrc() {
      const el = document.getElementById(`V3Html2pdf${this.index}`)
      if (!el) {
        return
      }

      const image = await html2pdf().from(el).set(this.options).outputImg()

      const outputType = 'blob'
      const pageSize = jsPDF.getPageSize(this.options.jsPDF)
      const x = -2
      const y = -2
      const width = pageSize.width
      const height = pageSize.height
      const doc = new jsPDF(this.options.jsPDF)
      doc.addImage(image.src, 'jpeg', x, y, width, height, '')
      return doc.output(outputType)
    },
  },
  render() {
    return h(
      'div',
      {
        class: 'v3-html2pdf',
        id: `V3Html2pdf${this.index}`,
      },
      this.$slots.default()[0]
    )
  },
}
</script>
<style>
.v3-html2pdf {
  position: relative;
}
.html2pdf__page-number {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>

# v3-html2pdf

- Export and auto download PDF using vue3 and html2pdf.js.
- Easy to custom any PDF style because it will be export from real html.
- Can use custom css style for pdf page using vue style.

# Install

```
npm install --save v3-html2pdf
```

or yarn

```
yarn add v3-html2pdf
```

# Register component
```
import v3Html2pdf from "v3-html2pdf";
Vue.use(v3Html2pdf);
```

# Use component

```
<v3-html2pdf
  ref="v3Html2pdfRef"
  :options="pdfOptions"
  :filename="exportFilename"
>
 <!-- Your html here -->

</v3-html2pdf>

...
// Props
pdfOptions = {
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
exportFilename: 'mypdf-file.pdf',

Call start download pdf

```
this.$refs.v3Html2pdfRef.download()
```

# License

The MIT License

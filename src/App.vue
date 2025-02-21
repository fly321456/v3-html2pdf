<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

// pdf导出配置
const pdfOptions = ref({
  margin: 15,
  image: {
    type: "jpeg",
    quality: 1,
  },
  html2canvas: { scale: 3 },
  jsPDF: {
    unit: "mm",
    format: "a4",
    orientation: "p",
  },
});
const exportFilename = "mypdf-file.pdf";
// pdf导出
const vue3SimpleHtml2pdfRef = ref();
/**
 * 生成PDF
 */
function createPDF() {
  console.log("🚀 ~ createPDF ~ vue3SimpleHtml2pdfRef:", vue3SimpleHtml2pdfRef)

  vue3SimpleHtml2pdfRef.value.download();
}
</script>

<template>
  <v3-html2pdf ref="vue3SimpleHtml2pdfRef" :options="pdfOptions" :filename="exportFilename">
    <header>
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
      </div>
    </header>

    <main>
      <TheWelcome />
    </main>
  </v3-html2pdf>
  <div><button @click="createPDF">保存</button></div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

// packages/index.ts
import V3Html2pdf from "./v3-html2pdf";

const components = [V3Html2pdf];

const install = (app: any) => {
  components.forEach((comp: any) => {
    console.log("🚀 ~ components.forEach ~ comp.name:", comp);
    app.component(comp.name, comp);
  });
};

export default { install };
export { V3Html2pdf }; // 支持按需导入

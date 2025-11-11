// 负责所有vue插件的安装
import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;
// 先 withInstall 转插件，再用 makeInstaller 批量安装
// 让组件变成插件
export const withInstall = <T>(components: T) => {
  (components as SFCWithInstall<T>).install = (app: App) => {
    const name = (components as any).name || "UnnamedComponent";
    app.component(name, components as SFCWithInstall<T>);
  };
  return components as SFCWithInstall<T>;
};

// 批量安装多个插件。
export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => {
    each(components, (c) => {
      app.use(c);
    });
  };
  return installer as Plugin;
}

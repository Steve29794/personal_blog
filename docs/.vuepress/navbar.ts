/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from "vuepress-theme-plume";

export default defineNavbarConfig([
  { text: "首页", link: "/" },
  { text: "博客", link: "/blog/" },
  { text: "标签", link: "/blog/tags/" },
  { text: "归档", link: "/blog/archives/" },
  {
    text: "笔记",
    items: [
      { text: "Java & Bukkit 开发", link: "/java_bukkit/README.md" },
      { text: "Java & SpringBoot 开发", link: "/java_springboot/README.md" },
      { text: "其他好玩的教程", link: "/other_fun_things/README.md" },
      { text: "随笔", link: "/essays/README.md" },
    ],
  },
]);

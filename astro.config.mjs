import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react({
    include: ['**/react/**/*'],
  }), solidJs({
    include: ['**/solid/**/*'],
  }), mdx()],
});
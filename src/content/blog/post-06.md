---
title: Guia desarrollo en Astro
date: 2023-06-25
description: Pasos, tips y recursos para aprender Astro.
author: alice-johnson
image: '../../assets/images/post-05.png'
tags: [Astro, Web Design, Frontend]
---

# GUIA PARA DESARROLLO EN ASTRO: [Doc. oficial](https://docs.astro.build/es/getting-started/)

## INSTALACION Y CONFIGURACION: [ver..](https://docs.astro.build/es/install-and-setup/)

### Crear proyecto
```bash
  pnpm create astro@latest
```
### Inciciar servidor de desarrollo
```bash
  pnpm run dev
```
### Construir sitio
```bash
  pnpm run build
```
### Previsualizar sitio
```bash
  pnpm run preview
```

## INTEGRACIONES    

### - [TailwindCSS](https://docs.astro.build/en/guides/styling/#tailwind)

## ANIMACIONES: VIEW TRANSITIONS
1. Agregar en el layout:
```tsx
---
import { ViewTransitions } from "astro:transitions";
...
---

<html lang="en">
  <head>
    ...
    <ViewTransitions />
  </head>
  ...
</html>
```

2. Definir animacion en el control. 
Debe definirse un nombre único en el transition_name.
```tsx
// ejemplo:
<img
    transition:name={`${name}-image`}
    src={urlImage}
    alt={name}
    class:list={[
      {
        "w-22 h-22": isBig,
        "w-16 h-16": !isBig,
      },
    ]}
  />
```
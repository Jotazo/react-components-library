# React Component Library

¡Bienvenido/a a mi librería de componentes de React en desarrollo! Esta librería está diseñada para facilitar la creación y personalización de componentes en tus proyectos de React.

## Índice

1. [Estado del Proyecto](#estado-del-proyecto)
2. [Instalación](#instalacion)
3. [Componentes](#componentes)
   - [Componente ThemeToggler](#componente-themetoggler)
     - [Descripción](#descripción)
     - [Configuración de Tailwind CSS](#configuración-de-tailwind-css)
     - [Uso del Componente](#uso-del-componente)
     - [Variantes](#variantes)
       - [Por Defecto](#Por-defecto)
       - [Animada](#animada)
4. [Contribuciones](#contribuciones)

## Estado del Proyecto

Actualmente, la librería se encuentra en fase de desarrollo activo. Estamos trabajando arduamente para agregar nuevas funcionalidades, mejorar la estabilidad y realizar ajustes según las necesidades de la comunidad.

## Instalación

1. Para comenzar a utilizar esta librería en tu proyecto de React, simplemente deberemos instalar la libreria con `npm` o `yarn`:

   ```bash
   npm install @jotazo/react-components-library
   ```

   ```bash
   yarn add @jotazo/react-components-library
   ```

2. Importa el componente necesario en tu aplicación:

   ```jsx
   import { ThemeToggler } from "@jotazo/react-components-library";
   ```

## Componentes

### Componente ThemeToggler

#### Descripción

Este componente te permite cambiar fácilmente entre un tema claro y oscuro en tu aplicación. La apariencia del componente varía según la variante que se le pase como prop.

#### Configuración de Tailwind CSS

Asegúrate de configurar tu proyecto con Tailwind CSS y de que la funcionalidad de modo oscuro (`darkMode`) esté habilitada. Puedes encontrar información detallada sobre cómo hacerlo en la [documentación oficial de Tailwind CSS](https://tailwindcss.com/docs/dark-mode).

#### Uso del Componente

El componente de cambio de tema se adapta a diferentes estilos según la variante que se le pase como prop. Puedes usarlo de la siguiente manera:

```jsx
import React from "react";
import { ThemeToggler } from "@jotazo/react-components-library";

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      {/* Variante por Defecto */}
      <ThemeToggler />
      {/* O */}
      {/* Variante Animada */}
      <ThemeToggler variant="animated" />
      {/* ...otros componentes */}
    </div>
  );
}

export default App;
```
### Variantes
---

#### Por Defecto

El componente se muestra como un switch simple que permite cambiar entre los modos claro y oscuro con un clic.

- ### Claro:
  ![ThemeToggler-ClassicLight][ThemeToggler-ClassicLight]
- ### Oscuro:
  ![ThemeToggler-ClassicDark][ThemeToggler-ClassicDark]

#### Animada

La variante animada incluye un icono y un texto que, al hacer clic sobre ellos, cambian su apariencia para indicar el cambio de tema de manera más visual y atractiva.

- ### Claro:
  ![ThemeToggler-AnimatedLight][ThemeToggler-AnimatedLight]
- ### Oscuro:
  ![ThemeToggler-AnimatedDark][ThemeToggler-AnimatedDark]

## Contribuciones

¡Agradecemos todas las contribuciones! Si encuentras algún problema, tienes ideas para nuevas características o mejoras, no dudes en abrir un problema o enviar una solicitud de extracción.

Gracias por usar nuestra librería de componentes de React. ¡Esperamos que sea de gran utilidad para tu proyecto!

<!-- Screenshots -->

[ThemeToggler-ClassicLight]: ./screenshots/ThemeToggler/ClassicLight.png
[ThemeToggler-ClassicDark]: ./screenshots/ThemeToggler/ClassicDark.png
[ThemeToggler-AnimatedLight]: ./screenshots/ThemeToggler/AnimatedLight.png
[ThemeToggler-AnimatedDark]: ./screenshots/ThemeToggler/AnimatedDark.png

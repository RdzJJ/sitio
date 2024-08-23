# 📷FotoClick
<img src="imagenes/logo1.jpg" alt="Logo FotoClick" width="100px">

## 📎Descripción
Bienvenidos a nuestro mundo a través del lente. Somos Julián y Mariana, y aquí encontrarás una colección de nuestros trabajos fotográficos más significativos. Capturamos momentos y emociones únicas, congelando fragmentos de tiempo para siempre. Explora nuestro portafolio y descubre la belleza en lo cotidiano y lo extraordinario.

## 🧏Características

- **Portafolio de Fotografías**: Una selección curada de nuestros trabajos más destacados.
- **Categorías Variadas**: Fotografía de retratos, paisajes, eventos y más.
- **Galería Interactiva**: Navega a través de nuestras imágenes con una interfaz intuitiva.

## ❗Instalación

Para visualizar nuestro portafolio y configurar el entorno de desarrollo, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/RdzJJ/sitio.git
   ```

2. **Navega a la carpeta del proyecto**:
   ```bash
   cd sitio
   ```

3. **Instala las dependencias necesarias**:
   ```bash
   npm install
   ```

4. **Configura PostCSS y Webpack** siguiendo los pasos que se detallan en la sección a continuación.

5. **Para ver los cambios en el navegador**:
   - Abre el archivo `index.html` en tu navegador.
   - Para desarrollar y ver cambios automáticamente, puedes usar Webpack Dev Server:
     ```bash
     npx webpack serve
     ```

**Nota:** No se requieren instalaciones adicionales para la visualización básica.

## 🧠😎 Uso

Abre el archivo `index.html` en tu navegador para explorar nuestro portafolio. Puedes hacer clic en las imágenes para verlas en tamaño completo y navegar entre las diferentes categorías.

Puedes visitar el sitio online a través del siguiente link: [https://rdzjj.github.io/sitio/#](https://rdzjj.github.io/sitio/#)

## 🛠️ Herramientas y Plugins

### PostCSS

**Plugins Utilizados:**

1. **Autoprefixer**: Agrega prefijos de navegador automáticamente para asegurar que tu CSS sea compatible con diferentes navegadores.
2. **CSSNano**: Minifica tu CSS para reducir el tamaño de los archivos y mejorar el tiempo de carga.
3. **PurgeCSS**: Elimina CSS no utilizado en tu proyecto, lo que ayuda a reducir el tamaño del archivo CSS final.

**Instalación:**

Para instalar los plugins de PostCSS, ejecuta:
```bash
npm install autoprefixer cssnano @fullhuman/postcss-purgecss
```

**Configuración:**

Crea o actualiza el archivo `postcss.config.js` con el siguiente contenido:

```javascript
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
        purgecss({
            content: [
                './src/**/*.html',
                './src/**/*.js',
            ],
        }),
    ],
};
```

**Razón de Uso:**

- **Autoprefixer** asegura que el CSS funcione correctamente en todos los navegadores.
- **CSSNano** reduce el tamaño del archivo CSS, mejorando el rendimiento del sitio.
- **PurgeCSS** elimina el CSS no utilizado, lo que también contribuye a un mejor rendimiento.

### Webpack

**Plugins y Loaders Utilizados:**

1. **Style Loader**: Inserta CSS en el DOM a través de un `<style>` tag.
2. **CSS Loader**: Carga archivos CSS.
3. **PostCSS Loader**: Permite usar PostCSS en tus archivos CSS.
4. **Babel Loader**: Transpila código JavaScript moderno a una versión compatible con más navegadores.
5. **Asset Resource Loader**: Maneja la carga de imágenes y otros recursos.

**Instalación:**

Para instalar Webpack y los loaders necesarios, ejecuta:
```bash
npm install webpack webpack-cli webpack-dev-server style-loader css-loader postcss-loader babel-loader @babel/core @babel/preset-env asset/resource
```

**Configuración:**

Crea o actualiza el archivo `webpack.config.js` con el siguiente contenido:

```javascript
const path = require('path');

module.exports = {
    entry: './js/index.js', // Entrada de tu archivo JS principal
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Salida de Webpack
    },
    mode: 'production', // Modo de producción para optimizar
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpilación de ES6+
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};
```

**Razón de Uso:**

- **Style Loader** y **CSS Loader** permiten importar CSS directamente en JavaScript.
- **PostCSS Loader** procesa CSS con PostCSS.
- **Babel Loader** asegura que el JavaScript sea compatible con una amplia gama de navegadores.
- **Asset Resource Loader** maneja la carga de imágenes y otros recursos, facilitando la gestión de activos en el proyecto.

## 🖥️🖱️ Contribución

Si deseas contribuir o hacer sugerencias, por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b nombre-de-la-rama`.
3. Realiza tus cambios y haz commit.
4. Envía un pull request para que podamos revisar tus contribuciones.

## 🤳📲 Contacto

Puedes ponerte en contacto con nosotros a través de los siguientes medios:

- **Julián**: [julian.rodriguezj@upb.edu.co](mailto:julian.rodriguezj@upb.edu.co)
- **Mariana**: [mariana.osorioro@upb.edu.co](mailto:mariana.osorioro@upb.edu.co)
```

Este archivo `README.md` proporciona una guía completa sobre la instalación, configuración y uso de PostCSS y Webpack, así como detalles adicionales sobre el proyecto.
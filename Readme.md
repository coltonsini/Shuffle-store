# Shopify Simulator Documentation

Bienvenido a **Shuffle Store**, This technical test was done in order to recreate the shuffle store website, it is not for profit and this repository will not suffer future changes since it was only created for this test.

---

## **Project Structure**

```
/simulator
├── /config
│   ├── settings_schema.json      # Defines configurable settings for sections
│   ├── settings_data.json        # Stores dynamic data for rendering sections
├── /data
│   ├── products.json             # Sample product data
│   ├── collections.json          # Sample collection data
├── /public
│   ├── styles.css                # Compiled CSS file
│   ├── main.js                   # Compiled JavaScript file
├── /sections
│   ├── featured-products.liquid  # Main section rendering product lists
├── /snippets
│   ├── product-card.liquid       # Reusable snippet for individual product cards
├── /templates
│   ├── index.liquid              # Main template file
├── /src
│   ├── styles.scss               # Base SASS file
│   ├── app.js                    # Base JavaScript logic
├── /assets                       # Images for products, banners, and collections
├── package.json
├── webpack.config.js
├── server.js
```

---

## **Dynamic Configuration**

### **Schema (`settings_schema.json`)**

El esquema define las configuraciones disponibles para una sección.

### **Data (`settings_data.json`)**

Este archivo contiene los valores dinámicos para las configuraciones.

## **Setup Instructions**

### **Install Dependencies**

```bash
npm install
```

### **Run the Server**

```bash
npm start
```

### **Build Styles and Scripts**

```bash
npm run build
```

---

## **Additional Notes**

### **Assets**

Todas las imágenes de productos, banners y colecciones se almacenan en la carpeta `/assets`. Consulta los archivos `data/products.json` y `data/collections.json` para los mapeos.

### **Testing the Application**

Visita `http://localhost:3000` en tu navegador para ver el simulador en acción.

---

Siéntete libre de personalizar el simulador aún más para que se ajuste a tus requisitos. ¡Feliz codificación! 🚀

Para más información sobre Liquid, consulta la [documentación oficial de Liquid](https://liquidjs.com/tutorials/intro-to-liquid.html).

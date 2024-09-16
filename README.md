# Proyecto de asignacion de puntos de entrega

Este proyecto es una aplicación web que permite visualizar puntos en un mapa y asignar choferes a estos puntos. La consigna inicial es:

Objetivo

Facilitar la planificación de entregas, permitiendo asignar a distintos choferes los trabajos que deben realizar.

Tarea

Armar una aplicación muy simple que permita:

Mostrar un mapa con puntos respectivos a ubicaciones donde hay que entregar envíos (20 ubicaciones).
Ver al costado del mapa un listado de 5 choferes, que hacen las entregas.
Generar una interacción para que el usuario pueda asignarle uno o más puntos a los choferes. Cada punto es asignado a un chofer (o ninguno).
Al asignar los puntos a los choferes, debería quedar claro qué puntos fueron asignados a cada chofer (ej. un color para cada uno).

## Descripción

La aplicación tiene las siguientes funcionalidades:

- **Visualización de puntos en el mapa:** Los puntos se agrupan por color basado en el empleado asignado.
- **Asignación de empleados:** Los usuarios pueden asignar empleados a puntos específicos en el mapa.
- **Filtrado de puntos:** Los puntos en el mapa se pueden filtrar para mostrar solo aquellos asignados a un empleado específico.

## Tecnologías Utilizadas

- **React** para el desarrollo del frontend.
- **Leaflet** para la visualización del mapa.
- **Tailwind CSS** para los estilos.
- **TypeScript** para el tipado y el desarrollo más seguro.

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/MatiArea/zippin-map.git
   ```

2. **Instalar dependencias**

   Navega al directorio del proyecto e instala las dependencias:

   ```bash
   cd zipin-map
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

   La aplicación estará disponible en `http://localhost:5173`.

## Uso

1. **Visualizar puntos en el mapa:**

- Se cargan 20 puntos de entrega en el mapa al momento de iniciar la aplicacion.
- Los puntos se muestran en el mapa utilizando la librería Leaflet.

2. **Asignar empleados a puntos:**

   - Haz click en una fila de la tabla para abrir un modal.
   - Selecciona un empleado en el modal y haz clic en "Confirmar" para asignarlo al punto.

3. **Filtrar puntos por empleado:**
   - En el componente de empleados, haz clic en el nombre de un empleado para filtrar los puntos en el mapa.
   - Haz clic en "No filter" para mostrar todos los puntos.

## Estructura del Proyecto

- **`src/`**: Contiene el código fuente de la aplicación.
  - **`components/`**: Componentes de la interfaz de usuario.
    - **`Employee/`**: Componentes relacionados con la visualización de empleados.
    - **`Map/`**: Componentes relacionados con la visualización del mapa.
    - **`Modal/`**: Componentes modales utilizados para asignar empleados.
    - **`Table/`**: Componentes para la visualización de datos en tablas.
  - **`services/`**: Servicios para manejar la lógica de negocio y comunicación con APIs.
  - **`types/`**: Tipos y definiciones TypeScript.
  - **`utils/`**: Funciones utilitarias.

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarme a través de [matiasaarea@hotmail.com](mailto:matiasaarea@hotmail.com).

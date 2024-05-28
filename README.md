# Planificación del Proyecto de Gestión de Turnos

## User Stories

Las user stories ayudan a clarificar las funcionalidades desde la perspectiva del usuario final.

1. **Registro de Usuario**

   - **Descripción:** Como usuario, quiero poder registrarme en la aplicación para crear una cuenta y acceder a las funcionalidades.
   - **Criterios de Aceptación:**
     - El usuario debe proporcionar un nombre, correo electrónico y contraseña.
     - El sistema debe verificar que el correo electrónico no esté ya registrado.
     - El usuario debe recibir un correo de confirmación después del registro.

2. **Inicio de Sesión**

   - **Descripción:** Como usuario registrado, quiero poder iniciar sesión en la aplicación para acceder a mi cuenta.
   - **Criterios de Aceptación:**
     - El usuario debe proporcionar su correo electrónico y contraseña.
     - El sistema debe autenticar al usuario y permitirle el acceso si las credenciales son correctas.

3. **Agendar Turno**

   - **Descripción:** Como usuario autenticado, quiero poder agendar un turno en el establecimiento para una fecha y hora específicas.
   - **Criterios de Aceptación:**
     - El usuario debe seleccionar una fecha y una hora dentro del horario de atención.
     - El sistema debe permitir agendar turnos únicamente en días laborables.
     - El usuario debe recibir una confirmación por correo electrónico después de agendar el turno.

4. **Ver Turnos Agendados**

   - **Descripción:** Como usuario autenticado, quiero poder ver la lista de turnos que he agendado para gestionar mis citas.
   - **Criterios de Aceptación:**
     - El usuario debe ver una lista de sus turnos agendados con fecha y hora.
     - El sistema debe mostrar solo los turnos futuros y no los pasados.

5. **Cancelar Turno**

   - **Descripción:** Como usuario autenticado, quiero poder cancelar un turno hasta el día anterior a la cita para gestionar mis compromisos.
   - **Criterios de Aceptación:**
     - El usuario debe poder seleccionar un turno y cancelarlo.
     - El sistema debe permitir la cancelación solo si el turno es para una fecha futura.
     - El usuario debe recibir una confirmación por correo electrónico después de cancelar el turno.

6. **Subir Foto de Perfil**

   - **Descripción:** Como usuario autenticado, quiero poder subir una foto de perfil para personalizar mi cuenta.
   - **Criterios de Aceptación:**
     - El usuario debe poder seleccionar y subir una imagen en formato .jpg o .png.
     - El sistema debe almacenar y mostrar la foto de perfil en la cuenta del usuario.

7. **Confirmación por Email**
   - **Descripción:** Como usuario, quiero recibir un correo electrónico de confirmación cada vez que agende o cancele un turno.
   - **Criterios de Aceptación:**
     - El sistema debe enviar un correo de confirmación al usuario después de agendar un turno.
     - El sistema debe enviar un correo de confirmación al usuario después de cancelar un turno.

## UX/UI

### Principios de Diseño UX/UI:

- **Intuitivo y Fácil de Usar:** La interfaz debe ser intuitiva y fácil de usar para que los usuarios puedan realizar sus tareas sin problemas.
- **Consistencia:** Mantener la consistencia en el diseño, utilizando colores, tipografías y estilos uniformes en toda la aplicación.
- **Accesibilidad:** Asegurar que la aplicación sea accesible para todos los usuarios, incluyendo aquellos con discapacidades.
- **Feedback Claro:** Proveer feedback claro y oportuno a los usuarios sobre las acciones que realizan, como confirmaciones de reserva y cancelaciones.

### Wireframes:

#### Pantalla de Inicio de Sesión/Registro:

- Campos para correo electrónico y contraseña.
- Botón para iniciar sesión y enlace para registrarse.
- Formulario de registro con campos para nombre, correo electrónico, contraseña y confirmación de contraseña.

#### Dashboard del Usuario:

- Vista de los turnos agendados.
- Botón para agendar nuevo turno.
- Botón para cancelar turnos.

#### Pantalla de Agendar Turno:

- Calendario para seleccionar la fecha.
- Dropdown para seleccionar la hora.
- Botón para confirmar la reserva.

#### Perfil del Usuario:

- Información del usuario (nombre, correo electrónico).
- Sección para subir y visualizar la foto de perfil.
- Botón para actualizar información.

### Prototipos:

- Crear prototipos interactivos usando herramientas como Figma o Adobe XD.
- Realizar pruebas de usabilidad con usuarios reales y ajustar el diseño basado en el feedback recibido.

## Esquema de Base de Datos

### Entidades:

1. **Usuarios**
2. **Turnos**

### Relaciones:

- Un usuario puede tener múltiples turnos.
- Cada turno pertenece a un único usuario.

### Detalles de la Base de Datos:

**Usuarios:**

- `id`: String (UUID)
- `nombre`: String
- `email`: String (único)
- `password`: String
- `fotoPerfil`: String (URL de la imagen)

**Turnos:**

- `id`: String (UUID)
- `usuarioId`: String (referencia a Usuarios)
- `fecha`: Date
- `hora`: String (formato 24 horas, ej. "10:00")
- `estado`: String (activo/cancelado)

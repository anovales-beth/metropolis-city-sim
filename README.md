# Metropolis Mobility Challenge

Actúa como un desarrollador Frontend Senior experto en React, Tailwind CSS y Lucide Icons. Diseña e implementa un minijuego interactivo tipo SPA (Single Page Application) titulado "Metrópolis: El Desafío de Movilidad".

REQUISITOS DEL ROL Y PREMISA:

- El jugador asume el rol de Secretario/a de Movilidad e Innovación de Metrópolis.

- El objetivo es sobrevivir un mandato de 10 años (10 turnos/tarjetas) manteniendo 4 indicadores urbanos equilibrados.

METRICAS Y DASHBOARD (Valores iniciales: 50/100 cada una):

1. 💚 Medio Ambiente (Calidad del aire, $CO_2$, áreas verdes).

2. 👥 Aprobación Popular (Satisfacción de vecinos y usuarios).

3. 💰 Presupuesto Municipal (Fondos de la ciudad).

4. ⚡ Fluidez / Eficiencia (Tiempos de viaje y tránsito).

REGLAS Y CONDICIONES:

- Game Over Inmediato: Si CUALQUIERA de las 4 métricas llega a 0 en cualquier turno, el juego se interrumpe con una pantalla de derrota temática según la variable colapsada (ej. "Crisis ambiental por esmog masivo", "Protestas masivas y destitución", "Bancarrota municipal", "Colapso total del tránsito").

- Fin de Mandato (Turno 10 completado): Evalúa las métricas finales para mostrar una pantalla de cierre con la categoría de ciudad lograda:

  * "La Ciudad del Futuro": Promedio equilibrado alto en todas las métricas (Medio Ambiente y Presupuesto > 50).

  * "La Ciudad de Cemento": Presupuesto y Fluidez altos (> 60), pero Medio Ambiente bajo (< 30).

  * "La Ciudad Paralizada": Medio Ambiente alto (> 60), pero Presupuesto o Fluidez bajos (< 30).

  * "Gestión Promedio": Cualquier otra combinación equilibrada pero modesta.

MECÁNICA Y BASE DE DATOS (10 TARJETAS DE EVENTOS):

Crea un array de 10 objetos con eventos de movilidad urbana realistas. Cada tarjeta debe tener: título, descripción, y 2 opciones de respuesta. Cada opción debe modificar explícitamente las 4 métricas.

Incluye los siguientes eventos en la lista:

1. "El Centro Peatonal" (Comerciantes vs. Peatonalización/Ciclovías).

2. "Electrificación del Transporte" (Buses eléctricos costosos vs. Diésel moderno barato).

3. "Micro-movilidad" (Prohibir monopatines vs. Regular e infraestructura dedicada).

4. "Tarifa de Pasajes" (Subsidiar boleto de transporte vs. Aumentar tarifa para financiar obras).

5. "Carriles Exclusivos BRT" (Eliminar un carril de autos para metrobús vs. Dejar tránsito libre).

6. "Estacionamiento Medido" (Cobrar por estacionar en calles transitadas vs. Mantener estacionamiento gratuito).

7. "Escuelas Seguras" (Crear zonas calmas 20 km/h y senderos a pie vs. Permitir ascenso/descenso libre en auto).

8. "Teleférico o Subte Urbano" (Megaobra de transporte guiado masivo vs. Mantenimiento de baches en calles).

9. "Día Sin Auto Municipal" (Promover jornada peatonal/bici vs. Cancelar por protesta del sector automotor).

10. "Semáforos Inteligentes con IA" (Inversión en sensores de tránsito vs. Control manual tradicional).

REQUISITOS DE UI / UX:

- Panel superior con barra de progreso de turnos (Año 1 a 10) y 4 barras visuales de estado con colores dinámicos (Verde > 60%, Amarillo 30-50%, Rojo < 30%).

- Tarjeta central con sombras, diseño limpio, tipografía clara accesible para chicos de 7 a 12 años, y botones interactivos de decisión.

- Feedback visual: Al presionar una opción, muestra brevemente indicadores emergentes de subida/bajada (ej. +15 💚, -10 💰) antes de pasar al siguiente turno.

- Pantallas de Fin de Juego (tanto derrota como victoria) con opción clara de "Volver a Jugar" para reiniciar el estado.

Genera todo el código funcional en un único archivo React (.jsx) sin dependencias externas complejas más allá de Lucide-React e Tailwind CSS.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7cb3c13e-2733-411c-bb10-670087a5eb01).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

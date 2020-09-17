# ProyectileImpacto Flecha

Este evento se dispara cuando un proyectil de flecha afecta a una entidad pero antes de daño, etc, se calcula. Es **cancelable**y, si se cancela, el impacto no será procesado.

Varios valores de la entidad flecha están disponibles a través de zengetros, y pueden ser modificados para ajustar el daño, empuja la fuerza, recolecta el estado y determina (o fuerza) un golpe crítico.

## Importar la clase
Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.event.ProjectileImpactArrowEvent;`

## Extendiendo IEntityEvent
ProjectileImpactArrow Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento Iproyectil](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters y ZenSetters

La siguiente información puede ser recuperada del evento:

| ZenGetter      | Ajuste            | Tipo                                  |
| -------------- | ----------------- | ------------------------------------- |
| `flecha`       |                   | [IEntity](/Vanilla/Entities/IEntity/) |
| `tirador`      |                   | [IEntity](/Vanilla/Entities/IEntity/) |
| `daño`         | `daño`            | doble                                 |
|                | `fuerza de golpe` | int (sólo configurador, sin getter)   |
| `es crítico`   | `es crítico`      | boolean                               |
| `pickupStatus` |                   | Cadena                                |

## Métodos adicionales

- `setPickupdisallowed()`

Evita que la flecha sea recogida bajo cualquier circunstancia.

- `setPickupAllowed()`

Permite recoger la flecha desde donde aterrizó la entidad.

- `setPickupCreative()`

Sólo permite recoger la flecha si el jugador está en modo creativo.

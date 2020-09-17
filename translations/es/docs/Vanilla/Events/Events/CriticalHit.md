# Evento crítico

El Evento de Golpe Crítico se dispara cuando un jugador ataca a otra criatura. Tiene un **resultado** que determina si el comportamiento crítico por defecto ocurre:

- **permitir**: el ataque se ve forzado a ser crítico
- **denegar**: el ataque no puede ser crítico
- **por defecto**: el ataque utiliza el comportamiento predeterminado de Vanilla para determinar si es un crit.

También puedes ajustar el modificador de daño para el golpe crítico.

## Notas

`event.oldDamageModifier` contiene el modificador de daño original del evento, mientras que `el evento. sVanillaCrit` es un valor booleano que determina si esto ya es un golpe crítico o no.

## Clase de evento
Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. riticalHitEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos
CriticalHit Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
La siguiente información puede ser recuperada del evento:

| ZenGetter                     | Ajuste                | Tipo de devolución                    |
| ----------------------------- | --------------------- | ------------------------------------- |
| `target`                      |                       | [IEntity](/Vanilla/Entities/IEntity/) |
| `antiguo modificador de daño` |                       | flotante                              |
| `modificador de daño`         | `modificador de daño` | flotante                              |
| `isVanillaCrit`               |                       | boolean                               |

## Métodos

- `event.deny()` establece el resultado a negar.
- `event.allow()` establece el resultado a permitir.
- `event.default()` establece el resultado por defecto.

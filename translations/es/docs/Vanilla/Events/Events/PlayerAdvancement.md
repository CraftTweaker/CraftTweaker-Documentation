# Avance del jugador

El Evento PlayerAdvancement se activa cada vez que un jugador recibe un Avance.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerAdvancementEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerAdvancement Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter | Tipo de devolución |
| --------- | ------------------ |
| `id`      | cadena             |

## Id

Aparte de la funcionalidad de PlayerEvent expone usted puede obtener el ID del avance como cadena.

Esto puede ser, por ejemplo, una cadena como

```zenscript
"minecraft:story/mine_diamond"
```
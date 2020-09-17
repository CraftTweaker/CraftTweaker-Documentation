# Muerte del jugador

El evento PlayerDeathDrops se dispara cuando los objetos de un jugador caen al suelo debido a la muerte del jugador.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. layerDeathDropsEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IJugador](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter        | Tipo de devolución                                           |
| ---------------- | ------------------------------------------------------------ |
| `jugador`        | [IPlayer](/Vanilla/Players/IPlayer/)                         |
| `objetos`        | [`Lista<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `fuente de daño` | [Fuente del ID](/Vanilla/Damage/IDamageSource/)              |

## Modificando los objetos sueltos

Puedes añadir a la droplist o sustituirla por una nueva:

```zenscript
event.items = //referencia a la lista IEntityItem.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```
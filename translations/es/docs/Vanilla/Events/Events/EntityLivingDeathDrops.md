# La entidad pasa a morir solas

El evento EntityLivingDeathDrops se dispara cuando la muerte de una entidad hace que aparezcan objetos soltados.  
Se puede cancelar para evitar que la entidad caiga cualquier cosa.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. ntityLivingDeathDropsEvent`  
Puede, por supuesto, también [importar la clase](/AdvancedFunctions/Import/) antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

PlayerDeathDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter                   | Tipo de devolución                                           |
| --------------------------- | ------------------------------------------------------------ |
| `gotas`                     | [`Lista<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `fuente de daño`            | [Fuente del ID](/Vanilla/Damage/IDamageSource/)              |
| `es golpeado recientemente` | pluma                                                        |
| `lootingLevel`              | int                                                          |

## Modificando los objetos sueltos

Puedes añadir a la droplist o sustituirla por una nueva:

```zenscript
event.drops = //referencia a la lista IEntityElement.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```
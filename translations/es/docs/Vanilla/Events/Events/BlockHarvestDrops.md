# Evento Drop

El evento BlockHarvestDrops se dispara cuando un bloque está a punto de soltar sus objetos.  
Puedes modificar la lista de bloques, así como la posibilidad general de soltar. Establece este último a 1 si haces todo el manejo de la oportunidad de antemano.

## Clase de evento

Necesitarás lanzar el evento en la cabecera de la función como esta clase:  
`crafttweaker.event. lockHarvestDropsEvent`  
Puede, por supuesto, también [importar](/AdvancedFunctions/Import/) la clase antes y usar ese nombre entonces.

## Extensiones de la interfaz de eventos

BlockHarvestDrops Events implementan las siguientes interfaces y son capaces de llamar a todos sus métodos/getters/setters también:

- [Evento IBlock](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

La siguiente información puede ser recuperada del evento:

| ZenGetter          | Ajuste       | Tipo                                              |
| ------------------ | ------------ | ------------------------------------------------- |
| `jugador`          |              | [IPlayer](/Vanilla/Players/IPlayer/)              |
| `es Jugador`       |              | pluma                                             |
| `silkTouch`        |              | pluma                                             |
| `nivel de fortuna` |              | int                                               |
| `gotas`            | `gotas`      | Lista <[ItemStack](/Vanilla/Items/IItemStack/)\> |
| `dropChance`       | `dropChance` | flotante                                          |

## Añadiendo un elemento a la lista

Puede añadir Asignar la lista o utilizar el método para añadir un elemento a la lista:

```zenscript
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```
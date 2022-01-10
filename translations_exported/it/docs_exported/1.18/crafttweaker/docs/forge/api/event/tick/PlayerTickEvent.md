# PlayerTickEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.PlayerTickEvent;
```


## Extending TickEvent

PlayerTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in PlayerTickEvent

## Metodi

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// PlayerTickEvent.getPlayer() as Player

myPlayerTickEvent.getPlayer();
```

:::


## Proprietà

| Nome   | Tipo                                             | Ha Getter | Ha Setter | Descrizione             |
| ------ | ------------------------------------------------ | --------- | --------- | ----------------------- |
| player | [Player](/vanilla/api/entity/type/player/Player) | sì        | no        | No Description Provided |


# WorldTickEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.WorldTickEvent;
```


## Extending TickEvent

WorldTickEvent extends [TickEvent](/forge/api/event/tick/TickEvent). That means all methods available in [TickEvent](/forge/api/event/tick/TickEvent) are also available in WorldTickEvent

## Metodi

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// WorldTickEvent.getWorld() as Level

myWorldTickEvent.getWorld();
```

:::


## Proprietà

| Nome  | Tipo                              | Ha Getter | Ha Setter | Descrizione             |
| ----- | --------------------------------- | --------- | --------- | ----------------------- |
| world | [Level](/vanilla/api/world/Level) | sì        | no        | No Description Provided |


# MCWorldTickEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCWorldTickEvent;
```


## Extending MCTickEvent

MCWorldTickEvent extends [MCTickEvent](/vanilla/api/event/tick/MCTickEvent). That means all methods available in [MCTickEvent](/vanilla/api/event/tick/MCTickEvent) are also available in MCWorldTickEvent

## Metodi

:::group{name=getWorld}

Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
// MCWorldTickEvent.getWorld() as MCWorld

myMCWorldTickEvent.getWorld();
```

:::


## Proprietà

| Nome  | Tipo                                  | Ha Getter | Ha Setter | Descrizione             |
| ----- | ------------------------------------- | --------- | --------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | sì        | no        | No Description Provided |


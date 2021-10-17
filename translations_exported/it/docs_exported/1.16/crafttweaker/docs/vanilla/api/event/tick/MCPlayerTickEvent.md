# MCPlayerTickEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCPlayerTickEvent;
```


## Extending MCTickEvent

MCPlayerTickEvent extends [MCTickEvent](/vanilla/api/event/tick/MCTickEvent). That means all methods available in [MCTickEvent](/vanilla/api/event/tick/MCTickEvent) are also available in MCPlayerTickEvent

## Metodi

:::group{name=getPlayer}

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
// MCPlayerTickEvent.getPlayer() as MCPlayerEntity

myMCPlayerTickEvent.getPlayer();
```

:::


## Proprietà

| Nome   | Tipo                                                 | Ha Getter | Ha Setter | Descrizione             |
| ------ | ---------------------------------------------------- | --------- | --------- | ----------------------- |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | sì        | no        | No Description Provided |


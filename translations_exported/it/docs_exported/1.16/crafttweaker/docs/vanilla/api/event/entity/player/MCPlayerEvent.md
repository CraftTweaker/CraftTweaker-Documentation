# MCPlayerEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerEvent;
```


## Extending MCLivingEvent

MCPlayerEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCPlayerEvent

## Metodi

:::group{name=getPlayer}

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)?

```zenscript
// MCPlayerEvent.getPlayer() as MCPlayerEntity?

myMCPlayerEvent.getPlayer();
```

:::


## Proprietà

| Nome   | Tipo                                                  | Ha Getter | Ha Setter | Descrizione             |
| ------ | ----------------------------------------------------- | --------- | --------- | ----------------------- |
| player | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | sì        | no        | No Description Provided |


# MCCropGrowPostEvent



The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCCropGrowPostEvent;
```


## Extending MCCropGrowEvent

MCCropGrowPostEvent extends [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent). That means all methods available in [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent) are also available in MCCropGrowPostEvent

## Metodi

:::group{name=getOriginState}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCCropGrowPostEvent.getOriginState() as MCBlockState

myMCCropGrowPostEvent.getOriginState();
```

:::


## Proprietà

| Nome        | Tipo                                            | Ha Getter | Ha Setter | Descrizione             |
| ----------- | ----------------------------------------------- | --------- | --------- | ----------------------- |
| originState | [MCBlockState](/vanilla/api/block/MCBlockState) | sì        | no        | No Description Provided |


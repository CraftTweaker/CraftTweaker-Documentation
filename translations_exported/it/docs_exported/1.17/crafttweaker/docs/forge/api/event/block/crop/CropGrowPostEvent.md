# CropGrowPostEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.crop.CropGrowPostEvent;
```


## Extending CropGrowEvent

CropGrowPostEvent extends [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent). That means all methods available in [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent) are also available in CropGrowPostEvent

## Metodi

:::group{name=getOriginState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// CropGrowPostEvent.getOriginState() as BlockState

myCropGrowPostEvent.getOriginState();
```

:::


## Proprietà

| Nome        | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| ----------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| originState | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | No Description Provided |


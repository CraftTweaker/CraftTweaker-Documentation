# CropGrowPostEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.crop.CropGrowPostEvent;
```


## Extending CropGrowEvent

CropGrowPostEvent extends [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent). That means all methods available in [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent) are also available in CropGrowPostEvent

## Methods

:::group{name=getOriginState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// CropGrowPostEvent.getOriginState() as BlockState

myCropGrowPostEvent.getOriginState();
```

:::


## Properties

| 名称          | Type                                        | Has Getter | Has Setter | Description             |
| ----------- | ------------------------------------------- | ---------- | ---------- | ----------------------- |
| originState | [BlockState](/vanilla/api/block/BlockState) | true       | false      | No Description Provided |


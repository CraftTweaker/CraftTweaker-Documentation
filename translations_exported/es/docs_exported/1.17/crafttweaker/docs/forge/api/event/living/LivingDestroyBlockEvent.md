# LivingDestroyBlockEvent



The event is cancelable.

If the event is canceled, the block will not be destroyed.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingDestroyBlockEvent;
```


## Extending LivingEvent

LivingDestroyBlockEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingDestroyBlockEvent

## Methods

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// LivingDestroyBlockEvent.getPos() as BlockPos

myLivingDestroyBlockEvent.getPos();
```

:::

:::group{name=getState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// LivingDestroyBlockEvent.getState() as BlockState

myLivingDestroyBlockEvent.getState();
```

:::


## Properties

| Nombre | Type                                        | Has Getter | Has Setter | Description             |
| ------ | ------------------------------------------- | ---------- | ---------- | ----------------------- |
| pos    | [BlockPos](/vanilla/api/util/math/BlockPos) | true       | false      | No Description Provided |
| state  | [BlockState](/vanilla/api/block/BlockState) | true       | false      | No Description Provided |


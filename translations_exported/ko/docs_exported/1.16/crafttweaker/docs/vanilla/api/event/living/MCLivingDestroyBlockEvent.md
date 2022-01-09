# MCLivingDestroyBlockEvent



The event is cancelable.

If the event is canceled, the block will not be destroyed.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDestroyBlockEvent;
```


## Extending MCLivingEvent

MCLivingDestroyBlockEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDestroyBlockEvent

## Properties

| 이름    | Type                                            | Has Getter | Has Setter | Description             |
| ----- | ----------------------------------------------- | ---------- | ---------- | ----------------------- |
| pos   | [BlockPos](/vanilla/api/util/BlockPos)          | true       | false      | No Description Provided |
| state | [MCBlockState](/vanilla/api/block/MCBlockState) | true       | false      | No Description Provided |


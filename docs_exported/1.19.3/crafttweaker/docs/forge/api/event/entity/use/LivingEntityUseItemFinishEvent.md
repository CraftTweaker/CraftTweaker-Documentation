# LivingEntityUseItemFinishEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.use.LivingEntityUseItemFinishEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemFinishEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemFinishEvent

## Properties

|    Name     |                    Type                    | Has Getter | Has Setter |
|-------------|--------------------------------------------|------------|------------|
| resultStack | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       |


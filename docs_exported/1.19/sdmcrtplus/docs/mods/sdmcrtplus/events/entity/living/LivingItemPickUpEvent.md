# LivingItemPickUpEvent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.events.entity.living.LivingItemPickUpEvent;
```


## Extending LivingEvent

LivingItemPickUpEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingItemPickUpEvent

## Methods

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingItemPickUpEvent.getItem() as IItemStack

myLivingItemPickUpEvent.getItem();
```

:::


## Properties

| Name |                    Type                    | Has Getter | Has Setter |
|------|--------------------------------------------|------------|------------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |


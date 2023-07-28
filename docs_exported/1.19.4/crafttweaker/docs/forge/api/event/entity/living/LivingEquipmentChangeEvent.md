# LivingEquipmentChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingEquipmentChangeEvent;
```


## Extending LivingEvent

LivingEquipmentChangeEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingEquipmentChangeEvent

## Properties

| Name |                             Type                             | Has Getter | Has Setter |
|------|--------------------------------------------------------------|------------|------------|
| from | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true       | false      |
| to   | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |


# LivingEquipmentChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingEquipmentChangeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.LivingEquipmentChangeEvent>(event => {
    println("LivingEquipmentChangeEvent ran!");
});
```


## Supertype

LivingEquipmentChangeEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingEquipmentChangeEvent

## Properties

| Name |                             Type                             | Has Getter | Has Setter |
|------|--------------------------------------------------------------|------------|------------|
| from | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true       | false      |
| to   | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |


# LivingEquipmentChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingEquipmentChangeEvent;
```


## Extending LivingEvent

LivingEquipmentChangeEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingEquipmentChangeEvent

## Methods

:::group{name=getFrom}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingEquipmentChangeEvent.getFrom() as IItemStack

myLivingEquipmentChangeEvent.getFrom();
```

:::

:::group{name=getSlot}

Return Type: [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)

```zenscript
// LivingEquipmentChangeEvent.getSlot() as EquipmentSlot

myLivingEquipmentChangeEvent.getSlot();
```

:::

:::group{name=getTo}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingEquipmentChangeEvent.getTo() as IItemStack

myLivingEquipmentChangeEvent.getTo();
```

:::


## Properties

| Nombre | Type                                                         | Has Getter | Has Setter |
| ------ | ------------------------------------------------------------ | ---------- | ---------- |
| from   | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |
| slot   | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true       | false      |
| to     | [IItemStack](/vanilla/api/item/IItemStack)                   | true       | false      |


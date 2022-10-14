# LivingEquipmentChangeEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingEquipmentChangeEvent;
```


## Extending LivingEvent

LivingEquipmentChangeEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingEquipmentChangeEvent

## 使用方式

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


## 参数

| 名称   | 类型                                                           | 可获得  | 可设置   | 描述                      |
| ---- | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| from | [IItemstack](/vanilla/api/item/IItemStack)                   | true | false | No Description Provided |
| slot | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | true | false | No Description Provided |
| to   | [IItemstack](/vanilla/api/item/IItemStack)                   | true | false | No Description Provided |


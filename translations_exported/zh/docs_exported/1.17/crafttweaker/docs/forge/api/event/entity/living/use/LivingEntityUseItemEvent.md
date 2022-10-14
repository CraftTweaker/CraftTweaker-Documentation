# LivingEntityUseItemEvent

LivingEntityUseItemEvent is fired when an event involving using an item occures..

 This event is fired for all types of item use phases, it is generally advised to use the specific events to target a specific phase instead of this event.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemEvent;
```


## Extending LivingEvent

LivingEntityUseItemEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingEntityUseItemEvent

## 使用方式

:::group{name=getDuration}

Return Type: int

```zenscript
// LivingEntityUseItemEvent.getDuration() as int

myLivingEntityUseItemEvent.getDuration();
```

:::

:::group{name=getItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingEntityUseItemEvent.getItem() as IItemStack

myLivingEntityUseItemEvent.getItem();
```

:::

:::group{name=setDuration}

Return Type: void

```zenscript
LivingEntityUseItemEvent.setDuration(duration as int) as void
```

| 参数       | 类型  | 描述                      |
| -------- | --- | ----------------------- |
| duration | int | No Description Provided |


:::


## 参数

| 名称       | 类型                                         | 可获得  | 可设置   | 描述                      |
| -------- | ------------------------------------------ | ---- | ----- | ----------------------- |
| duration | int                                        | true | true  | No Description Provided |
| item     | [IItemstack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |


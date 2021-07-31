# MCLivingEntityUseItemFinishEvent

Fired after an item has fully finished being used. The item has been notified that it was used, and the item/result stacks reflect after that state. This means that when this is fired for a Potion, the potion effect has already been applied.

 If you wish to cancel those effects, you should cancel one of the above events.

 The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.

The event is not cancelable.

The event does not have a result.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingEntityUseItemFinishEvent;
```


## Extending MCLivingEntityUseItemEvent

MCLivingEntityUseItemFinishEvent extends [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent). That means all methods available in [MCLivingEntityUseItemEvent](/vanilla/api/event/entity/living/MCLivingEntityUseItemEvent) are also available in MCLivingEntityUseItemFinishEvent

## 参数

| 名称          | 类型                                          | 可获得  | 可设置  |
| ----------- | ------------------------------------------- | ---- | ---- |
| resultStack | [IItemStack](/vanilla/api/items/IItemStack) | true | true |


# MCPlayerBrewedPotionEvent

This event is called when a player picks up a potion from a brewing stand. Since it is a [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent), you can already access the getter

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerBrewedPotionEvent;
```


## Extending MCPlayerEvent

MCPlayerBrewedPotionEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerBrewedPotionEvent

## 使用方式

:::group{name=getStack}

Gets the stack that was just brewed.

Returns: The stack that was just brewed.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// MCPlayerBrewedPotionEvent.getStack() as ItemStack

myMCPlayerBrewedPotionEvent.getStack();
```

:::


## 参数

| 名称 | 类型                                  | 可获得  | 可设置   | 描述                                   |
| -- | ----------------------------------- | ---- | ----- | ------------------------------------ |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | true | false | Gets the stack that was just brewed. |


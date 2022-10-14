# LivingEntityUseItemFinishEvent

Fired after an item has fully finished being used. The item has been notified that it was used, and the item/result stacks reflect after that state. This means that when this is fired for a Potion, the potion effect has already been applied.

 If you wish to cancel those effects, you should cancel one of the above events.

 The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemFinishEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemFinishEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemFinishEvent

## Methods

:::group{name=getResultStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// LivingEntityUseItemFinishEvent.getResultStack() as IItemStack

myLivingEntityUseItemFinishEvent.getResultStack();
```

:::

:::group{name=setResultStack}

Return Type: void

```zenscript
LivingEntityUseItemFinishEvent.setResultStack(stack as IItemStack) as void
```

| Parameter | Type                                       | Description             |
| --------- | ------------------------------------------ | ----------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


## Properties

| 名称          | Type                                       | Has Getter | Has Setter | Description             |
| ----------- | ------------------------------------------ | ---------- | ---------- | ----------------------- |
| resultStack | [IItemStack](/vanilla/api/item/IItemStack) | true       | true       | No Description Provided |


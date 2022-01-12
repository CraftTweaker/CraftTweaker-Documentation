# LivingEntityUseItemFinishEvent

Fired after an item has fully finished being used. The item has been notified that it was used, and the item/result stacks reflect after that state. This means that when this is fired for a Potion, the potion effect has already been applied.

 If you wish to cancel those effects, you should cancel one of the above events.

 The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.use.LivingEntityUseItemFinishEvent;
```


## Extending LivingEntityUseItemEvent

LivingEntityUseItemFinishEvent extends [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent). That means all methods available in [LivingEntityUseItemEvent](/forge/api/event/entity/living/use/LivingEntityUseItemEvent) are also available in LivingEntityUseItemFinishEvent

## Методы

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

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| stack    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


## Свойства

| Название    | Тип                                        | Имеет Getter | Имеет Setter | Описание                |
| ----------- | ------------------------------------------ | ------------ | ------------ | ----------------------- |
| resultStack | [IItemStack](/vanilla/api/item/IItemStack) | true         | true         | No Description Provided |


# LivingDropsEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.LivingDropsEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.LivingDropsEvent>(event => {
    println("LivingDropsEvent ran!");
});
```


## Supertype

LivingDropsEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in LivingDropsEvent

## Methods

:::group{name=addDrop}

Adds an item to the drops.

```zenscript
LivingDropsEvent.addDrop(stack as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeDrop}

Removes items that match the given ingredient from drops.

```zenscript
LivingDropsEvent.removeDrop(ingredient as IIngredient)
```

| Parameter  |                        Type                        |
|------------|----------------------------------------------------|
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::


## Properties

|     Name      |                             Type                              | Has Getter | Has Setter |                                                                                                        Description                                                                                                         |
|---------------|---------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| drops         | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true       | true       | Returns the list of items will be dropped. The list is read-only, modifying this list does not change the drops. <br />   <br />  You should use the `drops` setter, `addDrop` or `removeDrop` method to change the drops. |
| isRecentlyHit | boolean                                                       | true       | false      | Whether the Entity doing the drop has recently been damaged.                                                                                                                                                               |
| lootingLevel  | int                                                           | true       | false      |                                                                                                                                                                                                                            |
| source        | [DamageSource](/vanilla/api/world/damage/DamageSource)        | true       | false      |                                                                                                                                                                                                                            |


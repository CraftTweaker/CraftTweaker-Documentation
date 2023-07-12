# FurnaceFuelBurnTimeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.FurnaceFuelBurnTimeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.FurnaceFuelBurnTimeEvent>(event => {
    println("FurnaceFuelBurnTimeEvent ran!");
});
```


## Supertype

FurnaceFuelBurnTimeEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FurnaceFuelBurnTimeEvent

## Properties

|    Name    |                                                                              Type                                                                              | Has Getter | Has Setter |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| burnTime   | [FurnaceFuelBurnTimeEvent](/forge/api/event/FurnaceFuelBurnTimeEvent)                                                                                          | true       | true       |
| itemStack  | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                                     | true       | false      |
| recipeType | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt; | true       | false      |


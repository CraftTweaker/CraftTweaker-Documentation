# FurnaceFuelBurnTimeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.FurnaceFuelBurnTimeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.FurnaceFuelBurnTimeEvent>(event => {
    println("FurnaceFuelBurnTimeEvent ran!");
});
```


## Supertype

FurnaceFuelBurnTimeEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in FurnaceFuelBurnTimeEvent

## Implemented Interfaces
FurnaceFuelBurnTimeEvent implements the following interfaces. That means all methods defined in these interfaces are also available in FurnaceFuelBurnTimeEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|    Name    |                                                                                   Type                                                                                    | Has Getter | Has Setter |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| burnTime   | [FurnaceFuelBurnTimeEvent](/neoforge/api/event/FurnaceFuelBurnTimeEvent)                                                                                                  | true       | true       |
| itemStack  | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                                                | true       | false      |
| recipeType | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[RecipeInput](/vanilla/api/recipe/input/RecipeInput)&gt;&gt; | true       | false      |


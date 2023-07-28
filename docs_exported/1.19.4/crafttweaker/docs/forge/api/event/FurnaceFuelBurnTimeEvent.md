# FurnaceFuelBurnTimeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.FurnaceFuelBurnTimeEvent;
```


## Extending Event

FurnaceFuelBurnTimeEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in FurnaceFuelBurnTimeEvent

## Properties

|    Name    |                                                                              Type                                                                              | Has Getter | Has Setter |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------|
| burnTime   | [FurnaceFuelBurnTimeEvent](/forge/api/event/FurnaceFuelBurnTimeEvent)                                                                                          | true       | true       |
| itemStack  | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                                     | true       | false      |
| recipeType | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt;&gt; | true       | false      |


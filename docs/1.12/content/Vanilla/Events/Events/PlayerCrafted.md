# PlayerCrafted

The PlayerCrafted Event is fired whenever a player crafts something.
Which to be more precise, the player takes out the result, not changing something in the grid.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCraftedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerCrafted Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)



## ZenGetters/ZenSetters
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `output`        |                 | [IItemStack](/Vanilla/Items/IItemStack/)          |
| `inventory`     |                 | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |

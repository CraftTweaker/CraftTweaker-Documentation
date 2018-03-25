# PlayerAnvilRepair

The PlayerAnvilRepair Event is fired whenever a player crafts something in the anvil.  
You can change the chance that the anvil is damaged.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilRepairEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
PlayerAnvilRepair Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](IPlayerEvent)



## ZenGetters
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter     | Return Type                                                        |
|------------------|---------------|--------------------------------------------------------------------|
| `player`         |               | [IPlayer](/Vanilla/Players/IPlayer)                                |
| `itemInput`      |               | [IItemStack](/Vanilla/Items/IItemStack)                            |
| `itemIngredient` |               | [IItemStack](/Vanilla/Items/IItemStack)                            |
| `itenResult`     |               | [IItemStack](/Vanilla/Items/IItemStack)                            |
| `breakChance`    | `breakChance` | float                                                              |
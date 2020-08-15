# PlayerCrafted

The PlayerCrafted Event is fired whenever a player crafts something.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCraftedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerCrafted Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter   | 반환 타입                                                               |
| ----------- | ------------------------------------------------------------------- |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)                                |
| `output`    | [IItemStack](/Vanilla/Items/IItemStack/)                            |
| `inventory` | [ICraftingInventory](/Vanilla/Recipes/Crafting/ICraftingInventory/) |
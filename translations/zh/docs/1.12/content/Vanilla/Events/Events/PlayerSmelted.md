# PlayerSmelted

The PlayerSmelted Event is fired whenever a player takes something out of a furnace.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSmeltedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerSmelted Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter    | 返回值类型                                    |
| ------------ | ---------------------------------------- |
| `player`     | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `output（输出）` | [IItemStack](/Vanilla/Items/IItemStack/) |
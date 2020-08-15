# PlayerBreakSpeed

The PlayerBreakSpeed Event is fired whenever a player tries to break a block.  
It can be canceled to stop theplayer from being able to break that block.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBreakSpeedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerBreakSpeed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter     | ZenSetter | Tipo                                        |
| ------------- | --------- | ------------------------------------------- |
| blockState    |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| blocco        |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| originalSpeed |           | galleggiante                                |
| newSpeed      | newSpeed  | galleggiante                                |
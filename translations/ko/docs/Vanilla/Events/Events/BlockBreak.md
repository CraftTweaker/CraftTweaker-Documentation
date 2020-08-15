# BlockBreakEvent

The BlockBreak Event is fired whenever a block is being broken.  
You can cancel the event to prevent the block from being broken.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockBreakEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

BlockBreak Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter    | ZenSetter    | Type                                 |
| ------------ | ------------ | ------------------------------------ |
| `player`     |              | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer`   |              | bool                                 |
| `experience` | `experience` | int                                  |
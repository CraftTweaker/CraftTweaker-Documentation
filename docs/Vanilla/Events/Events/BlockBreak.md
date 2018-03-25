# BlockBreakEvent

The BlockBreak Event is fired whenever a block is being broken.  
You can cancel the event to prevent the block from being broken.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockBreakEvent`  
You can, of course, also [import](/AdvancedFunctions/Import) the class before and use that name then.

## Event interface extensions
BlockBreak Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](IEventCancelable)
- [IBlockEvent](IBlockEvent)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter        | ZenSetter     | Type                                                               |
|------------------|---------------|--------------------------------------------------------------------|
| `player`         |               | [IPlayer](/Vanilla/Players/IPlayer)                                |
| `isPlayer`       |               | bool                                                               |
| `experience`     | `experience`  | int                                                                |
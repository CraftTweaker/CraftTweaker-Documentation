# BlockNeighborNotify

The BlockNeighborNotify Event is fired when a physics update occurs on a block. This event acts as a way for mods to detect physics updates, in the same way a BUD switch does. This event is only called on the server.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockNeighborNotifyEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

BlockNeighborNotify Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

| ZenGetter           | Type                                | Description                                                            |
| ------------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| forceRedstoneUpdate | bool                                | If redstone update was forced during setBlock call (0x16 to flags)     |
| notifiedSides       | [IFacing](/Vanilla/World/IFacing)[] | A list of directions from the base block that updates will occur upon. |

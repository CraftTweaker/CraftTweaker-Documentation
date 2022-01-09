# PortalSpawn

The PortalSpawn Event is fired when an attempt is made to spawn a nether portal. If cancelled, the portal will not be spawned.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PortalSpawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

BlockNeighborNotify Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

| ZenGetter    | 类型   | 描述                             |
| ------------ | ---- | ------------------------------ |
| valid        | bool | If the size of portal is valid |
| height #实体高度 | int  | The height of portal           |
| width #宽度    | int  | The width of portal            |

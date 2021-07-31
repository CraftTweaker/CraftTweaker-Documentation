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

| ZenGetter | Type | Description                    |
| --------- | ---- | ------------------------------ |
| valid     | bool | If the size of portal is valid |
| height    | int  | The height of portal           |
| width     | int  | The width of portal            |

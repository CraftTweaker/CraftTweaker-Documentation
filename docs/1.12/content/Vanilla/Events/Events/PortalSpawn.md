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



## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `valid`         |                 | bool                                              |
| `height`        |                 | int                                               |
| `width`         |                 | int                                               |



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `blockState`    |                 | [IBlockState](/Vanilla/Blocks/IBlockState/)       |
| `block`         |                 | [IBlock](/Vanilla/Blocks/IBlock/)                 |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop smth. from happening
 

## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `position`      |                 | [IBlockPos](/Vanilla/World/IBlockPos/)            |
| `x`             |                 | int                                               |
| `y`             |                 | int                                               |
| `z`             |                 | int                                               |

## Notes
`valid` will return true if the portal is valid to be spawned, false if it cant spawn the portal like this.

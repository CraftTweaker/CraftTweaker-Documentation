# PlayerClone

Fired when the EntityPlayer is cloned, typically caused by the network sending a RESPAWN_PLAYER event. Either caused by death, or by traveling from the End to the overworld.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloneEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerRespawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter        | Return Type                                           |
|------------------|-------------------------------------------------------|
| `originalPlayer` | [IPlayer](/Vanilla/Players/IPlayer/)                  |
| `wasDeath`       | bool (states if the event is because the player died) |

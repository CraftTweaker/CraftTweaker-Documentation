# IPlayerEvent
This interface is extended by all events that have a player.  
That means you can use the getter below to access the player. 

## Note
The [IPlayer](/Vanilla/Players/IPlayer/) is an extension of the class [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) ,
thus with `event.player` you have access to all  ZenGetters/ZenSetters from [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) already.

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPlayerEvent;`

## Extending ILivingEvent
This interface extends [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), which means that all functionality that ILivingEvent offers is also present in IPlayerEvent


## ZenGetters/ZenSetters
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`         |                 | [IPlayer](/Vanilla/Players/IPlayer/)             |

## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |

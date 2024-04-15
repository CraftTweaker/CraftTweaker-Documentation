# EntityMountEvent

The EntityMount event is fired whenever an entity is mounted or dismounted from.
If canceled, the entity is prevented from mounting (or dismounting).

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent`
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityMountEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `world`         |                 | [IWorld](/Vanilla/World/IWorld/)                  |
| `mountingEntity`|                 | [IEntity](/Vanilla/Entities/IEntity/)             |
| `mountedEntity` |                 | [IEntity](/Vanilla/Entities/IEntity/)             |
| `isMounting`    |                 | boolean                                           |
| `isDismounting` |                 | boolean                                           |


## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)  |
| `canceled`      | `canceled`      | bool                                              |


ZenMethods
- `event.cancel();` Method, returns void (nothing). Can cancel the event and stop something from happening

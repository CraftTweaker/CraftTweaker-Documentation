# EntityMountEvent

The EntityMount event is fired whenever an entity is mounted or dismounted from. If canceled, the entity is prevented from mounting (or dismounting).

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
EntityMountEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter        | Rückgabetyp                           |
| ---------------- | ------------------------------------- |
| `world`          | [IWorld](/Vanilla/World/IWorld/)      |
| `mountingEntity` | [IEntity](/Vanilla/Entities/IEntity/) |
| `mountedEntity`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`     | boolean                               |
| `isDismounting`  | boolean                               |

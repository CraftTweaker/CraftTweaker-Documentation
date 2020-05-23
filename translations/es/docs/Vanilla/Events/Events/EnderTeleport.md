# EnderTeleport

The EnderTeleport event is fired whenever an enderman or shulker teleport.  
It is also fired whenever a player teleports using an enderpearl (it is possible that other mods fire this event as well.)

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnderTeleportEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

LivingEntityUseItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

The following information can be retrieved/set during the event:

| ZenGetter      | ZenSetter      | Type   |
| -------------- | -------------- | ------ |
| `targetX`      | `targetX`      | double |
| `targetY`      | `targetY`      | double |
| `targetZ`      | `targetZ`      | double |
| `attackDamage` | `attackDamage` | float  |
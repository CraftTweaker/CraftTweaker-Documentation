# MinecartCollision

MinecartCollisionEvent is fired whenever a minecart collides with an entity.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
MinecartCollision Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetter

| ZenGetter  | Type                                  |
| ---------- | ------------------------------------- |
| `collider` | [IEntity](/Vanilla/Entities/IEntity/) |

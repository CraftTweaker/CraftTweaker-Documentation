# MinecartCollision

MinecartCollisionEvent is fired whenever a minecart collides with an entity.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
MinecartCollision Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter  | Typ                                   |
| ---------- | ------------------------------------- |
| `collider` | [IEntity](/Vanilla/Entities/IEntity/) |

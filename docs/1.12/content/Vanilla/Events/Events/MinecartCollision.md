# MinecartCollision 

MinecartCollisionEvent is fired whenever a minecart collides with an entity.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
MinecartCollision Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `collider`      |                 | [IEntity](/Vanilla/Entities/IEntity/)             |

## ZenGetters/ZenSetter/ZenMethods from extensions
The following information can be retrieved from the event:
| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `minecart`      |                 | [IEntity](/Vanilla/Entities/IEntity/)             |

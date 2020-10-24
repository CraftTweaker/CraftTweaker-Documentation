# MinecartCollision

MinecartCollisionEvent is fired whenever a minecart collides with an entity.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
MinecartCollision Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## Геттеры

| ZenGetter  | Тип                                   |
| ---------- | ------------------------------------- |
| `collider` | [IEntity](/Vanilla/Entities/IEntity/) |

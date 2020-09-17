# MinecartCollision

MinecartCollisionEvent стреляется, когда добыча сталкивается с сущностью.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
События MinecartCollision реализуют следующие интерфейсы и могут также вызвать все их методы/getters/setters:

- [IMinecartEvent](/Vanilla/Events/Events/IMinecartEvent/)

## Геттеры

| ZenGetter   | Тип                                   |
| ----------- | ------------------------------------- |
| `коллайдер` | [IEntity](/Vanilla/Entities/IEntity/) |

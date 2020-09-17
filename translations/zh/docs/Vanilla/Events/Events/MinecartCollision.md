# MinecartCollision

每当矿工与某个实体碰撞时，都会发射地雷碰撞事件。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MinecartCollisionEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
Minecart碰撞事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [Imminecart事件](/Vanilla/Events/Events/IMinecartEvent/)

## ZenGetters

| ZenGetter | 返回值类型                                 |
| --------- | ------------------------------------- |
| `切换器`     | [IEntity](/Vanilla/Entities/IEntity/) |

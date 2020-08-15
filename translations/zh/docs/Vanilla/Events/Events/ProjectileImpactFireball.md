# ProjectileImpactFireball

每当火球撞击某个实体但在损毁之前等被计算出来时，该事件都会被发射。 它是 **可取消**，如果取消，将不会处理影响。

火球实体的加速值可以通过zengetters获得。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftmilever.event.ProjecttileImpactFireballEvent;`

## 扩展 IEntityEvent
ProjecttileImpactFireball Events 实现了以下接口，并且能够调用他们的所有方法/getter/setters：

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters 和 ZenSettters

以下信息可以从事件中检索：

| ZenGetter       | ZenSetter       | 类型                                                        |
| --------------- | --------------- | --------------------------------------------------------- |
| `火球`            |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `射手`            |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `加速X`           | `加速X`           | 双精度                                                       |
| `加速度Y`          | `加速度Y`          | 双精度                                                       |
| `accelerationZ` | `accelerationZ` | 双精度                                                       |

# 可投射投影器

每当投掷可投射炮弹撞击某个实体但在损坏之前等被计算出来时，就会发射这个事件。 它是 **可取消**，如果取消，将不会处理影响。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftmilower.event.ProjecttileImpactThrowableEvent;`

## 扩展 IEntityEvent
ProjectleImpactThrow事件实现了以下接口，并且能够调用其所有方法/getter/setters：

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters 和 ZenSettters

以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                                        |
| --------- | --------- | --------------------------------------------------------- |
| `火球`      |           | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `射手`      |           | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |

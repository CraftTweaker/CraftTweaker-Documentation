# IProjectileImpact事件

这个接口由所有与射弹有关的事件(例如火球、箭头和可投掷物品)扩展。

## 导入类
可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftweaper.eventIProjectileImpact事件；`

## 扩展 IEntityEvent
此接口扩展 [IEntityEvent](/Vanilla/Events/Events/IEntityEvent/), 这意味着IEntityEvent 提供的所有功能也都存在于IProjectileImpactEvent中。

## ZenGetters

| 名称         | 类型                                                 |
| ---------- | -------------------------------------------------- |
| `rayTrace` | [IRayTraceResult](/Vanilla/World/IRayTraceResult/) |

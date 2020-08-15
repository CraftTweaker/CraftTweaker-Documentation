# IRayTraceResult

当玩家看到或点击某些东西时，他会射出一只射到它需要击中的光，或者错了。  
这次攻击的结果是一个 IRayTraceResults 对象。

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.world.IRayTraceResult`

## ZenGetters

您可以做的只是从这些对象中检索信息，这里：  
小心不过。 因为所有不返回布尔的采集器可以返回 `null`！

| 名称       | 类型                                     |
| -------- | -------------------------------------- |
| isMiss   | 布尔值                                    |
| 空格       | 布尔值                                    |
| isBlock  | 布尔值                                    |
| 实体       | [IEntity](/Vanilla/Entities/IEntity/)  |
| blockPos | [IBlockPos](/Vanilla/World/IBlockPos/) |
| sideHit  | [IFacing](/Vanilla/World/IFacing/)     |
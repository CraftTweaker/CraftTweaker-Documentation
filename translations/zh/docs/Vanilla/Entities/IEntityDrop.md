# IEntityDrop

一个 IEntityDrop 指的是从 [实体](/Vanilla/Entities/IEntityDefinition/) 掉期的。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftminstruer.entity. IEntityDrop；`

## ZenGetters

您可以从他们中检索此信息。

| ZenGetter | 功能               | 退货类型                                     | 用法      |
| --------- | ---------------- | ---------------------------------------- | ------- |
| 几率：       | 返回掉落的几率。         | 浮点数                                      | `机会`    |
| 最大值       | 返回掉落的最大数量。       | 整数                                       | `最大掉落数` |
| 分钟        | 返回最小掉落量。         | 整数                                       | `分钟`    |
| 仅播放器      | 返回是否仅播放。         | boolean                                  | `仅限玩家`  |
| range     | 返回最小值到掉落的最大数量范围。 | 整数范围                                     | `范围`    |
| 堆栈...     | 返回丢弃的项目。         | [IItemStack](/Vanilla/Items/IItemStack/) | `堆栈...` |
# IBlockEvent

此接口由所有可以处理世界上方块的事件扩展。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.eventIBlockEvent;`

## 扩展IEventPositionable

此接口扩展 [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), 这意味着IEventPositionable 提供的所有功能也都存在于IBlockEvent 事件中。

## ZenGetters

| 名称   | 类型                                          |
| ---- | ------------------------------------------- |
| 世界   | [IWorld](/Vanilla/World/IWorld/)            |
| 封禁状态 | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| 封禁   | [IBlock](/Vanilla/Blocks/IBlock/)           |
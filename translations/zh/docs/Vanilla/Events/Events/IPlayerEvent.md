# IPlayerEvent

此接口被所有有玩家的事件扩展。  
意味着您可以使用下面的getter访问玩家。

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftmilower.event.IPlayerEvent；`

## 扩展 ILivingEvent

此接口扩展 [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), 这意味着ILivingEvent 提供的所有功能也都存在于IPlayerEvent

## ZenGetters

| 名称  | 类型                                   |
| --- | ------------------------------------ |
| 播放器 | [IPlayer](/Vanilla/Players/IPlayer/) |
# IPlayerEvent
This interface is extended by all events that have a player.  
That means you can use the getter below to access the player.


## 导入类
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IPlayerEvent;`

## Extending ILivingEvent
This interface extends [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/), which means that all functionality that ILivingEvent offers is also present in IPlayerEvent

## ZenGetters

| name（名称） | 类型                                   |
| -------- | ------------------------------------ |
| player   | [IPlayer](/Vanilla/Players/IPlayer/) |
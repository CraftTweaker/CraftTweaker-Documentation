# ITickEvent
This interface is extended by all events that use ticks.

## 导入相关包
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ITickEvent;`

## ZenGetters

| name  | 类型                                   |
| ----- | ------------------------------------ |
| phase | string (can be "START" or "END")     |
| side  | string (can be "CLIENT" or "SERVER") |
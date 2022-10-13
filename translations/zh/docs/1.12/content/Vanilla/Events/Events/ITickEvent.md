# ITickEvent
This interface is extended by all events that use ticks.

## 导入类
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ITickEvent;`

## ZenGetters

| name（名称） | 类型                                   |
| -------- | ------------------------------------ |
| phase    | string (can be "START" or "END")     |
| side     | string (can be "CLIENT" or "SERVER") |
# IEventPositionable

This interface is extended by all events whose position matters.  
That means you can use the getters below to access the position details.


## 导入类
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.IEventPositionable;`


## ZenGetters

| name（名称） | 类型                                     |
| -------- | -------------------------------------- |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x        | int                                    |
| y        | int                                    |
| z        | int                                    |
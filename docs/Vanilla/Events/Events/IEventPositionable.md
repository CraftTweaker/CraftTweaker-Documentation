# 事件可获取位置（IEventPositionable）

这个接口被所有拥有坐标功能的事件所继承。  
这也意味着你可以使用 getters 来获取位置信息。


## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.IEventPositionable;`


## ZenGetters

| name     | type                                  |
|----------|---------------------------------------|
| position | [IBlockPos](/Vanilla/World/IBlockPos) |
| x        | int                                   |
| y        | int                                   |
| z        | int                                   |

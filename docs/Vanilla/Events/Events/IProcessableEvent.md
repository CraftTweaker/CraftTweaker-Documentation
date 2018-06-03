# 事件可处理（IProcessableEvent）

这个接口被所有拥有处理的事件所继承。  
这个事件被设置为处理后所有它产生的事件都是完成，且不能被其他事件再次修改。     
但是！其本身还可以修改！


## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.IPlayerEvent;`

## 可以做些什么？

- `event.process();` method，不返还任何数值
- `event.processed;` getter，返回布尔值

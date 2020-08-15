# IProcessableEvent

此接口将扩展到所有可以处理的事件。  
这些事件将设置为已经处理完毕，其它事件处理程序不应再改变事件。  
铭记他们仍然可以！

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftmilower.event.IPlayerEvent；`

## 在这些问题上能够做些什么？

- `event.process();` method, 返回 null (nothing)
- `event.process;` getter, 返回 bool
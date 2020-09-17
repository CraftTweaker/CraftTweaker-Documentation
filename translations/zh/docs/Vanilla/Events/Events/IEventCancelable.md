# IEventCancelable

此接口由所有可以取消的事件扩展。  
意味着您可以使用 CrT 取消他们，或者检查他们是否已被取消。

请注意，CrT接收之前取消的事件将不会由处理器检查。  
另外，如果您注册了多个处理程序，而且其中一个处理程序取消了该事件，那么其他的 CrT 处理程序仍将收到它！

## 导入相关包

可能需要 [导入](/AdvancedFunctions/Import/) 类以避免错误。  
`导入craftminstruer.eventIEventCancelle；`

## 他们能够做些什么？

- `event.cancel();` Method, 返回 nouvelle (nothing).
- `event.取消；` Getter返回布尔值。
- `event.取消 = true;`
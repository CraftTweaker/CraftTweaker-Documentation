# 事件可取消（IEventCancelable）

这个接口被所有可以取消的事件所继承。  
这意味着你不单单可以检查它们是否被取消，也可以使用 CrT 来取消它们。

如果在 CrT 收到事件之前就被取消了，那么将不会被这个管理器所检查。  
同样的，如果你注册了多个处理器，并且其中一个取消了这个事件，其他 CrT 处理器仍然会收到它！

## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
`import crafttweaker.event.IEventCancelable;`

## 可以做些什么？

- `event.cancel();` Method，不返回任何数值。
- `event.canceled;` Getter，返回布尔值。
- `event.canceled = true;` Setter

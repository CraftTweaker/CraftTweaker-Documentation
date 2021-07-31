# IEvent

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.event.IEvent
```

## Constructor #构造函数
```zenscript
new crafttweaker.api.event.IEvent(handler as function.Consumer<E>);
```
| 参数      | 类型                                     | 描述                      |
| ------- | -------------------------------------- | ----------------------- |
| handler | function.Consumer&lt;E&gt; | No description provided |




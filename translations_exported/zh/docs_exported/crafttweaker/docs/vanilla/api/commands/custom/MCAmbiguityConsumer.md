# MCAmbiguityConsumer

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCAmbiguityConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(父母、孩子、兄弟姐妹、输入) =>{}
```
## 方法
### 含糊不清的

```zenscript
myMCAmbiguityConsumer.marious(父级为 craftmilever.api.commands.custom.MCCommandNode, 子级为 craftweeper.api.commands.custom.MCCommandNode, sibing as craftweeper.api.commands.custom.MCCommandNode, input as Collection<String>);
```

| 参数     | 类型                                                                                            | 描述                      |
| ------ | --------------------------------------------------------------------------------------------- | ----------------------- |
| parent | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| 子节点    | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| 兄弟姐妹的  | [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
| inputs | 收藏&lt;String&gt;                                                                  | No description provided |




# MCLiteralCommand节点

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCLiteralCommandNode
```

## 已实现的接口
MCLiteralCommandNode 实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [craftminstrer.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## 方法
### createBuilder

返回类型： [craftbiner.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals #等于

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(ao as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### getLiteral

Return type: String

```zenscript
a. myMCLiteralCommandNode.getLiteral();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(输入为字符串)；
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | String | No description provided |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## 运算符
### EQUALS

```zenscript
myMCLiteralCommandNode == o 为对象
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |


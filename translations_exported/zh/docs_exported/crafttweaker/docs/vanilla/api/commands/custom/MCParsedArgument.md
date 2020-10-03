# MCParsedArgument

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.commands.custom.MCParsedArgument
```

## 方法
### equals #等于

Return type: boolean

```zenscript
myMCParsedArgument.equals(o as Object);
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |


### getRange

返回类型： [craftbiner.api.commands.custom.MCStringrange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCParsedArgument.getRange();
```

### hashCode

Return type: int

```zenscript
myMCParsedArgument.hashCode();
```

### toString

Return type: String

```zenscript
myMCParsedArgument.toString();
```


## 运算符
### EQUALS

```zenscript
myMCParsedArgument == o 为对象
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No description provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| String | true |


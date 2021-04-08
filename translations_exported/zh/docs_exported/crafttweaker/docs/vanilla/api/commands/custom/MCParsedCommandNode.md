# MCParsedCommandNode

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParsedCommandNode;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=equals}

Return Type: boolean

```zenscript
MCParsedCommandNode.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=getNode}

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCParsedCommandNode.getNode() as MCCommandNode
myMCParsedCommandNode.getNode();
```

:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCParsedCommandNode.getRange() as MCStringRange
myMCParsedCommandNode.getRange();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCParsedCommandNode.hashCode() as int
myMCParsedCommandNode.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
MCParsedCommandNode.toString() as string
myMCParsedCommandNode.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCParsedCommandNode == o 为对象
```

:::



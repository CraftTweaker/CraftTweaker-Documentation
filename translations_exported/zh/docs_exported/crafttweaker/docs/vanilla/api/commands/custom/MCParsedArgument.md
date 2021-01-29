# MCParsedArgument

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParsedArgument;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCParsedArgument.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCParsedArgument.getRange() as MCStringRange
myMCParsedArgument.getRange();
```
### hashCode

Return Type: int

```zenscript
MCParsedArgument.hashCode() as int
myMCParsedArgument.hashCode();
```
### toString

Return Type: string

```zenscript
MCParsedArgument.toString() as string
myMCParsedArgument.toString();
```

## 运算符

### EQUALS

```zenscript
myMCParsedArgument == o 为对象
```




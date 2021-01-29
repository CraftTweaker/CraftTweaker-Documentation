# MCRootCommandNode

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRootCommandNode;
```


## Extending MCCommandNode

MCRootCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCRootCommandNode

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCRootCommandNode.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### hashCode

Return Type: int

```zenscript
MCRootCommandNode.hashCode() as int
myMCRootCommandNode.hashCode();
```
### isValidInput

Return Type: boolean

```zenscript
MCRootCommandNode.isValidInput(input as string) as boolean
```
| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | string | No Description Provided |

### toString

Return Type: string

```zenscript
MCRootCommandNode.toString() as string
myMCRootCommandNode.toString();
```

## 运算符

### EQUALS

```zenscript
myMCRootCommandNode == o as Object
```




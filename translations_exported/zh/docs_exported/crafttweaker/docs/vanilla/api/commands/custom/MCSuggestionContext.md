# MCSuggestionContext

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionContext;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCSuggestionContext.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### 获取父项

Return Type: [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
MCSuggestionContext.getParent() as MCCommandNode
myMCSuggestionContext.getParent();
```
### getStartPos

Return Type: int

```zenscript
MCSuggestionContext.getStartPos() as int
myMCSuggestionContext.getStartPos();
```
### hashCode

Return Type: int

```zenscript
MCSuggestionContext.hashCode() as int
myMCSuggestionContext.hashCode();
```
### toString

Return Type: string

```zenscript
MCSuggestionContext.toString() as string
myMCSuggestionContext.toString();
```

## 运算符

### EQUALS

```zenscript
myMCSuggestionContext == o 为对象
```




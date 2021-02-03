# MCArgumentCommandNode

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCArgumentCommandNode;
```


## Extending MCCommandNode

MCArgumentCommandNode extends [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode). That means all methods available in [MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) are also available in MCArgumentCommandNode

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### createBuilder

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
MCArgumentCommandNode.createBuilder() as MCRequiredArgumentBuilder
myMCArgumentCommandNode.createBuilder();
```

### equals #等于

Return Type: boolean

```zenscript
MCArgumentCommandNode.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


### getCustomSuggestions

Return Type: [MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
MCArgumentCommandNode.getCustomSuggestions() as MCSuggestionProvider
myMCArgumentCommandNode.getCustomSuggestions();
```

### hashCode

Return Type: int

```zenscript
MCArgumentCommandNode.hashCode() as int
myMCArgumentCommandNode.hashCode();
```

### toString

Return Type: string

```zenscript
MCArgumentCommandNode.toString() as string
myMCArgumentCommandNode.toString();
```


## 运算符

### EQUALS

```zenscript
myMCArgumentCommandNode == o as Object
```





# MCParseResults

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCParseResults;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCParseResults.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


### getContext

Return Type: [MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
MCParseResults.getContext() as MCCommandContextBuilder
myMCParseResults.getContext();
```

### 获取异常

Return Type: Exception[[MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
MCParseResults.getExceptions() as Exception[MCCommandNode]
myMCParseResults.getExceptions();
```

### 获取阅读器

Return Type: [MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader)

```zenscript
MCParseResults.getReader() as MCImmutableStringReader
myMCParseResults.getReader();
```

### hashCode

Return Type: int

```zenscript
MCParseResults.hashCode() as int
myMCParseResults.hashCode();
```

### toString

Return Type: string

```zenscript
MCParseResults.toString() as string
myMCParseResults.toString();
```


## 运算符

### EQUALS

```zenscript
myMCParseResults == o 为对象
```





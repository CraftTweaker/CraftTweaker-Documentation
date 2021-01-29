# MCSuggestions

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestions;
```


## 方法

### 创建

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.create(command as string, suggestions as Collection<MCSuggestion>) as MCSuggestions
```
| 参数      | 类型                                                                                      | 描述                      |
| ------- | --------------------------------------------------------------------------------------- | ----------------------- |
| command | string                                                                                  | No Description Provided |
| 建议      | Collection&lt;[MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No Description Provided |

### empty

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.empty() as MCSuggestions
MCSuggestions.empty();
```
### merge #合并

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.merge(command as string, input as Collection<MCSuggestions>) as MCSuggestions
```
| 参数        | 类型                                                                                        | 描述                      |
| --------- | ----------------------------------------------------------------------------------------- | ----------------------- |
| command   | string                                                                                    | No Description Provided |
| input（输入） | Collection&lt;[MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No Description Provided |

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCSuggestions.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### getList

Return Type: stdlib.List&lt;[MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt;

```zenscript
MCSuggestions.getList() as stdlib.List<MCSuggestion>
myMCSuggestions.getList();
```
### getRange

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCSuggestions.getRange() as MCStringRange
myMCSuggestions.getRange();
```
### hashCode

Return Type: int

```zenscript
MCSuggestions.hashCode() as int
myMCSuggestions.hashCode();
```
### isEmpty

Return Type: boolean

```zenscript
MCSuggestions.isEmpty() as boolean
myMCSuggestions.isEmpty();
```
### toString

Return Type: string

```zenscript
MCSuggestions.toString() as string
myMCSuggestions.toString();
```

## 运算符

### EQUALS

```zenscript
myMCSuggestions == o 为对象
```




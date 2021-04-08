# MCSuggestions

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestions;
```


## 方法

:::group{name=create}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.create(command as string, suggestions as Collection<MCSuggestion>) as MCSuggestions
```

| 参数      | 类型                                                                                      | 描述                      |
| ------- | --------------------------------------------------------------------------------------- | ----------------------- |
| command | string                                                                                  | No Description Provided |
| 建议      | Collection&lt;[MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | No Description Provided |


:::

:::group{name=empty}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.empty() as MCSuggestions
MCSuggestions.empty();
```

:::

:::group{name=merge}

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestions.merge(command as string, input as Collection<MCSuggestions>) as MCSuggestions
```

| 参数        | 类型                                                                                        | 描述                      |
| --------- | ----------------------------------------------------------------------------------------- | ----------------------- |
| command   | string                                                                                    | No Description Provided |
| input（输入） | Collection&lt;[MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | No Description Provided |


:::

## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestions.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=getList}

Return Type: stdlib.List&lt;[MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt;

```zenscript
MCSuggestions.getList() as stdlib.List<MCSuggestion>
myMCSuggestions.getList();
```

:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCSuggestions.getRange() as MCStringRange
myMCSuggestions.getRange();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCSuggestions.hashCode() as int
myMCSuggestions.hashCode();
```

:::

:::group{name=isEmpty}

Return Type: boolean

```zenscript
MCSuggestions.isEmpty() as boolean
myMCSuggestions.isEmpty();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
MCSuggestions.toString() as string
myMCSuggestions.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCSuggestions == o 为对象
```

:::



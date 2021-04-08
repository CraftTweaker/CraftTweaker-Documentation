# MCSuggestion

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestion;
```


## Casters

| 结果类型   | 是否隐藏 |
| ------ | ---- |
| string | true |

## 方法

:::group{name=apply}

Return Type: string

```zenscript
MCSuggestion.apply(input as string) as string
```

| 参数        | 类型     | 描述                      |
| --------- | ------ | ----------------------- |
| input（输入） | string | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MCSuggestion.compareTo(o as MCSuggestion) as int
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| o  | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=compareToIgnoreCase}

Return Type: int

```zenscript
MCSuggestion.compareToIgnoreCase(b as MCSuggestion) as int
```

| 参数 | 类型                                                        | 描述                      |
| -- | --------------------------------------------------------- | ----------------------- |
| b  | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestion.equals(o as Object) as boolean
```

| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |


:::

:::group{name=expandWith}

Return Type: [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
MCSuggestion.expandWith(command as string, range as MCStringRange) as MCSuggestion
```

| 参数      | 类型                                                          | 描述                      |
| ------- | ----------------------------------------------------------- | ----------------------- |
| command | string                                                      | No Description Provided |
| range   | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


:::

:::group{name=getRange}

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCSuggestion.getRange() as MCStringRange
myMCSuggestion.getRange();
```

:::

:::group{name=getText}

Return Type: string

```zenscript
MCSuggestion.getText() as string
myMCSuggestion.getText();
```

:::

:::group{name=getTooltip}

Return Type: string

```zenscript
MCSuggestion.getTooltip() as string
myMCSuggestion.getTooltip();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
MCSuggestion.hashCode() as int
myMCSuggestion.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
MCSuggestion.toString() as string
myMCSuggestion.toString();
```

:::


## 运算符

:::group{name=EQUALS}

```zenscript
myMCSuggestion == o 为对象
```

:::



# MCSuggestion

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestion;
```


## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

:::group{name=apply}

Return Type: string

```zenscript
MCSuggestion.apply(input as string) as string
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| input    | string | No Description Provided |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
MCSuggestion.compareTo(o as MCSuggestion) as int
```

| Параметр | Тип                                                       | Description             |
| -------- | --------------------------------------------------------- | ----------------------- |
| o        | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=compareToIgnoreCase}

Return Type: int

```zenscript
MCSuggestion.compareToIgnoreCase(b as MCSuggestion) as int
```

| Параметр | Тип                                                       | Description             |
| -------- | --------------------------------------------------------- | ----------------------- |
| т        | [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCSuggestion.equals(o as Object) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |


:::

:::group{name=expandWith}

Return Type: [MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
MCSuggestion.expandWith(command as string, range as MCStringRange) as MCSuggestion
```

| Параметр | Тип                                                         | Description             |
| -------- | ----------------------------------------------------------- | ----------------------- |
| command  | string                                                      | No Description Provided |
| range    | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |


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


## Операторы

:::group{name=EQUALS}

```zenscript
myMCSuggestion == o как объект
```

:::



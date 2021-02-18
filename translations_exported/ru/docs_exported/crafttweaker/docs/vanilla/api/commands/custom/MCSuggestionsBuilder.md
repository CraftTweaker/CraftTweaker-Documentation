# MCSuggessBuilder

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCSuggestionsBuilder;
```


## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| string         | true             |

## Methods

### add

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.add(other as MCSuggestionsBuilder) as MCSuggestionsBuilder
```

| Параметр | Тип                                                                   | Description             |
| -------- | --------------------------------------------------------------------- | ----------------------- |
| other    | [MCSuggessBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No Description Provided |


### build

Return Type: [MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
MCSuggestionsBuilder.build() as MCSuggestions
myMCSuggestionsBuilder.build();
```

### создать смещение

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.createOffset(start as int) as MCSuggestionsBuilder
```

| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| старт    | int | No Description Provided |


### equals

Return Type: boolean

```zenscript
MCSuggestionsBuilder.equals(o as Object) as boolean
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| o        | Object | No Description Provided |


### getInput

Return Type: string

```zenscript
MCSuggestionsBuilder.getInput() as string
myMCSuggestionsBuilder.getInput();
```

### получить оставшееся

Return Type: string

```zenscript
MCSuggestionsBuilder.getRemaining() as string
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Return Type: int

```zenscript
MCSuggestionsBuilder.getStart() as int
myMCSuggestionsBuilder.getStart();
```

### hashCode

Return Type: int

```zenscript
MCSuggestionsBuilder.hashCode() as int
myMCSuggestionsBuilder.hashCode();
```

### перезапустить

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.restart() as MCSuggestionsBuilder
myMCSuggestionsBuilder.restart();
```

### предложить

Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string) as MCSuggestionsBuilder
```

| Параметр | Тип    | Description             |
| -------- | ------ | ----------------------- |
| текст    | string | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int) as MCSuggestionsBuilder
```

| Параметр | Тип | Description             |
| -------- | --- | ----------------------- |
| value    | int | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(text as string, tooltip as string) as MCSuggestionsBuilder
```

| Параметр  | Тип    | Description             |
| --------- | ------ | ----------------------- |
| текст     | string | No Description Provided |
| подсказка | string | No Description Provided |


Return Type: [MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
MCSuggestionsBuilder.suggest(value as int, tooltip as string) as MCSuggestionsBuilder
```

| Параметр  | Тип    | Description             |
| --------- | ------ | ----------------------- |
| value     | int    | No Description Provided |
| подсказка | string | No Description Provided |


### toString

Return Type: string

```zenscript
MCSuggestionsBuilder.toString() as string
myMCSuggestionsBuilder.toString();
```


## Операторы

### EQUALS

```zenscript
myMCSuggestionsBuilder == o как объект
```





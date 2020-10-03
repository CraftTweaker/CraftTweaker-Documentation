# MCSuggesProvider

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(fun as function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Параметр | Тип                                                                                                                                                                                                                                                                                                                                                 | Description          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| весело   | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Описание отсутствует |



## Methods
### equals

Return type: boolean

```zenscript
myMCSuggestionProvider.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### getSuggestions

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Параметр    | Тип                                                                                                        | Description          |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| контекст    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Описание отсутствует |
| конструктор | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Описание отсутствует |


### hashCode

Return type: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

Return type: String

```zenscript
myMCSuggestionProvider.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSuggestionProvider == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


# MCCommand

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Параметр | Тип                                                                                                                                                  | Description          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| весело   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), целое число&gt; | Описание отсутствует |



## Methods
### equals

Return type: boolean

```zenscript
myMCCommand.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### hashCode

Return type: int

```zenscript
myMCCommand.hashCode();
```

### запуск

Return type: int

```zenscript
myMCCommand.run(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Параметр | Тип                                                                                                | Description          |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| контекст | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCCommand.toString();
```


## Операторы
### EQUALS

```zenscript
myMCCommand == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


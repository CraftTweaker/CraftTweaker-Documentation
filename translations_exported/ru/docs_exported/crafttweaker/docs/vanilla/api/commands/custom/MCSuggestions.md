# MCSuggestions

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Methods
### создать

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(команда "Строка", предложения Коллекция<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Параметр    | Тип                                                                                                                     | Description          |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------- |
| command     | String                                                                                                                  | Описание отсутствует |
| предложения | Коллекция&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Описание отсутствует |


### empty

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### equals

Return type: boolean

```zenscript
myMCSuggestions.equals(o as Object);
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |


### getList

Тип возврата: Список&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

Возврат типа: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Return type: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Return type: boolean

```zenscript
myMCSuggestions.isEmpty();
```

### merge

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(command as String, input as Collection<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Параметр | Тип                                                                                                                       | Description          |
| -------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| command  | String                                                                                                                    | Описание отсутствует |
| input    | Коллекция&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Описание отсутствует |


### toString

Return type: String

```zenscript
myMCSuggestions.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSuggestions == o как объект
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| o        | Object | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


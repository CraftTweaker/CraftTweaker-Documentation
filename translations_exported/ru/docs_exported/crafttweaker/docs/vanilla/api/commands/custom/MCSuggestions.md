# MCSuggestions

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Методы
### создать

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(команда "Строка", предложения Коллекция<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Параметр    | Тип                                                                                                                     | Описание             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------- |
| команда     | String                                                                                                                  | Описание отсутствует |
| предложения | Коллекция&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Описание отсутствует |


### пустой

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCSuggestions.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


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

Тип возврата: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Тип возврата: логическое значение

```zenscript
myMCSuggestions.isEmpty();
```

### слияние

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(command as String, input as Collection<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Параметр | Тип                                                                                                                       | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| команда  | String                                                                                                                    | Описание отсутствует |
| input    | Коллекция&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCSuggestions.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSuggestions == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


# МCRedirectМодификатор

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCRedirectModifier
```

## Конструкторы
```zenscript
new crafttweaker.api.commands.custom.MCRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Collection<crafttweaker.api.commands.custom.MCCommandSource>>);
```
| Параметр | Тип                                                                                                                                                                                                                                                                     | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| весело   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Collection&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | Описание отсутствует |



## Методы
### применить

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Параметр | Тип                                                                                                | Описание             |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| контекст | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCRedirectModifier.equals(o как объект);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### hashCode

Тип возврата: int

```zenscript
myMCRedirectModifier.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCRedirectModifier.toString();
```


## Операторы
### EQUALS

```zenscript
myMCRedirectModifier == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


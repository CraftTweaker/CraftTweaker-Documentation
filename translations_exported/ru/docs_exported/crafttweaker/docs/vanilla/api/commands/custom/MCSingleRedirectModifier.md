# Модификатор перенаправления MCSingleRedirectModifier

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Конструкторы
```zenscript
new crafttweaker.api.commands.custom.MCSingleRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Параметр | Тип                                                                                                                                                                                                                                       | Описание             |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| весело   | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Описание отсутствует |



## Методы
### применить

Возврат тип: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Параметр | Тип                                                                                                | Описание             |
| -------- | -------------------------------------------------------------------------------------------------- | -------------------- |
| контекст | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Описание отсутствует |


### равно

Тип возврата: логическое значение

```zenscript
myMCSingleRedirectModifier.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### hashCode

Тип возврата: int

```zenscript
myMCSingleRedirectModifier.hashCode();
```

### toString

Тип возврата: строка

```zenscript
myMCSingleRedirectModifier.toString();
```


## Операторы
### EQUALS

```zenscript
myMCSingleRedirectModifier == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


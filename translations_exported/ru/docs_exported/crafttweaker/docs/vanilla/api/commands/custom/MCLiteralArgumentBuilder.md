# MCLiteralArgumentBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCLiteralArgumentBuilder
```

## Реализованные интерфейсы
MCLiteralArgumentBuilder реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Методы
### сборка

Возвращаемый тип: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCLiteralArgumentBuilder.build();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCLiteralArgumentBuilder.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### выполняет

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.executes(command as crafttweaker.api.commands.custom.MCCommand);
```

| Параметр | Тип                                                                                  | Описание             |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| команда  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Описание отсутствует |


### fork

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.fork(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |


### вперёд

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.forward(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier, форка как boolean);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |
| fork     | boolean                                                                                                | Описание отсутствует |


### getАргументы

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Тип возврата: строка

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralArgumentBuilder.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralArgumentBuilder.getRedirectModifier();
```

### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Тип возврата: int

```zenscript
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Тип возврата: логическое значение

```zenscript
myMCLiteralArgumentBuilder.isFork();
```

### перенаправление

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Параметр | Тип                                                                                                                | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Описание отсутствует |


### требуется

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.requires(requirement as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Параметр   | Тип                                                                                                                                    | Описание             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| требование | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Описание отсутствует |


### затем

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Параметр | Тип                                                                                                  | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCLiteralArgumentBuilder.toString();
```


## Операторы
### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


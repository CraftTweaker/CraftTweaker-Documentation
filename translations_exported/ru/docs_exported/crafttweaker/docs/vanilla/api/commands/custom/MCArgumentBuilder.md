# MCArgumentBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Методы
### сборка

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCArgumentBuilder.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### выполняет

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(команда как crafttweaker.api.commands.custom.MCCommand);
```

| Параметр | Тип                                                                                  | Описание             |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| команда  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Описание отсутствует |


### fork

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |


### вперёд

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier, форк как boolean);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |
| fork     | boolean                                                                                                | Описание отсутствует |


### getАргументы

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentBuilder.getRequirement();
```

### hashCode

Тип возврата: int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

Тип возврата: логическое значение

```zenscript
myMCArgumentBuilder.isFork();
```

### перенаправление

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Параметр | Тип                                                                                                                | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Описание отсутствует |


### требуется

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.requires(requirement as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Параметр   | Тип                                                                                                                                    | Описание             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| требование | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Описание отсутствует |


### затем

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Параметр | Тип                                                                                                  | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCArgumentBuilder.toString();
```


## Операторы
### EQUALS

```zenscript
myMCArgumentBuilder == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


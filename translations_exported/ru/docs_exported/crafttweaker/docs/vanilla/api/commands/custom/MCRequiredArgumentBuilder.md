# MCRequiredArgumentBuilder

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Реализованные интерфейсы
MCRequiredArgumentBuilder реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Методы
### сборка

Возврат тип: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### равно

Тип возврата: логическое значение

```zenscript
myMCRequiredArgumentBuilder.equals(o as Object);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |


### выполняет

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(command as crafttweaker.api.commands.custom.MCCommand);
```

| Параметр | Тип                                                                                  | Описание             |
| -------- | ------------------------------------------------------------------------------------ | -------------------- |
| команда  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Описание отсутствует |


### fork

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |


### вперёд

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCRedirectModifier, форк как boolean);
```

| Параметр | Тип                                                                                                    | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Описание отсутствует |
| fork     | boolean                                                                                                | Описание отсутствует |


### getАргументы

Тип возврата: Коллекция&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Возврат типа: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Тип возврата: строка

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Возврат тип: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

Тип возврата: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### getRequirement

Тип возврата: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggessProvider

Тип возврата: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Тип возврата: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Тип возврата: логическое значение

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### перенаправление

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(цель как crafttweaker.api.commands.custom.MCCommandNode, модификатор как crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Параметр | Тип                                                                                                                | Описание             |
| -------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| target   | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Описание отсутствует |
| modifier | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Описание отсутствует |


### требуется

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requirement as function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Параметр   | Тип                                                                                                                                    | Описание             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| требование | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Описание отсутствует |


### предлагает

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.proposests(provider as crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Параметр  | Тип                                                                                                        | Описание             |
| --------- | ---------------------------------------------------------------------------------------------------------- | -------------------- |
| провайдер | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | Описание отсутствует |


### затем

Тип возврата: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Параметр | Тип                                                                                                  | Описание             |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCCommandNode);
```

| Параметр | Тип                                                                                          | Описание             |
| -------- | -------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Описание отсутствует |



Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(аргумент как crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Параметр | Тип                                                                                                                  | Описание             |
| -------- | -------------------------------------------------------------------------------------------------------------------- | -------------------- |
| аргумент | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | Описание отсутствует |


### toString

Тип возврата: строка

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Операторы
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o как объект
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| о        | Объект | Описание отсутствует |

## Утилиты

| Тип результата | Является неявным |
| -------------- | ---------------- |
| String         | true             |


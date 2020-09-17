# Команды

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Методы
### аргумент

Тип возврата: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### литерал

Тип возврата: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |


### registerCommand

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Параметр    | Тип                                                                                                                | Описание             |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | -------------------- |
| конструктор | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Описание отсутствует |




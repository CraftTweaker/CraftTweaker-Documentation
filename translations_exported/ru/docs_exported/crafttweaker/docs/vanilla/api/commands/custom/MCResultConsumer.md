# MCResultConsumer

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(командный текст, успех, результат) =>{}
```
## Methods
### выполнить команду

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, успех как булев, результат как int);
```

| Параметр           | Тип                                                                                                | Description          |
| ------------------ | -------------------------------------------------------------------------------------------------- | -------------------- |
| командный контекст | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Описание отсутствует |
| success            | boolean                                                                                            | Описание отсутствует |
| result             | int                                                                                                | Описание отсутствует |




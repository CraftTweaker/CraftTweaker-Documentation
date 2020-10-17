# ITooltipFunction

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.tooltip.ITooltipFunction
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(stack, tooltip, isAdvanced) => {}
```
## Methods
### применить

```zenscript
myITooltipFunction.apply(stack as crafttweaker.api.item.IItemStack, tooltip as List<crafttweaker.api.util.text.MCTextComponent>, isAdvanced as boolean);
```

| Параметр   | Тип                                                                                                            | Description          |
| ---------- | -------------------------------------------------------------------------------------------------------------- | -------------------- |
| stack      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                              | Описание отсутствует |
| подсказка  | Список&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | Описание отсутствует |
| isAdvanced | boolean                                                                                                        | Описание отсутствует |




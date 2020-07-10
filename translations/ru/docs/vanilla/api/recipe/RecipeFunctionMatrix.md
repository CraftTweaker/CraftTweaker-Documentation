# RecipeFunctionMatrix

Этот класс добавляется модом `crafttweaker`. Вы должны установить этот мод, если хотите использовать эту возможность.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## Методы
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[][]);
```

| Параметр | Тип                                                                   | Описание             |
| -------- | --------------------------------------------------------------------- | -------------------- |
| usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | Описание отсутствует |
| inputs   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | Описание отсутствует |




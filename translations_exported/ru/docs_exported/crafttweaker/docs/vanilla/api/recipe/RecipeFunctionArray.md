# Рецепт FunctionArray

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.recipe.RecipeFunctionArray
```

## Функциональный интерфейс

Этот класс является функциональным интерфейсом. Это означает, что вы можете использовать нотацию lambda для создания экземпляра. Нотация лямбда выглядит так:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## Методы
### процесс

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionArray.process(usualOut as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IItemStack[]);
```

| Параметр | Тип                                                                 | Описание             |
| -------- | ------------------------------------------------------------------- | -------------------- |
| usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Описание отсутствует |
| inputs   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Описание отсутствует |




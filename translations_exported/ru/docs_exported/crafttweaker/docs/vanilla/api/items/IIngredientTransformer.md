# Иингредиентный трансформатор

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IIngredientTransform
```

## Methods
### getCommandString

Return type: String

```zenscript
myIIngredientTransformer.getCommandString(ингредиент как T);
```

| Параметр   | Тип | Description          |
| ---------- | --- | -------------------- |
| ingredient | T   | Описание отсутствует |


### matches

Return type: boolean

```zenscript
myIIngredientTransformer.matches(стек как crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Description          |
| -------- | ----------------------------------------------------------------- | -------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |




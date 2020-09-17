# Иингредиентный трансформатор

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.item.IIngredientTransform
```

## Методы
### getCommandString

Тип возврата: строка

```zenscript
myIIngredientTransformer.getCommandString(transformedIngredient as T);
```

| Параметр                  | Тип | Описание             |
| ------------------------- | --- | -------------------- |
| преобразован в ингредиент | Т   | Описание отсутствует |


### преобразование

Возвратный тип: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myIIngredientTransformer.transform(стек как crafttweaker.api.item.IItemStack);
```

| Параметр | Тип                                                               | Описание             |
| -------- | ----------------------------------------------------------------- | -------------------- |
| stack    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Описание отсутствует |




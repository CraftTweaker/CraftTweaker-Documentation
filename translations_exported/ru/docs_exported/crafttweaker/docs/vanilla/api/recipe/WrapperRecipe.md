# WrapperRecipe

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.recipes.WrapperRecipe
```

## Methods
### canFit

Return type: boolean

```zenscript
myWrapperRecipe.canFit(width as int, height as int);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| width    | int | Описание отсутствует |
| height   | int | Описание отсутствует |



## Свойства

| Название    | Тип                                                                                         | Имеет Getter | Имеет Setter |
| ----------- | ------------------------------------------------------------------------------------------- | ------------ | ------------ |
| dynamic     | boolean                                                                                     | true         | false        |
| group       | String                                                                                      | true         | false        |
| icon        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true         | false        |
| id          | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)            | true         | false        |
| ingredients | List&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt; | true         | false        |
| output      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true         | false        |


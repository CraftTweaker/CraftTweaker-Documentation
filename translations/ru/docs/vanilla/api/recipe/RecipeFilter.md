# RecipeFilter

Этот класс добавляется модом `crafttweaker`. Вы должны установить этот мод, если хотите использовать эту возможность.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.recipe.RecipeFilter
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(name) => false
```
## Методы
### test

Return type: boolean

```zenscript
myRecipeFilter.test(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |




# Quern

## Пакет
`mods.atum.Quern;`

## Добавление рецепта

`mods.atum.Quern.addRecipe(ввод, вывод, вращения);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `вращения` любое число выше 0

Добавляет рецепт с заданным входом & выходом, который принимает указанные вращения для завершения запроса

```zenscript
mods.atum.Quern.addRecipe(<item:atum:fertile_soil>, <item:atum:fertile_soil_pile>, 3);
```

## Удаление рецепта

### Удалить рецепты по выходу

`mods.atum.Quern.removeRecipeByOutput(Выход);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет все рецепты, в которых приведен результат, предоставленный [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Quern.removeRecipeByOutput(<item:atum:emmer_flour>);
```

### Удалить рецепты по Выходу & Вход

`mods.atum.Quern.removeRecipeByputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет определенный рецепт с указанным выводом & ввод

```zenscript
mods.atum.Quern.removeRecipeByOutputInput(<item:atum:emmer_flour>, <item:atum:emmer>);
```

### Другие методы удаления

Смотрите [менеджеров рецептов](/recipes/recipe_managers) для других способов удаления рецептов Quern

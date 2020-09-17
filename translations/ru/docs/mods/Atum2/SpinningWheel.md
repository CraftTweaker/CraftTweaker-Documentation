# Вращающееся колесо

## Пакет
`mods.atum.SpinningWheel;`

## Добавление рецепта

`mods.atum.SpinningWheel.addRecipe(ввод, вывод, вращения);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `вращения` любое число выше 0

Добавляет рецепт с указанным вводом & вывода который принимает указанные вращения для завершения рецепта

```zenscript
mods.atum.SpinningWheel.addRecipe(<item:atum:scroll>, <item:minecraft:string>, 3);
```

## Удаление рецепта

### Удалить рецепты по выходу

`mods.atum.SpinningWheel.removeRecipeByOutput(Выход);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет все рецепты, в которых приведен результат, предоставленный [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutput(<item:atum:linen_thread>);
```

### Удалить рецепты по Выходу & Вход

`mods.atum.SpinningWheel.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет определенный рецепт с указанным выводом & ввод

```zenscript
mods.atum.SpinningWheel.removeRecipeByOutputInput(<item:atum:linen_thread>, <item:atum:flax>);
```

### Другие методы удаления

Смотрите [менеджеров рецептов](/recipes/recipe_managers) для других способов удаления рецептов вращающегося колеса

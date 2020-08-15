# Килн

Килн - это многоблок, используемый для быстрой обработки строительных блоков, которые можно получить через плавку чего-то в печи.

## Пакет
`mods.atum.Kiln;`

## Черный список

Рецепты Kiln основаны на рецептах ванильной печи и сортируют все кроме строительных блоков. «Черный список» – это способ еще больше минимизировать рецепты из «ванильной печи».

`mods.atum.Kiln.blacklist(id);`

- `id` Идентификатор пространства имен для входного блока/элемента, который должен быть чёрный список.

Удаляет рецепт(ы) с указанным предметом/блоком из рецептов, которые вытащит из ванильной печи

```zenscript
mods.atum.Kiln.blacklist("minecraft:cobblestone");
```

## Добавление рецепта

`mods.atum.Kiln.addRecipe(input, output, experience, @Optional cookTime);`

- `input` [IItemStack](/vanilla/api/items/IItemStack)
- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `опыт` Float number
- `время куки` целое число (если оставить пустым, оно по умолчанию 75)

Добавляет рецепт с указанным входом, выходом, опытом & время приготовления

```zenscript
mods.atum.Kiln.addRecipe(<item:atum:dirty_bone_block>, <item:atum:alabaster>, 0.2);
```

## Удаление рецепта

Методы удаления работают только по рецептам, добавленным специально для Kiln Atum (другие моды) По умолчанию в Atum это будет только рецепт Marl to White Ceramic Tile Block (белая керамическая плитка). Если вы хотите удалить что-нибудь еще, вы, вероятно, ищете черный список (документация выше)

### Удалить рецепты по выходу

`mods.atum.Kiln.removeRecipeByOutput(Выход);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет все рецепты, в которых приведен результат, предоставленный [IItemStack](/vanilla/api/items/IItemStack).

```zenscript
mods.atum.Kiln.removeRecipeByOutput(<item:atum:marl>);
```

### Удалить рецепты по Выходу & Вход

`mods.atum.Kiln.removeRecipeByOutputInput(output, input);`

- `output` [IItemStack](/vanilla/api/items/IItemStack)
- `input` [IItemStack](/vanilla/api/items/IItemStack)

Удаляет определенный рецепт с указанным выводом & ввод

```zenscript
mods.atum.Kiln.removeRecipeByOutputInput(<item:atum:cermic_white>, <item:atum:marl>);
```

### Другие методы удаления

Смотрите [менеджеров рецептов](/recipes/recipe_managers) для других способов удаления рецептов вращающегося колеса

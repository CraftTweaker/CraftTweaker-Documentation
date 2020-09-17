# Пресуризатор

## Импортирование пакета
`mods.nuclearcraft.Пресуризатор`

## Добавление рецептов
```zenscript
mods.nuclearcraft.Pressurizer.addRecipe(IIngredient itemInput, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.Pressurizer.removeRecipeWithInput(IIngredient itemput);
mods.nuclearcraft.Pressurizer.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.Pressurizer.removeAllRecipes();
```
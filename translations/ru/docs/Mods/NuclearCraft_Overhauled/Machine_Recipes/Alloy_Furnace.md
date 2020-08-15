# Сплав печи

## Импортирование пакета
`mods.nuclearcraft.Сплав печи`

## Добавление рецептов
```zenscript
mods.nuclearcraft.AlloyFurnace.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.AlloyFurnace.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2);
mods.nuclearcraft.AlloyFurnace.removeRecipeWithOutput(IIngredient itemput);
mods.nuclearcraft.AlloyFurnace.removeAllRecipes();
```
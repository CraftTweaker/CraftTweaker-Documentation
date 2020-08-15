# Каменная дробилка

## Импортирование пакета
`mods.nuclearcraft.Рок-дробитель`

## Добавление рецептов
```zenscript
mods.nuclearcraft.RockCrusher.addRecipe(IIngredient itemInput, IIngredient itemOutput1, IIngredient itemOutput2, IIngredient itemOutput3, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.RockCrusher.removeRecipeWithInput(IIngredient itemput);
mods.nuclearcraft.RockCrusher.removeRecipeWithOutput(IIngredient itemput1, IIngredient itemput2, IIngredient itemput3);
mods.nuclearcraft.RockCrusher.removeAllRecipes();
```
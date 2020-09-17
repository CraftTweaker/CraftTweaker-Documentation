# Конденсатор

## Импортирование пакета
`mods.nuclearcraft.condenser`

## Добавление рецептов
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Optional double coolingRequired, @Optional int int condensingTemperature]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```
# Паровая турбина

## Импортирование пакета
`mods.nuclearcraft.turbine`

## Добавление рецептов
```zenscript
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansion]);
```

## Удаление рецептов
```zenscript
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```
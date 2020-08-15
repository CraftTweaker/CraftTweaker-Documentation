# Intercambiador de calor

## Importando el Paquete
`mods.nuclearcraft.heat_exchanger`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.heat_exchanger.addRecipe([fluidInput, fluidOutput, double heatRrequerred, int temperatureIn, int temperatureOut]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.heat_exchanger.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.heat_exchanger.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.heat_exchanger.removeAllRecipes();
```
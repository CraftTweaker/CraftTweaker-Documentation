# Turbina de vapor

## Importando el Paquete
`mods.nuclearcraft.turbine`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.turbine.addRecipe([fluidInput, fluidOutput, double powerPerMB, double expansionLevel]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.turbine.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.turbine.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.turbine.removeAllRecipes();
```
# Condenador

## Importando el Paquete
`mods.nuclearcraft.condenser`

## Añadiendo recetas
```zenscript
mods.nuclearcraft.condenser.addRecipe([fluidInput, fluidOutput, @Optional double coolingRequired, @Optional int condensingTemperature]);
```

## Eliminando recetas
```zenscript
mods.nuclearcraft.condenser.removeRecipeWithInput([fluidInput]);
mods.nuclearcraft.condenser.removeRecipeWithOutput([fluidOutput]);
mods.nuclearcraft.condenser.removeAllRecipes();
```
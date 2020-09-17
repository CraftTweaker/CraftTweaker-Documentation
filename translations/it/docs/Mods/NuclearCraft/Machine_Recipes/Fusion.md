# Fusione

## Importazione del pacchetto
`mods.nuclearcraft.fusion`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.fusion.addRecipe([fluidInput1, fluidInput2, fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4, doppio comboTime, doppio comboPower, doppio comboHeatVar, @Optional double processRadiation]);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.fusion.removeRecipeWithInput([fluidInput1, fluidInput2]);
mods.nuclearcraft.fusion.removeRecipeWithOutput([fluidOutput1, fluidOutput2, fluidOutput3, fluidOutput4]);
mods.nuclearcraft.fusion.removeAllRecipes();
```
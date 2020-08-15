# Fornace Leghe Metalliche

## Importazione del pacchetto
`mods.nuclearcraft.AlloyFurnace`

## Aggiunta Di Ricette
```zenscript
mods.nuclearcraft.AlloyFurnace.addRecipe(IIngredient itemInput1, IIngredient itemInput2, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rimozione Ricette
```zenscript
mods.nuclearcraft.AlloyFurnace.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2);
mods.nuclearcraft.AlloyFurnace.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.AlloyFurnace.removeAllRicette();
```
# Legierungsöfen

## Paket wird importiert
`mods.nuclearcraft.AlloyOfen`

## Rezepte hinzufügen
```zenscript
mods.nuclearcraft.AlloyFurnace.addRecipe(Igredient itemInput1, IIngredient itemInput2, IIngredient itemOutput, @Optional double timeMultiplier, @Optional double powerMultiplier, @Optional double processRadiation);
```

## Rezepte entfernen
```zenscript
mods.nuclearcraft.AlloyFurnace.removeRecipeWithInput(IIngredient itemInput1, IIngredient itemInput2);
mods.nuclearcraft.AlloyFurnace.removeRecipeWithOutput(IIngredient itemOutput);
mods.nuclearcraft.AlloyFurnace.removeAllRezept();
```
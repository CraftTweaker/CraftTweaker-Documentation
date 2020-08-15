# Chemischer Reaktor

## Paket wird importiert
`mods.techreborn.chemicalReactor`

## Rezepte hinzufügen
```zenscript
mods.techreborn.chemicalReactor.addRecipe(IItemStack output1, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.chemicalReactor.removeInputRecipe(IIngredient ingredient);
mods.techreborn.chemicalReactor.removeRecipe(IItemStack output);
mods.techreborn.chemicalReactor.removeAll();
```
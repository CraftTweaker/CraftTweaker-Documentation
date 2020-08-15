# Industrieller Sprengöfen

## Paket wird importiert
`mods.techreborn.blastOfen`

## Rezepte hinzufügen
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, IItemStack output2, IIngredient input1, IIngredient input2, int ticktime, int euTick, int neededHeat);
```

## Rezepte entfernen
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(IIngredient ingredient);
mods.techreborn.blastFurnace.removeRecipe(IItemStack output);
mods.techreborn.blastFurnace.removeAll();
```
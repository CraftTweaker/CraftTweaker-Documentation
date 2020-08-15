# Distillation Tower

## Importing the Package
`mods.techreborn.distillationTower`

## Rezepte hinzufügen
```zenscript
mods.techreborn.distillationTower.addRecipe(IItemStack output1, IItemStack output2, IItemStack output3, IItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.distillationTower.removeInputRecipe(IIngredient ingredient);
mods.techreborn.distillationTower.removeRecipe(IItemStack output);
mods.techreborn.distillationTower.removeAll();
```
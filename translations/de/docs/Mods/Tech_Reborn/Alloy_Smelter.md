# Legierungsschmelzer

## Paket wird importiert
`mods.techreborn.alloySmelter`

## Rezepte hinzufügen
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack Output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rezepte entfernen
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```
# Fusione Leghe Metalliche

## Importazione del pacchetto
`mods.techreborn.alloySmelter`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.alloySmelter.addRecipe(IItemStack output, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.alloySmelter.removeInputRecipe(IIngredient ingredientA, IIngredient ingredientB);
mods.techreborn.alloySmelter.removeRecipe(IItemStack output);
mods.techreborn.alloySmelter.removeAll();
```
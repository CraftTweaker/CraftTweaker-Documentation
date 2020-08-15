# Grinder

## Importing the Package
`mods.techreborn.grinder`

## Dodawanie przepisów
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick);
```

## Usuwanie przepisów
```zenscript
mods.techreborn.grinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```
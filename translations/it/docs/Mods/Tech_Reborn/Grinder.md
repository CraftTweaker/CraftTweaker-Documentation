# Grinder

## Importing the Package
`mods.techreborn.grinder`

## Aggiunta Di Ricette
```zenscript
mods.techreborn.grinder.addRecipe(IItemStack output, IIngredient input1, int ticktime, int euTick);
```

## Rimozione Ricette
```zenscript
mods.techreborn.grinder.removeInputRecipe(IIngredient ingredient);
mods.techreborn.grinder.removeRecipe(IItemStack output);
mods.techreborn.grinder.removeAll();
```
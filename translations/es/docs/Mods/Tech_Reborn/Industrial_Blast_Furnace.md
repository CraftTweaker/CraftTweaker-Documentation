# Horno Explosivo industrial

## Importando el Paquete
`mods.techreborn.blastFurnace`

## Añadiendo recetas
```zenscript
mods.techreborn.blastFurnace.addRecipe(IItemStack output1, ItemStack output2, IIngredient input1, IIngredient input2, int euTick, int neededHeat);
```

## Eliminando recetas
```zenscript
mods.techreborn.blastFurnace.removeInputRecipe(ingrediente IIngredient);
mods.techreborn.blastFurnace.removeRecipe(ItemStack output);
mods.techreborn.blastFurnace.removeAll();
```
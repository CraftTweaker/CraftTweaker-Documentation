# Centrifuge

## Importando el Paquete
`mods.techreborn.centrifuge`

## Añadiendo recetas
```zenscript
mods.techreborn.centrifuge.addRecipe(IItemStack output1, ItemStack output2, ItemStack output3, ItemStack output4, IIngredient input1, IIngredient input2, int ticktime, int euTick);
```

## Eliminando recetas
```zenscript
mods.techreborn.centrifuge.removeInputRecipe(IIngredient iIngredient);
mods.techreborn.centrifuge.removeRecipe(ItemStack output);
mods.techreborn.centrifuge.removeAll();
```
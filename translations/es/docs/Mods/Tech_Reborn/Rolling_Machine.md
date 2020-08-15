# Maquina_Rol

## Importando el Paquete
`mods.techreborn.rollingMachine`

## Añadiendo recetas
```zenscript
mods.techreborn.rollingMachine.addShaped(IItemStack salida, IIngredient[][] ingredientes);
mods.techreborn.rollingMachine.addShapeless(ItemStack salida, IIngredient[] ingredientes);
```

## Eliminando recetas
```zenscript
mods.techreborn.rollingMachine.removeRecipe(salida IItemStack);
mods.techreborn.rollingMachine.removeAll();
```
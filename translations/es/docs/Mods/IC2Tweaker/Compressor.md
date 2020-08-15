# Compresor

## Paquete

`importar mods.ic2.Compressor;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

## Adicional

```zenscript
mods.ic2.Compressor.addRecipe(Salida ItemStack, entrada IIngredient);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Eliminar

- Si usas Ic2 Experimental, para remover una receta, simplemente elimina la línea correspondiente en `config/ic2/compressor.ini`
- Si usas Ic2 Classic, para eliminar una receta, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.
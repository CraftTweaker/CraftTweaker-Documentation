# Metal Antiguo

## Paquete

`importar mods.ic2.MetalFormer;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**

## Añadir Receta de Corte

```zenscript
mods.ic2.MetalFormer.addCuttingRecipe(Salida IItemStack, entrada IIngrediente);

mods.ic2.MetalFormer.addCuttingRecipe(<minecraft:diamond>, <minecraft:dirt> * 64);
```

## Eliminar Receta de Corte

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_cutting.ini`.
- Si usas Ic2 Classic e Ic2c Extras, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.

## Añadir Receta Extrusante

```zenscript
mods.ic2.MetalFormer.addExtrudingRecipe(salida IItemStack, entrada IIngredient);

mods.ic2.MetalFormer.addExtrudingRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Eliminar receta extraña

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/metal_former_extruding.ini`.
- Si usas Ic2 Classic e Ic2c Extras, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.

## Añadir Receta de Rolling

```zenscript
mods.ic2.MetalFormer.addRollingRecipe(Salida IItemStack, entrada IIngredient);

mods.ic2.MetalFormer.addRollingRecipe(<minecraft:diamond>, <minecraft:dirt> * 32);
```

## Quitar receta de Rolling

- Si usas Ic2 Experimental, para remover una receta, simplemente elimina la línea correspondiente en `config/ic2/metal_former_rolling.ini`
- Si usas Ic2 Classic e Ic2c Extras, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.
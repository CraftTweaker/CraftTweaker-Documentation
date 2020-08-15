# La tina

## Paquete

`importar mods.enderio.Vat;`

## Método

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) salida** - El fluido de salida (tanque derecho).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** - El fluido de entrada (tanque izquierdo).

**[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Artículos que pueden ir en la ranura 1.

**float[] slot1Mults** - Los multiplicadores de los elementos en la ranura 1. Debe tener la misma longitud que slot1Solids.

**[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Artículos que pueden ir en la ranura 2.

**float[] slot2Mults** - Los multiplicadores de los elementos en la ranura 2. Debe ser la misma longitud que slot2Solids.

**@Optional int energyCost** - Cuánto utiliza la receta. Por defecto es 5000.

## Adicional

```zenscript
mods.enderio.Vat.addRecipe(salida ILiquidStack, entrada ILiquidStack, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Eliminar

```zenscript
mods.enderio.Vat.removeRecipe(salida ILiquidStack);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```
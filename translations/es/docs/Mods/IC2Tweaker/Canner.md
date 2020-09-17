# Canner

## Paquete

`importar mods.ic2.Canner;`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/) salida** El producto
- **[Contenedor](/Vanilla/Variable_Types/IIngredient/) IIngrediente** El ingrediente a ser "llenado"
- **[rellenador](/Vanilla/Variable_Types/IIngredient/) IIngrediente** El ingrediente con el que se llena en el contenedor

## Añadir Receta de Botella

```zenscript
mods.ic2.Canner.addBottleRecipe(Salida ItemStack, contenedor IIngrediente, relleno IIngredient);

mods.ic2.Canner.addBottleRecipe(<minecraft:water_bucket>, <minecraft:bucket>, <minecraft:ice>);
```

## Añadir receta enriquecida

```zenscript
mods.ic2.Canner.addEnrichRecipe(salida ILiquidStack, entrada ILiquidStack, aditiva IIngredient);

mods.ic2.Canner.addEnrichRecipe(<liquid:lava> * 1000, <liquid:water> * 1000, <minecraft:redstone>);
```
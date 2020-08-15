# Vat

El Vat es una máquina que convierte los elementos de entrada y los fluidos en un fluido de salida.

## Paquete
`mods.steamagerevolution.Vat`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) tiene salida** El resultado de la receta.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) entrada** Entrada fluida de la receta.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) inputItems** Artículos a introducir la receta.
- **tiempo de fabricación** tiempo de fabricación de la máquina para procesar

## Agregando

```zenscript
mods.steamagerevolution.Vat.addRecipe(entrada ILiquidStack[], IIngredient[] inputItems, salida ILiquidStack, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## Eliminando

```zenscript
mods.steamagerevolution.Vat.removeRecipe(salida ILiquidStack);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```

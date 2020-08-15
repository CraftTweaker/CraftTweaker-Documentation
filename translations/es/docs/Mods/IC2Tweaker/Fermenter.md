# Fermentador

## Paquete

`importar mods.ic2.Fermenter;`

## Métodos

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) salida** El fluido fermentado
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** The input fluid
- **calor intacto** La cantidad de calor necesario para la fermentación

## Adicional

```zenscript
mods.ic2.Fermenter.addRecipe(salida ILiquidStack, entrada ILiquidStack, calor interno);

mods.ic2.Fermenter.addRecipe(<liquid:lava> * 1000, <liquid:water> * 2000, 23333);
```
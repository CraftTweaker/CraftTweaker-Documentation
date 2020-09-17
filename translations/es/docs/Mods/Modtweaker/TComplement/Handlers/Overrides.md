# Superficies

El paquete de overrides se utiliza para añadir/remover recetas desde/a la ruleta.

## Llamando

Puedes llamar al paquete Overrides usando `mods.tcomplement.Overrides`

## Adición de entrada excedente

```zenscript
//mods.tcomplement.Overrides.addRecipe(salida ILiquidStack, entrada ItemStack, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Reemplazo de la entrada

```zenscript
//mods.tcomplement.Overrides.removeRecipe(salida ILiquidStack, @Optional ItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>);
```
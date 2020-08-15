# Lista negra

El paquete Lista negra se utiliza para añadir/quitar recetas de/a la lista negra.

## Llamando

Puedes llamar al paquete de la lista negra usando `mods.tcomplement.Blacklist`

## Añadir entrada en lista negra

```zenscript
//mods.tcomplement.Blacklist.addRecipe(salida ILiquidStack, entrada ItemStack);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Quitar entrada en lista negra

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack input);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```
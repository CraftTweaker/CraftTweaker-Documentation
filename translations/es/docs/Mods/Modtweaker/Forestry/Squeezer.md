# Cuadrante

ModTweaker te permite añadir o eliminar recetas de silicio forestal

## Llamando

You can call the package using `mods.forestry.Squeezer`

## Receta eliminada

¡Cuidado, no se pueden eliminar las recetas que llenan o consumen los contenedores de líquidos, como las latas forestales!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquid, @Optional IIngredient[] ingredientes);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Adición de receta

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, ItemStack[] ingredientes, int timePerItem, @Optional WeightedItemStack itemOututput);
//mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Parámetro    | Tipo                                                           | descripción                                                    |
| ------------ | -------------------------------------------------------------- | -------------------------------------------------------------- |
| fluidOutput  | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)                 | Resultado de la receta                                         |
| ingredientes | [IItemStack](/Vanilla/Items/IItemStack/)[]                     | Entrada del objeto de la receta                                |
| timePerItem  | int                                                            | Cantidad de fluido de entrada en el elemento orgánico requiere |
| itemOutput   | [Pila de objetos ponderada](/Vanilla/Items/WeightedItemStack/) | Multiplicador de salida                                        |
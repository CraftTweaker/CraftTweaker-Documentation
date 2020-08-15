# Hidratante

ModTweaker te permite añadir o eliminar recetas de humectante forestal

## Llamando

You can call the package using `mods.forestry.Moistener`

## Receta eliminada

```zenscript
//mods.forestry.Moistener.removeRecipe(salida IIngrediente);
mods.forestry.Moistener.removeRecipe(<minecraft:stonebrick:1>);
```

## Adicional

```zenscript
//mods.forestry.Moistener.addRecipe(salida IIItemStack, entrada ItemStack, int packagingTime); 
mods.forestry.Moistener.addRecipe(<minecraft:mycelium>, <minecraft:grass>, 60); 
```

## Eliminación de combustible

```zenscript
//mods.forestry.Moistener.removeFuel(IIngredient moistenerItem);
mods.forestry.Moistener.removeFuel(<minecraft:wheat>);

```

## Adición de combustible

```zenscript
//mods.forestry.Moistener.addFuel(ítemStack item, producto ItemStack, int MoistenerValue, int stage);
mods.forestry.Moistener.addFuel(<minecraft:gold_ingot>, <minecraft:iron_ingot>, 20, 2);
```

| Parámetro        | Tipo                                     | Descripción                                                                                                     |
| ---------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| objeto           | [IItemStack](/Vanilla/Items/IItemStack/) | Objeto para convertirse en un combustible válido para el hidrógeno                                              |
| producto         | [IItemStack](/Vanilla/Items/IItemStack/) | Objeto que dejará la ranura de trabajo del hidrógeno (por ejemplo, trigo mojado o mulch).                       |
| Valor de humedad | int                                      | Cuánto contribuye este elemento al producto final del hidratante.                                               |
| etapa            | int                                      | ¿Cuál es la etapa que representa este producto? Los recursos con valor de etapa más baja se consumirán primero. |
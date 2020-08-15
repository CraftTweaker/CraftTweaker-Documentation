# Tablero de corte

El tablero de corte te permite cortar un objeto en muchas piezas de otro objeto.

Por defecto sólo corta el pan en 6 rodajas de pan.

## Eliminando recetas de corte

## Quitar recetas de corte coincidentes.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Elimina la receta con el pan como elemento
mods.cfm.ChoppingBoard. emove(null,<minecraft:bread>);
// Elimina las recetas que resultan en 6 rebanadas de pan (igual que la receta anterior, por lo que no tendrán efecto si se usan después)
mods. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withAmount(6));
```

## Añadiendo recetas de corte

Añade una receta para cortar.

## La entrada requiere tamaño de la pila de 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final ItemStack output, @Nonnull final ItemStack input);

// Añadir una receta para cortar el trigo en 2 sticks
mods.cfm.ChopingBoard. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Añade una receta para cortar el pan en 3 trigos
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```
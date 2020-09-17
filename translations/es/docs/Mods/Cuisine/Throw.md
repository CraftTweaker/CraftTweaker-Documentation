# Lanzamiento de cuencas

## Adicional

```zenscript
importar mods.cuisine.BasinThrowing;

BasinThrowing.add(entrada IIngredient, ILiquidStack inputFluid, salida IItemStack);

BasinThrowing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Eliminar

```zenscript
importar mods.cuisine.BasinThrowing;

// Quitar por las entradas.
BasinThrowing.remove(IItemStack entrada, ILiquidStack inputFluid);

BasinThrowing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Elimina por identificador.
BasinThrowing.remove(String id);

BasinThrowing.remove("recipe_name");

// ¡Elimina todo!
BasinThrowing.removeAll();
```
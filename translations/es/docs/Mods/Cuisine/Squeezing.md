# Cuenca de cuencas

## Adicional

```zenscript
import mods.cuisine.BasinSqueezing;

BasinSqueezing.add(entrada IIngrediente, salida ILiquidStack, @extraSalida de ItemStack Opcional);

BasinSqueezing. dd(<item:minecraft:dirt>, <liquid:water> * 1000);
BasinSqueezing.add(<ore:cobblestone> * 2, <liquid:lava> * 1000, <item:minecraft:diamond>);
```

## Eliminar

```zenscript
importar mods.cuisine.BasinSqueezing;

// Quitar por las entradas.
BasinSqueezing.remove(IItemStack entrada, ILiquidStack inputFluid);

BasinSqueezing.remove(<item:minecraft:dirt>, <liquid:water> * 1000);

// Elimina por identificador.
BasinSqueezing.remove(String id);

BasinSqueezing.remove("recipe_name");

// ¡Elimina todo!
BasinSqueezing.removeAll();
```
# Calefacción de cuencas

## Adicional

```zenscript
import mods.cuisine.BasinHeating;

BasinHeating.add(entrada ILiquidStack, salida ItemStack); // Usar 1 como valor de calor
BasinHeating. dd(entrada ILiquidStack, salida ItemStack, valor de calor interno);

BasinHeating.add(<liquid:lava> * 1000, <item:minecraft:diamond>);
BasinHeating.add(<liquid:water> * 1000, <item:minecraft:diamond>, 100);
```

## Eliminar

```zenscript
import mods.cuisine.BasinHeating;

// Elimina por entrada.
BasinHeating.remove(entrada ILiquidStack);

BasinHeating.remove(<liquid:lava> * 1000);

// Elimina por identificador.
BasinHeating.remove(String id);

BasinHeating.remove("recipe_name");

// ¡Elimina todo!
BasinHeating.removeAll();
```
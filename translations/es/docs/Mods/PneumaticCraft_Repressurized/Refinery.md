# Refinería

La Refinería es una estructura multibloque que utiliza calor para convertir un fluido de entrada a dos o más fluidos de salida. El multibloque consta de dos a cuatro bloques de refinería (inclusive) y el número de fluidos de salida posibles está limitado por el número de bloques de refinería en la estructura.

Prior to PneumaticCraft: Represurized v0.9.0, the minimum temperature for any Refinery recipe (i.e. the temperature at which procesing starts) was always 373K, or 100°C. Sin embargo, en v0.9.0 y posterior, es posible especificar una temperatura mínima al añadir una receta de Refinería.

La Refinería comenzará a procesar fluidos a temperatura mínima de la receta, y funcionará más rápido a medida que la temperatura suba.

Tenga en cuenta que es posible tener dos o más recetas con la misma entrada, siempre y cuando el número de salidas sea diferente. En este caso, se utilizará la receta que produce la mayor cantidad posible de salidas (dado el número de bloques de refinería en el multibloque).

## Llamando

Puedes llamar al paquete Refinery usando `mods.pneumaticcraft.refinery`.

## Eliminando

Esta función elimina la primera receta que encuentra que coincide con todas las salidas dadas [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dadas`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] salidas);
```

This function removes the first recipe it finds which matches the given [IIngredient](/Vanilla/Variable_Types/IIngredient/) `input`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
```

Esta función eliminará *todas las* recetas de refinería:

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Agregando

Estas funciones añaden una nueva receta a la refinería:

```zenscript
// Añadir una receta con la temperatura mínima predeterminada de 373K (100°C)
mods.pneumaticcraft.refinery. ddRecipe(entrada ILiquidStack, salidas ILiquidStack[]);

// (v0.9.0+ requerido) Añadir una receta con una temperatura mínima determinada
mods. neumaticcraft.refinery. ddRecipe(int minimumTemperature, ILiquidStack entrada, ILiquidStack[] salidas);


// Ejemplo: ambas recetas utilizan agua como entrada
// La primera receta se utilizará en un mods
de refinería de 2 bloques. neumaticcraft.refinery. ddReceta(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// La segunda receta se utilizará en una refinería de 3 o 4 bloques
// y también requiere una temperatura mínima de 473K, o 200°C
mods. neumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```
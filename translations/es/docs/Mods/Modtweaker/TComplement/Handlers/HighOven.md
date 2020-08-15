# HighHorno

El paquete HighOven permite añadir o quitar combustibles, recetas de calor y mezclar recetas al horno alto.

## Importando el paquete

Importar el paquete usando

```zenscript
importar mods.tcomplement.highoven.HighOven;
```

## Petróleos

Puede añadir y eliminar los combustibles aceptados por el horno alto.

### Eliminando combustibles

```zenscript
// HighOven.removeFuel(IIngredient fuel);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Añadiendo combustible

```zenscript
// HighOven.addFuel(combustible IIngrediente, tiempo de intención);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `combustible` es el combustible a añadir (soporta transformadores, NBT y contenedores fluidos)
+ `tiempo` es cuánto dura el combustible, en segundos
+ `tasa` es el aumento de temperatura del horno alto cuando se utiliza ese combustible, en grados por segundo

## Reemplazo de fundición

Puedes añadir y eliminar las anulaciones de fundición para el Alto Horno. Melting overrides, well, override the default melting behavior in the High Oven. Los artículos normalmente se comportan igual que en la fundición, las sobrecargas pueden redefinir el fluido de salida y la temperatura de fundición (sólo para el Alto Horno).

### Eliminando anulaciones

```zenscript
// HighOven.removeMeltingOverride(salida ILiquidStack, @Optional ItemStack input)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Añadiendo anulaciones

Esto es más interesante. Los excedentes especifican un nuevo comportamiento para los elementos en el horno alto

```zenscript
// HighOven.addMeltingOverride(salida ILiquidStack, entrada IIngrediente, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `produce` el líquido y la cantidad a producir
+ `entrada` el IIngrediente a fundir. Soporta transformadores, oredictos, etc.
+ `temp` (Opcional) la temperatura mínima para que el elemento empiece a fundirse en el Alto Horno, en Kelvin. Si no está definido, deje el cálculo al horno alto

## Recetas de calor

Las recetas de calor transforman un fluido en otro en el tanque de horno alto, siempre que la temperatura del horno alto sea lo suficientemente alta.

### Eliminando recetas de calor

```zenscript
// HighOven.removeHeatRecipe(salida ILiquidStack, @entrada opcional ILiquidStack);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `salida` es la salida para la que deben desactivarse las recetas
+ `entrada` es opcionalmente las entradas con las que filtrar recetas. Si no se especifica (o `null`), todas las recetas que producen la salida suministrada se deshabilitarán. De lo contrario, sólo la receta con la entrada dada está deshabilitada.

*NOTE*: este método **no** desactiva las recetas de calor añadidas por ModTweaker utilizando el siguiente método.

### Añadiendo recetas de calor

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `produce` el líquido a pruduce, y en qué cantidad
+ `entrada` el líquido a consumir, y en qué cantidad, para producir la cantidad de salida
+ `temperatura` la temperatura mínima alta del horno, en Kelvin.

*Nota*: la tasa real de las recetas de calor se escala con un exceso de temperatura

## Mezclar recetas

Las recetas mezcladas permiten hacer una especie de alquimia o aleación. Cuando una pila se derrite en el horno alto, si produce el fluido derecho *y* los oxidizadores adecuados, reductores y purificadores están en sus ranuras dedicadas, luego se produce un fluido diferente.

Dado que estas recetas son complicadas, añadir o ajustar las ya existentes utiliza una clase zen especial.

### Eliminando recetas de mezcla

Esta es la parte fácil para las recetas de mezcla

```zenscript
// HighOven.removeMixRecipe(salida ILiquidStack, @Optional ILiquidStack input);
HighOven.removeMixRecipe(<liquid:steel>); // deshabilita cualquier receta que produzca acero
```

Los argumentos son los mismos que `removeHeatRecipe()` y la coincidencia funciona de la misma manera. Similarmente a `removeHeatRecipe()`, este método no eliminará las recetas añadidas por ModTweaker.

### Añadir recetas de mezcla

Para añadir una receta de mezcla, debes usar un `MixRecipeBuilder`. Puedes obtener uno usando

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(salida ILiquidStack, entrada ILiquidStack, entrada int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `la salida` es el fluido y la cantidad a producir
+ `entrada` es el fluido y la cantidad a consumir
+ `la temperatura` es la temperatura mínima del horno alto para que la receta funcione, en Kelvin

Una vez que tengas un `MixRecipeBuilder`, deberías añadir oxidizadores, reductores y purificadores a él, y luego registrarlo.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

Para una documentación detallada de lo que puede hacer con un `MixRecipeBuilder`, vea su documentación.

NOTA*: Una vez que hayas usado un `MixRecipeBuilder`, puedes seguir modificándolo y reutilizándolo. Permite añadir fácilmente las variaciones de recetas.

**ADVERTENCIA**: Si ningún elemento produce el fluido de entrada cuando se derrite en la fundición, entonces la receta no será visible en JEI.

### Ajustes de receta de mezcla

Para cambiar las recetas de mezcla existentes (**incluyendo** las añadidas por ModTweaker), puede utilizar una `MixRecipeManager`:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(salida ILiquidStack, entrada ILiquidStack);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

Como de costumbre, no especificar la entrada (o proporcionar `null`) resulta en un comportamiento de comodín donde toda entrada será aceptada.

Una vez que tenga una `MixRecipeManager` que represente un conjunto particular de receta de mezclas puedes evitar que ciertos oxidadores/reductores/purificadores se añadan a esas recetas, *o* intentar añadir nuevos aditivos. Las eliminaciones tienen prioridad en los añadidos.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

El comportamiento puede ser un poco surrealista a veces. Cuando deshabilita un aditivo, cualquier aditivo que permita lo que desactive será cancelado. Por ejemplo, si añade un montón de elementos usando un solo `OreDictEntry`, luego intente eliminar un `ItemStack`específico, evitará que la entrada sea añadida.

Esto se debe a que iternamente, `OreDictEntry` se añaden como es y no se convierten a artículos individuales. La única forma de desactivar el `ItemStack` que desea prohibir es evitar que toda la entrada sea registrada, de lo contrario la entrada permitiría el elemento.

Si realmente quieres añadir una entrada de oredicto excepto algunos elementos, tendrás que hacerlo manualmente iterando en el contenido de `OreDictEntry` y luego eliminando los elementos específicos (o no agregándolos en primer lugar).
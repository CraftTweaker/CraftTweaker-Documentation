# Mezclador plástico

El Mezclador Plástico es una máquina con dos funciones:

* Para solidificar el líquido plástico líquido a hojas de plástico sólidas, utilizando tintes rojos, verdes y azules para colorar las hojas.
* Para fundir hojas de plástico sólidas en plástico líquido. Esto requiere una temperatura mínima de 150°C (423K).

El soporte CraftTweaker añade la capacidad de especificar cualquier elemento y combinación de líquidos para fundir y/o solidificar. Es posible especificar que los elementos sólo deben fundirse, que los fluidos sólo deben ser solidarizados o permitir un proceso de dos vías.

Mientras que el objeto objetivo de solidificación puede ser cualquier objeto, tiene más sentido usar objetos coloreables aquí, ya que los tintes siempre se utilizan, independientemente de si el elemento de salida es o no coloreable.

## Llamando

Puede llamar al paquete Mezclador de plástico usando `mods.pneumaticcraft.plasticmixer`.

## Eliminando

Esta función elimina la primera receta que encuentra con la entrada [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `dada:`

```zenscript
mods.pneumaticcraft.plasticmixer.removeRecipe(ILiquidStack fluid);
// Ejemplo
mods.pneumaticcraft.plasticmixer.removeRecipe(<liquid:plastic>);
```

Esta función elimina *todas las* recetas de Mezclador de plástica:

```zenscript
mods.pneumaticcraft.plasticmixer.removeAllRecipes();
```

## Agregando

Las siguientes funciones se pueden utilizar para añadir recetas al TPP:

```zenscript
// Agrega una receta bidireccional (temperatura en Kelvin)
mods.pneumaticcraft.plasticmixer.addRecipe(ILiquidStack liquid, ItemStack stack, int temperature);

// Agrega una receta que permite la solidificación sólo
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(ILiquidStack liquidInput, ItemStack itemOutput);

// Agregar una receta que permite fundir sólo (temperatura en Kelvin)
mods.pneumaticcraft.plasticmixer. ddMeltOnlyRecipe(IItemStack itemInput, ILiquidStack fluidOutput, int temperature);

// Ejemplo: convertir 100mB Lava a/from Concrete (melt at 573K)
mods. neumaticcraft.plasticmixer.addRecipe(<liquid:lava> * 100, <minecraft:concrete>, 573);

// Ejemplo: convertir 2000mB Oil a Plastic (pero no permitir derretar)
mods.pneumaticcraft.plasticmixer. ddSolidifyOnlyRecipe(<liquid:oil> * 2000, <pneumaticcraft:plastic>);

// Ejemplo: convertir el plástico a 100 mB Oil a 473K (pero no permitir la solidificación)
mods. neumaticcraft.plasticmixer.addMeltOnlyRecipe(<pneumaticcraft:plastic>, <liquid:oil> * 100, 473);
```
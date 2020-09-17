# Planta de procesamiento termopneumática

La planta de procesamiento termopneumática (TPP) utiliza presión y calor para convertir un fluido y/o un ingrediente sólido en otro líquido. Las temperaturas deben especificarse en Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Técnicamente, 273.16 K = 0°C, pero para los propósitos de este mod se simplifica a un desplazamiento entero.*

## Llamando

Puede llamar al paquete TPP usando `mods.pneumaticcraft.thermopneumaticprocessingplant`.

## Eliminando

Esta función elimina la primera receta que encuentra con la salida [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dada`:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(salida IIngredient);
// Ejemplo
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Esta función elimina *todas las* recetas de TPPP:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## Agregando

Las siguientes funciones se pueden utilizar para añadir recetas al TPP:

```zenscript
// Agrega una receta convirtiendo un elemento de entrada en un fluido de salida
mods.pneumaticcraft.thermopneumaticprocessingplant. ddReceta (IItemStack itemInput, doble presión, doble temperatura, salida ILiquidStack);

// Agregar una receta convirtiendo un fluido de entrada y un objeto en un fluido de salida (el objeto puede ser nulo)
mods. neumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, doble presión, doble temperatura, salida ILiquidStack);

// Ejemplo: convertir agua y redstone a un fluido de redstone en 3. bar y 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Ejemplo: convertir aceite de 10mB en lava de 5mB a 3.0 bar y 473K
mods.pneumaticcraft.thermopneumaticprocessingplant. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Ejemplo: convertir 1 netherrack en 50mB lava en 1. bar y 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1.5, 573, <liquid:lava> * 50);
```
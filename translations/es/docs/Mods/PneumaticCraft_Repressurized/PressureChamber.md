# Cámara de presión

La Cámara de Presión es una estructura de múltiples bloques que utiliza aire comprimido para convertir uno o más elementos de entrada en uno o más elementos de salida. Las recetas de cámara de presión tienen un valor de presión asociado, que es la presión del aire en bar necesaria para realizar la conversión.

## Llamando

Puede llamar al paquete Cámara de Presión usando `mods.pneumaticcraft.pressurechamber`.

## Eliminando

Esta función elimina la primera receta que encuentra con el [ItemStack](/Vanilla/Items/IItemStack/) `dado salida` array:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(ItemStack[] salidas);
// Ejemplo
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Esta función elimina *todas las* recetas de Cámara de Presión:

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## Agregando

Esta función se utiliza para añadir nuevas recetas a la Cámara de Presión:

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] entradas, doble presión, ItemStack[] salidas);

// Ejemplo
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```
# Fabricación de explosiones

La Fabricación de Explosión se utiliza para transformar un objeto en otro exponiendo a una explosión cuando es un objeto en el suelo. Una tasa de pérdida configurable (aleatoria) puede ser especificada. De forma predeterminada, esto se utiliza para convertir Lingote de Hierro en Lingote Comprimido con una tasa de pérdida del 20%.

## Llamando

Puedes llamar al paquete de Creación de Explosión usando `mods.pneumaticcraft.explosioncrafting`

## Eliminando

Esta función elimina la primera receta que encuentra con la salida [IIngrediente](/Vanilla/Variable_Types/IIngredient/) `dada`:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeRecipe(salida IIngrediente);
// Ejemplo
mods.pneumaticcraft.explosioncrafting.removeRecipe(<pneumaticcraft:ingot_iron_compressed>);
```

Esta función elimina *todas las* recetas de fabricación de explosiones:

```zenscript
mods.pneumaticcraft.explosioncrafting.removeAllRecipes();
```

## Agregando

Estas funciones se utilizan para añadir nuevas recetas de fabricación de explosiones:

```zenscript
mods.pneumaticcraft.explosioncrafting.addRecipe(entrada ItemStack, salida IItemStack, int loss_rate);
mods.pneumaticcraft.explosioncrafting.addRecipe(entrada IOreDictEntry, salida ItemStack, int loss_rate);

// Ejemplo
mods. neumaticcraft.explosioncrafting.removeAllRecipes();
// Un paquete de modo experto podría hacer de hierro plano una elección muy pobre, y el acero mucho mejor.
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotIron>, <pneumaticcraft:ingot_iron_compressed>, 95);
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:ingotSteel>, <pneumaticcraft:ingot_iron_compressed>, 10);
// A way to make lots of Nether Brick, for (on average) 4x the cost of Netherrack
mods.pneumaticcraft.explosioncrafting.addRecipe(<ore:netherrack>, <minecraft:netherbrick>, 75);
```
# Infusor metalúrgico

A partir del Mekanism 9.7.0 ahora es posible ver todas las cadenas de recetas del Infuso Metalúrgico a través del comando `/ct mekrecipes metallurgicInfuser`

## Tipo de cadena de infusión

Tanto la adición como la eliminación de recetas requieren una cadena de "tipo de infusión". Ejemplos predeterminados del Mekanism son:

| Tipo de Infusor | Añadido por |
| --------------- | ----------- |
| "CARBON"        | Mekanismo   |
| "TIN"           | Mekanismo   |
| "DIAMOND"       | Mekanismo   |
| "REDSTONA"      | Mekanismo   |
| "FUNGI"         | Mekanismo   |
| "BIO"           | Mekanismo   |
| "OBSIDIAN"      | Mekanismo   |

Si cualquier otro mod registra un nuevo tipo de infusión, ese tipo puede ser utilizado en CraftTweaker y siempre y cuando el nombre del tipo registrado se especifique exactamente. NOTA: *no es posible* definir **nueva** infusión *tipos* con CraftTweaker

A partir del Mekanism 9.7.0 ahora es posible ver todas las infusiones registradas (incluyendo las de otros mods) mediante el comando `/ct infuseTypes`

## Adicional

```zenscript
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IIngredient inputStack, ItemStack outputStack);

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

A partir de Mekanism 9.7.0 es posible utilizar IIngredients como la inputStack en lugar de sólo ItemStacks.

Nota: Actualmente todo esto es bucle sobre las diferentes posibilidades en java mientras se añade en lugar de tener que hacerlo en ZenScript. Actualmente no hay soporte para ingredientes compuestos o orediccionarios en las propias máquinas.

## Eliminar

```zenscript
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType);

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Especificar un parámetro de entrada sólo eliminará la receta específica que usa dicha entrada. Omitir el parámetro de entrada eliminará todas las recetas que producen la salida especificada.

## Eliminando todas las recetas

A partir del Mekanism 9.7.0 ahora es posible eliminar todas las recetas de Infusor Metalúrgico. (Esto excluye cualquier receta añadida mediante CraftTweaker)

```zenscript
mods.mekanism.infuser.removeAllRecipes();
```
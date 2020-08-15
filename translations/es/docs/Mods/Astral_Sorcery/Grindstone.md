# Grindstone

Puedes usar CrT para agregar o quitar las recetas de la piedra de molino.

## Llamando

Puedes llamar al paquete InfusionRecipe usando `mods.astralsorcery.Grindstone`.

## Eliminando

Esto eliminará la primera receta de molienda que encuentra que crea la salida [ItemStack](/Vanilla/Items/IItemStack/) `proporcionada`.  
¡Si hay múltiples recetas que retornan la salida proporcionada, necesita llamar a este método varias veces!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(ItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Adicional

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```
# Soldado

## Paquete

`mods.thermalexpansion.Insolator`

## Adicional

```zenscript
//mods.thermalexpansion.Insolator.addRecipe(ItemStack primaryOutput, ItemStack primaryInput, ItemStack secondaryInput, int energy, @Optional ItemStack secondaryOutput, @Optional ItemStack secondaryChance);

mods. hermalexpansion.Insolator.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:iron_ore>, 1500, <minecraft:stone>, 20);
```

## Eliminar

```zenscript
//mods.thermalexpansion.Insolator.removeRecipe(ItemStack primaryInput, ItemStack secondaryInput);

mods.thermalexpansion.Insolator.removeRecipe(<minecraft:melon_seeds>, <thermalfoundation:fertilizer:1>);
```
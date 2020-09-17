# Seperador centrifugal

## Paquete

`mods.thermalexpansion.Centrifuge`

## Adicional

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] salidas, IItemStack entrada, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Añadida de Mobs

`líquido` puede ser nulo, en cuyo caso se utilizará la experiencia de expansión térmica predeterminada del líquido la cantidad calculada a partir del campo `xp` usando la constante `XP_TO_MB` por defecto de la expansión térmica. Al usar un líquido personalizado, el campo `xp` es ignorado.

**Sin fluido personalizado**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] salidas, @Nullable ILiquidStack fluid, int energy, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Líquido personalizado**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## Eliminar

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(entrada IItemStack);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Eliminar mob

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```
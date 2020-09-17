# Sigillatore Centrifugo

## Pacchetto

`mods.thermalexpansion.Centrifuge`

## Addizione

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] outputs, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([[(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Addizione di Mob

`fluido` può essere nullo, nel qual caso verrà utilizzato il liquido di esperienza di espansione termica predefinito, l'importo calcolato dal campo `xp` utilizzando la costante predefinita `XP_TO_MB` dall'espansione termica. Quando si utilizza un liquido personalizzato, il campo `xp` viene ignorato.

**Nessun fluido personalizzato**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] outputs, @Nullable ILiquidStack fluid, int Energy, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Fluido personalizzato**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## Rimozione

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack input);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Rimozione di Mob

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```
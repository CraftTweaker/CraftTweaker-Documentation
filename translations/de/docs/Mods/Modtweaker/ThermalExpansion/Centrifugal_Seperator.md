# Zentrifugaltrenner

## Paket

`mods.thermalexpansion.Centrifuge`

## Addition

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] Outputs, IItemStack Input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Mob-Zusatz

`Flüssigkeit` kann null sein, in diesem Fall wird die Standard-Thermische Expansion Flüssigkeit verwendet der Betrag, der aus dem Feld `xp` mit dem Standard `XP_TO_MB` Konstante aus Thermal Expansion berechnet wird. Bei Verwendung einer benutzerdefinierten Flüssigkeit wird das Feld `xp` ignoriert.

**Keine benutzerdefinierte Flüssigkeit**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] outputs, @Nullable ILiquidStack fluid, int energy, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Eigene Flüssigkeit**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0);
```

## Entfernen

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack Eingang);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Entfernen des Mobs

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition Entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```
# Séperateur centrifuge

## Paquet

`Thermalexpansion.Centrifuge`

## Ajouter

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipe(WeightedItemStack[] sorties, IItemStack input, ILiquidStack fluid, int energy);
mods.thermalexpansion.Centrifuge.addRecipe([(<minecraft:gold_ingot> * 5) % 10, <minecraft:iron_ingot> % 50], <minecraft:gold_ore>, <liquid:lava>, 2000);

```

## Ajout de créatures

`le fluide` peut être nul, auquel cas l'expérience Thermique Expansion par défaut sera utilisée, le montant calculé à partir du champ `xp` en utilisant la constante par défaut `XP_TO_MB` de l'extension thermique. Lorsque vous utilisez un liquide personnalisé, le champ `xp` est ignoré.

**Pas de fluide personnalisé**:

```zenscript
//mods.thermalexpansion.Centrifuge.addRecipeMob(IEntityDefinition entity, WeightedItemStack[] sorties, @Nullable ILiquidStack fluid, int energy, int xp);
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:clay_ball>%50, <minecraft:ghast_tear>%10], null, 2000, 5);
```

**Fluide personnalisé**:

```zenscript
mods.thermalexpansion.Centrifuge.addRecipeMob(<entity:minecraft:slime>, [<minecraft:gunpowder>%100], <liquid:lava>*20, 2000, 0 ;
```

## Retirer

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipe(IItemStack input);
mods.thermalexpansion.Centrifuge.removeRecipe(<minecraft:gold_ore>);
```

## Suppression des créatures

```zenscript
//mods.thermalexpansion.Centrifuge.removeRecipeMob(IEntityDefinition entity);
mods.thermalexpansion.Centrifuge.removeRecipeMob(<entity:minecraft:slime>);
```
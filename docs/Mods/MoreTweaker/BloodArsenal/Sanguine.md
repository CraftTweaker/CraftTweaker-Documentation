# Infusion de Sanguine

## Package
`moretweaker.bloodarsenal.Sanguine`

## Modifier Fields

```
moretweaker.bloodarsenal.Sanguine.BAD_POTION
moretweaker.bloodarsenal.Sanguine.BLOOD_LUST
moretweaker.bloodarsenal.Sanguine.FLAME
moretweaker.bloodarsenal.Sanguine.SHARPNESS
moretweaker.bloodarsenal.Sanguine.FORTUNATE
moretweaker.bloodarsenal.Sanguine.LOOTING
moretweaker.bloodarsenal.Sanguine.SILKY
moretweaker.bloodarsenal.Sanguine.SMELTING
moretweaker.bloodarsenal.Sanguine.EXPERIENCED
moretweaker.bloodarsenal.Sanguine.BENEFICIAL_POTION
moretweaker.bloodarsenal.Sanguine.QUICK_DRAW
moretweaker.bloodarsenal.Sanguine.SHADOW_TOOL
moretweaker.bloodarsenal.Sanguine.AOD
moretweaker.bloodarsenal.Sanguine.SIGIL
```

## Addition

```zenscript
//moretweaker.bloodarsenal.Sanguine.addRecipe(IItemStack output, int lpCost, IItemStack catalyst, IIngredient[] inputs);
moretweaker.bloodarsenal.Sanguine.addRecipe(<minecraft:diamond>, 2000, <minecraft:coal>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>]);

//moretweaker.bloodarsenal.Sanguine.addModifier(String modifier, int lpCost, IIngredient[] inputs);
moretweaker.bloodarsenal.Sanguine.addModifier(moretweaker.bloodarsenal.Sanguine.LOOTING, 2000, [<minecraft:diamond_sword>, <minecraft:blaze_powder>]);
```

## Removal

```zenscript
//moretweaker.bloodarsenal.Sanguine.removeRecipe(IIngredient output);
moretweaker.bloodarsenal.Sanguine.removeRecipe(<minecraft:diamond>);

//moretweaker.bloodarsenal.Sanguine.removeModifier(String modifier);
moretweaker.bloodarsenal.Sanguine.removeModifier(moretweaker.bloodarsenal.Sanguine.SILKY);

moretweaker.bloodarsenal.Sanguine.removeAll();
```
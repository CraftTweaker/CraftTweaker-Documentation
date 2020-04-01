# Fusion Crafting

## Package
`moretweaker.draconicevolution.FusionCrafting`

## Tier Fields

```
moretweaker.draconicevolution.FusionCrafting.BASIC
moretweaker.draconicevolution.FusionCrafting.WYVERN
moretweaker.draconicevolution.FusionCrafting.DRACONIC
moretweaker.draconicevolution.FusionCrafting.CHAOTIC
```

## Addition

```zenscript
//moretweaker.draconicevolution.FusionCrafting.add(IItemStack output, IItemStack catalyst, int tier, long energyCost, IIngredient[] ingredients);
moretweaker.draconicevolution.FusionCrafting.add(<minecraft:diamond>, <minecraft:coal>, FusionCrafting.WYVERN, 100000, [<minecraft:dirt>, <minecraft:gravel>]);
```

## Removal

```zenscript
//moretweaker.draconicevolution.FusionCrafting.remove(IIngredient catalyst);
moretweaker.draconicevolution.FusionCrafting.remove(<minecraft:diamond>);

moretweaker.draconicevolution.FusionCrafting.removeAll();
```
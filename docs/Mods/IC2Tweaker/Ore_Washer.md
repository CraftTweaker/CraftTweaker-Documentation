# Ore Washer

## Package
`import mods.ic2.OreWasher`

## Methods
 - **IItemStack[] outputs**
 - **IIngredient input**
 - **int totalFluidCost** Per-tick IC2 liquefied air cost, measured in mB/tick
 - **int time** Total time cost, measured in ticks

## Addition
```
mods.ic2.OreWasher.addRecipe(IItemStack[] outputs, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in  `config/ic2/ore_washer.ini`.

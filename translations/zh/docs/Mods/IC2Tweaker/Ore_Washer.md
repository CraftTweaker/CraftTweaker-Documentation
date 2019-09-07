# Ore Washer

## 所属包名

`import mods.ic2.OreWasher;`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int water** Amount of water required for one round of processing of this recipe, measured in mB. Default to 1000 if not given.

## 添加配方

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] outputs, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in `config/ic2/ore_washer.ini`.
# Ore Washer

## 所属包
`import mods.ic2.OreWasher;`

## 使用方式
 - **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
 - **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
 - **@Optional int water**  Amount of water required for one round of processing of this recipe, measured in mB. Default to 1000 if not given.

## 添加配方
```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] outputs, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Removal

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/ore_washer.ini`
- If using Ic2 Classic and Ic2c Extras, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.

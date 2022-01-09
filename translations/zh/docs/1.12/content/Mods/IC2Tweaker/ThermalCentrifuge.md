# Thermal Centrifuge

## 所属包
`import mods.ic2.ThermalCentrifuge;`

## 使用方式
- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int minHeat**

## 添加配方
```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] outputs, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Removal

- If using Ic2 Experimental, to remove a recipe, simply remove the corresponding line in `config/ic2/thermal_centrifuge.ini`
- If using Ic2 Classic and Ic2c Extras, to remove a recipe, simply disable the corresponding recipe in `config/ic2/ic2machineRecipes.json`.

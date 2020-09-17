# 矿石

## 所属包名

`导入 mods.ic2.OreWasher；`

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Igredient](/Vanilla/Variable_Types/IIngredient/) 输入**
- **@Opinet water** 用mB测量的一轮这种方法处理所需的水量。 如果没有给出，则默认为1000。

## 添加配方

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[…]输出, Ingredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## 移除

- 如果使用 Ic2 Experimental, 若要移除配方，只需在 `config/ic2/ore_washer.ini` 中移除相应的行
- 如果使用 Ic2 经典和 Ic2c 附加组件来移除配方，只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。
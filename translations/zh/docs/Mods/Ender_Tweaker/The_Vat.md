# 瓦特

## 所属包名

`导入 mods.enderio.Vat;`

## 方法

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输出** - 输出液体(右罐)。

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) 输入** - 输入液体(左罐)。

**[Ingredient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - 可以放在插槽1中的项目。

**float[] slot1Mults** - 插槽1中项目的乘数。 必须与slot1Solid相同的长度。

**[Ingredient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - 可以放在插槽2中的项目。

**float[] slot2Mults** - 第2栏中项目的乘数。 必须与slot2Solid相同长度。

**@可选能源成本** - 配方使用多少FE。 默认值为 5000。

## 添加配方

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[…]slot1Solids, float[…]slot1Mults, IIngredient[…]slot2Solids, float[…]slot2Mults, @Optional int energyCost);

mods. norumo.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## 移除

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack 输出);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```
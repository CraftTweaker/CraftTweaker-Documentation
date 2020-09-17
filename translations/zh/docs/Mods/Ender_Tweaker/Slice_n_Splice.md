# 切片'n' 片段

## 所属包名

`导入 mods.enderio.SliceNSplice;`

## 方法

**- [IItemStack](/Vanilla/Items/IItemStack/) 输出** 该配方的结果。

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/)[……]输入** 成分. 必须介于 1 到 6 种成分。

**- 内含能量成本** 配方使用多少FE。 默认值为 5000。

**- float xp** 是从这个配方获得的 xp 。 也许不是消极的。

## 添加配方

```zenscript
mods.enderio.SliceNSplice。  
addRecipe(StemStack output, IIngredient[] input, @Opinion energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## 移除

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack 输出);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```
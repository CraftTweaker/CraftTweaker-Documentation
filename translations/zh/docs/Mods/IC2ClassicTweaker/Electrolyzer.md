# 电解器

## 所属包名

```zenscript
导入 mods.ic2.ClassicElectrolyzer;
```

## 使用方式

### 添加两个配方

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 必须是一个物品，不需要修复或其他物品。
- **整洁能源** 从排放部件中获得总能量和该配方充电部分所使用的总能量。

### 添加充电配方

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(IItemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 必须是一个物品，不需要修复或其他物品。
- **int energy** Total eu used in the 配方中。

### 添加放电配方

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischarge Recipe(StemStack output, IItemStack input, int energy);

mods.ic2.ClassicElectrolyzer.addDischarge Recipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 必须是一个物品，不需要修复或其他物品。
- **整洁能** 从该配方中获得了总计eu 。

### 删除配方

只需在 `config/ic2/ic2machineRecipes.json` 中禁用相应的配方。


# 压缩机

## 所属包名

`模组.thermalext.Compactor`

协约支持4种类型的修饰符：

    Mint
    按
    存储
    Gear
    

## 货币铸造

Mint 修饰器更改了在 `COIN` 配方图中注册的配方。

请注意，这些配方需要数字新闻增强功能。

### 添加配方

```zenscript
mods.thermallipl.Compactor.addMintRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalex.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### 删除配方

```zenscript
mods.thermalext.Compactor.removeMintRecipe(IItemStack 输入);

mods.thermalabove.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## 新闻社

按键修饰器更改了未在 `PLATE`中注册的配方 `COIN`, 或 `GEAR` 配方地图，热扩展。

这些配方不需要特定的增值。

### 添加配方

```zenscript
mods.thermalext.Compactor.Compactor.addPressRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalex.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### 删除配方

```zenscript
mods.thermalext.Compactor.removePressRecipe(IItemStack input);

mods.thermalexplan.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## 存储

存储修饰器更改了在 `PLATE` 配方图中注册的配方。

这些配方不需要特定的增强，似乎只用于车牌。

### 添加配方

```zenscript
mods.thermalext.Compactor.Compactor.addStorageRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalex.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### 删除配方

```zenscript
mods.thermallipl.Compactor.removeStorageRecipe(IItemStack 输入);

mods.thermalabove.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## 齿轮制作

Gear 修饰器更改了在 `GEAR` 配方图中注册的配方。

请注意，这些配方需要Gearworking Die August。

### 添加配方

```zenscript
mods.thermallipl.Compactor.addGearRecipe(IItemStack output, IItemStack input, int energy);

mods.thermalext.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### 删除配方

```zenscript
mods.thermallipl.Compactor.removeGearRecipe(IItemStack 输入);

mods.thermalabove.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```
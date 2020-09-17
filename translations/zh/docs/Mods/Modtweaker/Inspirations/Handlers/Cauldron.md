# 炼药店

Cauldron 包用于添加/移除导管配方。 Note that if the cauldron is set to `simple` in the config, only recipes using water will be able to be crafted but all recipes will still show in JEI.

## 导入包

您可以使用 `mods.intentions.Cauldron` 来调用 Cauldron 包

## 流体

灵感有三种使用液体的配方：使用液体转换物品的配方。 用一件物品来转换液体，以及用一件物品来添加液体的液体。 虽然所有处理器都会拿到液体堆栈，但只有液体类型会影响该配方。 刺激电缆使用由三瓶子组成的香草系统，以便在另一个参数中处理数量问题。

### 液体添加

添加一个配方，使用液体将输入项转换到输出项。

* 输入项支持堆栈大小，需要持有的堆栈为一定大小。
* 该水平决定了该配方消费的水平。 支持0-3，默认为1
* 锅炉决定是否必须将电缆放置在该配方火上面。 可以是真的，可以要求它, false 要求没有火焰, 或者null (默认) 忽略它。

```zenscript
//mods.intensions.Cauldron.addFluidRecipe(IItemStack output, IIngredient input, ILiquidStack fluid, @Optional int level, @Optional boolian boiling);
mods.intentions. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.byears.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### 液体移除

移除电缆中现有的液体配方。

```zenscript
//mods.byounations.Cauldron.removeFluidRecipe(IIngredient output, @Optional IIngredient input, @Opinion ILiquidStack fluid)
mods.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### 液体变换添加

添加一个配方，使用该项目将液体转换为输出液体。

* 输入项支持堆栈大小，需要持有的堆栈为一定大小。
* 最大等级决定允许转换发生的最大流量值。 用于允许配方拥有较便宜的版本，如果电缆含有较少的液体。
* 锅炉决定是否必须将电缆放置在该配方火上面。 可以是真的，可以要求它, false 要求没有火焰, 或者null (默认) 忽略它。

```zenscript
//mods.intensions.Cauldron.addFluidTransform(ILiquidStack output, IIngredient input, ILiquidStack fluid, @Optional int maxLevels, @Optional boolian boiling);
mods.byears. Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### 液体转化移除

移除电缆中现有的液体转化配方。 输出是 `IIngredient` 但仅支持液体堆栈或通配符。

```zenscript
//mods.intensions.Cauldron.removeFluidTransform(IIngredient output, [IIngredient input, [IFluidStack fluid]]);
mods.years.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### 填充配方添加

添加一个配方用提供的液体填充电缆...

* 输入项支持堆栈大小，需要持有的堆栈为一定大小。
* 水平决定着配方在多大程度上填充了蛋糕。 如果没有提供，默认值为 1。
* 容器决定完成该配方后返回的项目。 如果没有提供任何信息，请默认什么都不返回。

```zenscript
//mods.intensions.Cauldron.addFillRecipe(IIngredient input, ILiquidStack fluid, @Optional int level, @Opinion IItemStack container);
mods.butilisations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.intentions.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### 填充配方移除

从导星中移除现有的填充配方。

```zenscript
//mods.灵感. Cauldron.removeFillRecipe(IIngredient input, @Opinion ILiquidStack fluid);
mods.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.byears.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## 酿造和药水

灵感有两种药水药剂：酿造药剂，将药水从一种变成另一种药水。 和药水配方使用药水改变一种物品。

因为配方需要使用 `药水类型`而不是 `药水`的直接药水参数是字符串。 可以使用命令 `/ct 灵感药水` 获取所有药水类型的列表。

### 酿造添加

添加一个配方，使用反应剂将输入药水转换为输出药水。

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(String output, String input, IIngredient reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### 酿造除法

移除电缆中现有的酿造配方。 输入和输出都可以设置为 null 作为通配符。

```zenscript
//mods.intensions.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.灵感. Cauldron.remove BrewingRecipe("灵感:haste");
mods.Cyears.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### 药水配方添加

使用药水添加一个将输入项转换为输出项的配方。

* 该水平决定了该配方消费的水平。 支持0-3，默认为1
* 锅炉决定是否必须将电缆放置在该配方火上面。 可以是真的，可以要求它, false 要求没有火焰, 或者null (默认) 忽略它。

```zenscript
//mods.intensions.Cauldron.addPotionRecipe( IItemStack output, IIngredient input, String potion, @Optional int level, @Opinion boiling);
mods.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2) 
```

### 药水配方移除

从导星中移除现有的药水配方。 默认情况下不存在药水配方，但附加组件可以添加配方。

```zenscript
//mods.灵感. Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String 药水);
```

## 染料

灵感只能有一种类型的染料配方来使用染料来转换物品。 染料配方取自 `EnumDye彩色` 的字符串染料颜色。 要获取所有值的列表，请提供命令 `/ct 灵感dyes`。

### 添加

添加一个配方，使用染料消耗一定水平的染料水，将输入转换为输出。

```zenscript
//mods.intensions.Cauldron.addDyeRecipe(IItemStack output, IIngredient input, String dye);
mods.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "蓝色");
mods.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### 移除

移除已存在的染料配方。

```zenscript
//mods.灵感. Cauldron.removeDyeRecipe(IIngredient output, @Optional IIngredient input, @Optional String dye)
mods.灵感. Cauldron.removeDyeRecipe(<*>, <*>, "蓝色");
mods.Cyrons.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```
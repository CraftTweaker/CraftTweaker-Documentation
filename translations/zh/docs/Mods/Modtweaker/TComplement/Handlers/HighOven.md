# 高Oven

高炉包可以将燃料、热配方和混合配方添加到高炉。

## 导入相关包

导入软件包使用

```zenscript
导入 mods.tcomplement.higoven.HighOven;
```

## 燃料量

您可以添加和删除高炉所接受的燃料。

### 去除燃料

```zenscript
// HighOven.removeFuel(Ingredient fuel)；
HighOven.removeFuel(<minecraft:coal:1>)；
```

### 添加燃料

```zenscript
// HighOven.addFuel(IIngredient fuel, int time, int rate );
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `燃料` 是要添加的燃料(支持变压器、NBT和液体容器)
+ `时间` 是燃料持续多长时间，秒数
+ `速率` 是高炉使用燃料时的温度升高（以每秒的度计算）

## 熔融覆盖

您可以添加和移除高奥文的熔融覆盖。 熔化覆盖，覆盖高奥文的默认融化行为。 项目通常行为与冶炼厂相同。替代可以重新定义输出液体和熔化温度(仅适用于高炉)。

### 删除覆盖

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack output, @Optional IItemStack 输入)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### 添加覆盖

这更令人感兴趣。 覆盖高炉项目的新行为

```zenscript
// HighOven.addMeltingOverride(ILiquidStack output, IIngredient input, @Opinion temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567)；
```

+ `输出` 液体和生产量
+ `输入` IIngredient 进行熔炼。 支持变压器、修复等。
+ `调节` (可选)物品在克尔文的高奥文开始熔化的最低温度。 如果未定义, 请将计算留给高炉子

## 热配方

热配方将一种液体转化为高炉罐中的另一种液体，条件是高炉的温度足够高。

### 移除热配方

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack output, @Optional ILiquidStack 输入);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `输出` 是应该禁用配方的输出
+ `输入` 是可选的输入，用于筛选配方。 如果未指定(或 `null`)，生成所提供输出的所有配方都将被禁用。 否则，只有带有给定输入的配方被禁用。

*备注*: 此方法不 **** 使用下一个方法禁用ModTinventer 添加的热配方。

### 添加热配方

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `输出` 液体到谨慎气体以及在其中的数量
+ `input` the liquid to consume, and in which quantity, to produce the output quantity
+ `在克尔温下调` 最低高温。

*注意*: 热配方超出温度的实际比率

## 混合配方

混合配方允许进行某种炼金或合金。 当一堆栈熔融在高炉子中，如果它能产生适当的液体 *和* 适当的氧化剂， 还原剂和净化剂都在其专用槽中，然后生产一种不同的液体。

由于这些配方是复杂的，添加或扭曲了现有的配方使用了一个特殊的 zen 类。

### 删除混合配方

这是混合配方的简单部分

```zenscript
// HighOven.removeMixRecipe(ILiquidStack 输出, @Opinion ILiquidStack 输入);
HighOven.removeMixRecipe(<liquid:steel>); // 禁用任何生产钢材的混合配方
```

参数与 `removeHeatRecipe()` 和匹配的方式相同。 类似于 `removeHeatRecipe()`, 此方法将不会删除ModTinstrer添加的配方。

### 添加混合配方

要添加混合配方方法，您必须使用 `MixRecipeBuilder`。 您可以使用

```zenscript
import mods.tcomplements.higoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int tempes);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `输出` 是要生产的液体和数量
+ `输入` 是要消耗的液体和数量
+ `temp` 是在Kelvin 中让配方工作的高炉的最低温度

一旦你有一个 `MixRecipeBuilder`, 你应该添加氧化器、还原器和净化器，然后注册它。

```zenscript
builder.addOxidzer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

关于您可以使用 `MixRecipeBuilder`做什么的详细文档，见其文档。

注意：一旦您使用了 `MixRecipeBuilder`，您可以继续修改并重新使用它。 它允许易于添加配方变量。

**警告**: 如果没有项目在熔炼中熔化时产生输入液体，那么该配方就不会在 JEI 中可见了。

### 混合配方

要更改现有的混合配方(**包括由ModTweaker添加的** 个配方)，您可以使用 `MixRecipeManager`：

```zenscript
导入mods.tcomplement.higoven.MixRecipeManager;

// HighOven.management MixRecipe(ILiquidStack 输出, ILiquidStack 输入);
var Manager = HighOven.management MixRecipe(<liquid:steel>);
```

像往常一样，不指定输入(或提供 `null`) 导致通配符行为，所有输入都将被接受。

一旦你有 `MixRecipeManager` 代表特定的混合配方 您可以防止某些氧化物/减少剂/净化剂被添加到这些配方中， *或* 尝试添加新添加剂。 移除对添加具有优先性。

```zenscript
manager.removeOxidzer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

这种行为有时可能略有冒犯。 当您禁用添加剂时，允许您禁用的添加剂将被取消。 例如，如果您使用单独的 `OreDictEnter`添加了一堆物品， 然后尝试删除一个特定 `IItemStack`, 它将防止添加该条目。

这是因为反复添加 `OreDictEnter` 不会转换为单个项目。 禁用您想要禁止的 `ItemStack` 的唯一方法是防止整个条目被注册。 否则，该条目将允许该物项。

如果您实际上想要添加一个操作条目，但一些项目除外， 您必须手动在 `OreDictEnter` 内容上进行迭代，然后删除特定的项目 (或不首先添加它们)。
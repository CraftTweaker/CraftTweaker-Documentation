# MixRecipeManager

`MixRecipeManager` 用于修改现有的高余混合方法，包括由ModTweaker添加的方法。

## 导入相关包

比抱歉更好的安全并导入软件包

```zenscript
导入mods.tcomplement.higoven.MixRecipeManager;
```

## 正在获取 `MixRecipeManager`

`高炉` 处理程序可以给您 `MixRecipeManager`:

```zenscript
// HighOven.managMixRecipe(ILiquidStack 输出, ILiquidStack 输入);
var Manager = HighOven.management MixRecipe(<liquid:steel>);
```

+ `输出` 是要修改的混合配方的输出
+ `输入` (可选) 是要修改混合配方的输入。 如果 `null` 或未指定，产生输出的混合配方将受到影响

## 移除添加剂

您可以使用 `MixRecipeManager` 从受影响的混合配方中删除某些添加剂。 小心谨慎，因为清除总是强制执行。 这意味着添加添加添加添加您删除的添加剂的任何方式都将被防止。

这可能会产生令人吃惊的结果。 既然oredict 条目是按原样添加到混合配方(它没有扩展到 `IItemStack` 列表，而是在检查配方时寻找)， 移除一个项目将会阻止它所属的所有修复项目。

通常情况下，如果您移除某些特定内容(例如) `IItemStack` 带变压器，但一个(单身)添加添加将允许您删除的东西加上其他东西(例如) a 更通用 `IItemStack`)，整个添加将被取消，防止高奥文接受所说的其他内容。

| 方法              | 信息                       |
| --------------- | ------------------------ |
| `离子氧化物(I分子氧化物)` | 提前从受影响的 MixRecipe 中移除氧化器 |
| `去除减少(I成分减少器)`  | 提前从受影响的混合配方中移除减速器        |
| `去除紫外线(I成分还原器)` | 提前从受影响的混合配方中移除净化器        |


所有这些方法都返回了它们被称为一个的同一个实例，从而允许了方法链。

## 添加添加添加剂到现有的 MixRecipe

您可以添加添加添加剂到所有匹配的 `MixRecipeManager` 的混合配方。 小心谨慎，因为清除有优先考虑(见上文)。

| 方法                                                              | 信息                  |
| --------------------------------------------------------------- | ------------------- |
| `addOxidizer(@NotNull IIngredient oxidizer, int consumeChance)` | 用指定的消耗几率添加氧化器 (百分比) |
| `addReducer(@NotNull IIngredient reducer, int consumeChance)`   | 将减少器添加到指定的消耗几率(百分比) |
| `addPurifier(@NotNull IIngredient purifier, int consumeChance)` | 将净化器添加到指定的消耗几率(百分比) |


所有这些方法都返回了它们被称为一个的同一个实例，从而允许了方法链。

## 警告

创建一个 `MixRecipeManager` 不匹配任何混合配方不会触发任何警告 因为无法知道将添加哪个混合配方(在混合配方注册之前发生脚本解析)。 如果您 `MixRecipeManager` 没有效果，请先检查它是否符合混合配方
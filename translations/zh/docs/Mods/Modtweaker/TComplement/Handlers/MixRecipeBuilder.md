# MixRecipeBuilder

`MixRecipeBuilder` 用于构建和添加高奥文的混合配方到游戏中。

## 导入相关包

比抱歉更好的安全并导入软件包

```zenscript
导入 mods.tcomplement.higoven.MixRecipeBuilder;
```

## 正在获取 `MixRecipeBuilder`

`mods.tsupplement.higoven.HighOven` 处理程序可以给您一个 `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(ILiquidStack output, ILiquidStack input, int temple);
var 生成器 = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `输出` 是要生产的液体和数量
+ `输入` 是要消耗的液体和数量
+ `temp` 是在Kelvin 中让配方工作的高炉的最低温度

## 属性

| 属性          | ZenGetter    | ZenSetter            | 返回值类型                   | 信息              |
| ----------- | ------------ | -------------------- | ----------------------- | --------------- |
| output（输出）  | `output（输出）` | :heavy_check_mark: | `ILiquidStack`          | 混合配方生成的输出       |
| input（输入）   | `input（输入）`  | :heavy_check_mark: | `ILiquidStack`          | 混合配方的输入         |
| temperature | `温度`         | :heavy_check_mark: | `整数`                    | Kelvin 最小温度     |
| 氧化物         | `氧化物`        | :x:                  | `列表<IIngredient>` | 访问该属性时该配方的有效氧化器 |
| 减速器         | `减速器`        | :x:                  | `列表<IIngredient>` | 访问该属性时配方的有效缩减器  |
| 净化器         | `净化器`        | :x:                  | `列表<IIngredient>` | 访问该属性时该配方的有效净化器 |


## 方法

| 方法                                                     | 退货类型               | 信息                                          |
| ------------------------------------------------------ | ------------------ | ------------------------------------------- |
| `getOxidizer Chance(IIngredient oxider)`               | `整数`               | 氧化剂消耗百分比的几率, 或 `-1` 如果氧化剂无效                 |
| `get ReducerChance(IIngredient reducer)`               | `整数`               | 减少器消耗的百分比几率, 或 `-1` 如果减少器无效                 |
| `getOxidizer Chance(IIngredient purifier)`             | `整数`               | 净化器消耗的百分比几率, 或 `-1` 如果氧化器无效                 |
| `添加氧化物(Ingredient oxidizer, int consumeChance)`        | `MixRecipeBuilder` | 用给定的消耗几率添加氧化器 (百分比)                         |
| `addReducer(Ingredient reducer,int consumeance)`       | `MixRecipeBuilder` | 在给定的消耗机会中添加减速器(百分比)                         |
| `addPurifier(IIngredient purifier, int consumeChance)` | `MixRecipeBuilder` | 将净化器添加到给定的消耗几率(百分比)                         |
| `离子氧化物(I分子氧化物)`                                        | `MixRecipeBuilder` | 删除已添加的氧化器                                   |
| `去除减少(I成分减少器)`                                         | `MixRecipeBuilder` | 删除已添加的下调器                                   |
| `遥远紫色(Ingredient purifier)`                            | `MixRecipeBuilder` | 删除已添加的净化器                                   |
| `removeAllOxidizer()`                                  | `MixRecipeBuilder` | 移除所有氧化器                                     |
| `removeAllReducer()`                                   | `MixRecipeBuilder` | 移除所有减速器                                     |
| `removeAllPurifier()`                                  | `MixRecipeBuilder` | 移除所有净化器                                     |
| `register()`                                           |                    | 添加一个新的 MixRecipe 和 MixRecipeBuilder 当前添加的数据 |


返回 `MixRecipeBuilder` 的所有方法返回了他们被呼叫的同一个实例，并允许方法链。

## 如何使用 一旦你有 `MixRecipeBuilder`, 添加氧化剂, 减少你的新配方和净化器，然后 `register()` 一个配方。 `MixRecipeBuilder` 可以用于注册尽可能多的配方：每次您调用 `register()`, 在你调用函数时它拥有的信息添加了一个新的配方。 这使得通过渐进添加新添加添加剂和/或增加产量等来添加配方变量或配方层级变量更加容易。

添加剂支持所有类型的 `元素`： `IOreDictEnter`, `IItemStack` 及其转换、液体容器等。

## 警告 不要忘记 **注册** 你的配方 `MixRecipeBuilder` 只是一个生成器来指定配方的所有部分！
# 精炼厂（Refinery）

精炼厂是一个多方块结构，它使用热量将输入的流体转换为两种或多种输出流体。这个多方块结构由二至四个（包含）精炼厂方块组成，最多的输出流体种类会受到精炼厂方块数量的限制。

热量和配方本身无关；只要温度 >=100°C ，精炼厂会开始处理流体，但更高的温度会加速这一过程。

注意有相同输入的配方是被允许的，只要输出流体种类的数量不同即可。在这种情况下，精炼厂将会（在精炼厂方块数量的限制下）使用输出流体种类最多的配方。

## 导入

使用 `mods.pneumaticcraft.refinery` 以导入精炼厂相关包。

## 移除

以下函数会移除第一个所有的 `outputs (输出)` 均为指定材料（IIngredient）的配方：

```java
mods.pneumaticcraft.refinery.removeRecipe(IIngredient[] outputs);
//outputs 所有的输出（数组）
```

以下函数会移除第一个 `input（输入）` 为指定材料（IIngredient）的配方：

```java
mods.pneumaticcraft.refinery.removeRecipes(IIngredient input);
//input 输入
```

## 添加

以下函数用于添加精炼厂配方：

```java
mods.pneumaticcraft.refinery.addRecipe(ILiquidStack input, ILiquidStack[] outputs);
//input 输入
//outputs 所有的输出（数组）


// 实例
// 两个配方的输入都是水
// 第一个配方会被用于一个有两个精炼厂方块的精炼厂
// 第二个配方会被用于一个有三个或四个精炼厂方块的精炼厂
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
mods.pneumaticcraft.refinery.addRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```

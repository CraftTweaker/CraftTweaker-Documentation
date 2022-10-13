# 化学溶解机（Dissolver）

## 所属包
`mods.alchemistry.Dissolver`

## 使用方式
- **[IItemStack](/Vanilla/Items/IItemStack/) input** - 配方的输入。
- **boolean relativeProbability** - 概率计算布尔值
- **int rolls** -  抽取的概率
- **probabilityGroups** - 数组中的一个数组，带有一个双精度浮点数与任意 [IItemStack](/Vanilla/Items/IItemStack/) 的 #。 双精度浮点数为其组的概率。

## 添加
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## 移除
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRecipes();
```

# 注意
为便于开发与修改已存在的化学溶解机配方，此处有一个简单的命令，可以获取你手持物品的 CraftTweaker 配方，并将其复制到剪切板中

如果 relativeProbability 为 true，每个概率会基于所有概率的总和计算。 在上述例子中，有 33.3% 的概率会在每次抽取时输出石头，有 66.6% 的概率会在每次抽取时输出沙子和铁矿石。

如果 relativeProbability 为 false，那么这些数字会变为绝对的百分比，即 10% 的概率输出石头，20% 的概率输出沙子和铁矿石（无论是否输出石头）。 支持浮点概率，4.5 表示 4.5%


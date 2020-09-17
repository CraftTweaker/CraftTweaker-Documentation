# 已卸载

## 所属包名
`mods.alchemistry.已卸载`

## 使用方式
- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** - 该配方的输入.
- **布尔型相对概率** - 概率计算布尔值
- **整流** - 角色的可能性
- **概率组** - 一个数组数组，其二次随后是任意# [IItemStack](/Vanilla/Items/IItemStack/)s。 双倍指其组的概率。

## 添加配方
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngredient input, boolan relativeProbability, int rolls, Object[] 概率组);
mods.alchemistry.dissolver.addRecipe(<minecraft:dye:9>, false, 5,
[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]);
```

## 移除
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IIngredient input);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.dissolver.removeAllRecipes();
```

# 注
为了方便修改现有的解析器配方，有一个命令， 简单/dissolver 会获取你所持有的项目的手工弱化配方并将其复制到剪贴板中

如果相对概率为真，则每个概率将根据所有概率的总和计算。 在上面的例子中，这意味着每一卷石的输出机会为33.3%，每卷石的输出机会为66%。 % 的几率每个滚动一块沙子和一块铁矿。

如果相对概率是假的，那么这些数字是绝对百分比， 10%的矿石外溢，20%的矿石外溢沙和铁矿石的可能性(无论是否输出石头)。 浮点数概率得到支持，所以4.5意味着4.5%


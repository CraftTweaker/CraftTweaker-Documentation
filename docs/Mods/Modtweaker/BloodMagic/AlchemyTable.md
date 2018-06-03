# 炼金术桌

## 相关包
`mods.bloodmagic.AlchemyTable`

## 添加

```
inputs 数组中最多只能有6个元素
//mods.bloodmagic.AlchemyTable.addRecipe(IItemStack output, IItemStack[] inputs, int syphon, int ticks, int minTier);
//output 输出
//inputs 输入（数组）
//syphon 吸取的LP
//tick 时间（单位：刻）
//minTier 最低气血宝珠等级
mods.bloodmagic.AlchemyTable.addRecipe(<minecraft:diamond>, [<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 20,10,0);
```

## 移除

```
inputs has a max size of 6
//mods.bloodmagic.AlchemyTable.removeRecipe(IItemStack[] inputs);
//inputs 输入（数组）
mods.bloodmagic.AlchemyTable.removeRecipe([<minecraft:carrot>,<minecraft:carrot>,<minecraft:carrot>,<minecraft:dye:15>]);
```

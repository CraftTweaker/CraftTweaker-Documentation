# 狱火熔炉

## 相关包
`mods.bloodmagic.TartaricForge`

## 添加

```
inputs 数组最多只能有4个元素
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack output, IItemStack[] inputs, double minSouls, double soulDrain);
//output 输出
//input 输入（数组）
//minSouls 意志最小值
//souldDrain 意志消耗
mods.bloodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## 移除

```
inputs 数组最多只能有4个元素
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] inputs);
//inputs 输入（数组）
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```

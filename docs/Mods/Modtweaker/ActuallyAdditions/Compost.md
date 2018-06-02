# 堆肥

## 相关包
`mods.actuallyadditions.Compost`

## 添加

```
//mods.actuallyadditions.Compost.addRecipe(IItemStack output, IItemStack outputDisplay, IItemStack input, IItemStack inputDisplay);
//output 输出
//outputDisplay 将此方块的材质作为输出物在堆肥中的材质
//input 输入
//input 将此方块的材质作为输入物在堆肥机中的材质
mods.actuallyadditions.Compost.addRecipe(<minecraft:dirt>, <minecraft:dirt>, <minecraft:sugar>, <minecraft:snow>);
```

## 移除

```
//mods.actuallyadditions.Compost.removeRecipe(IItemStack output);
//output 输出
mods.actuallyadditions.Compost.removeRecipe(<actuallyadditions:item_canola_seed>);
```

# Alloying

`Alloy`包允许您添加或删除合金配方。

## 导入
你可以通过`mods.tconstruct.Alloy`调用这个包

## 添加合金配方

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## 移除合金配方

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```
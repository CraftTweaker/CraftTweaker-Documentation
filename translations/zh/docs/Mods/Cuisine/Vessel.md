# 船

## 加

```zenscript
导入mods.cuisine.Vessel；

// 所有名为 'extra' 的参数是指额外的输入。
Vessel.add(IItemStack 输入, ILiquidStack inputFluid, IItemStack 输出, ILiquidStack outputFluid, IItemStack 扩展);
Vessel. d(StemStack 输入、ILiquidStack 输入、ILiquidStack 输入、IItemStack 输出、ILiquidStack 输出、IOreDictEnter 扩展)；
Vessel.add(IOREDictEnter输入输入、ILiquidStack 输入、IItemStack 输出、ILiquidStack 输出流量、IItemStack 扩展)；
Vessel。 dd(IOREDictEnter 输入, ILiquidStack inputFluid, IItemStack 输出, ILiquidStack outputFluid, IOreEnter);
Vessel.add(IItemStack 输入, ILiquidStack 输出, ILiquidStack outputFluid);
Vessel. dd(输入, ILiquidStack inputFluid, IItemStack output, ILiquidStack outputFluid);

Vessel.add(<item:minecraft:dirt>, <liquid:water> * 1000, <item:minecraft:diamond>, null);
```

## 移除

```zenscript
导入 mods.cuisine.Vessel；

// 通过输入删除。
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IItemStack extra);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid, IOreDictEntry extra);
Vessel.remove(IItemStack input, ILiquidStack inputFluid);
Vessel.remove(IOreDictEntry input, ILiquidStack inputFluid);

// Remove by identifier.
Vessel.remove();

Vessel.remove("recipe_name");

// 移除所有东西!
Vessel.removeAll();
```
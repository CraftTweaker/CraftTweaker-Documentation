# 热离子肥料

ModTinflow允许您添加或移除林业肥料配方

## 导入包

您可以使用 `mods.forestry.ThermionicFabricator` 来调用软件包。

## 矩形/过去删除

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## 食谱/过去添加

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[] components, ILiquidStack like Stack, @Optional IItemStack Plan);
mods.forestry.ThermionicFabricator. ddcast(<minecraft:glass_pane> * 4, [<minecraft:dirt>,null,null],[null,null,null],,[null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>[<ore:dyeLightBlue>null,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## 熔炼删除

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## 冶炼添加剂

由于熔炼，您可以在游戏中添加所有液体， 但目前只有 `<liquid:glass>` 因为在其他液体上出现了漏洞。

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack 液体Stack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```
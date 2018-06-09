# 热电子加工台

ModTweaker 允许你添加或移除林业热电子加工台配方

## 导入
使用 `mods.forestry.ThermionicFabricator` 以导入相关包

## 移除配方

```JAVA
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
//product 输出
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```


## 添加配方

```JAVA
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[][] ingredients, ILiquidStack liquidStack, @Optional IItemStack plan);
//output 输出
//inguedients 输入
//liquidStack 消耗的流体
//plan 模具
mods.forestry.ThermionicFabricator.addCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry.ThermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```


## 移除融化配方
```JAVA
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
//itemInput 输入
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## 添加融化配方
你虽然可以让所添加的物品融化成任意流体，但现在只推荐使用`液态玻璃（<liquid:glass>）`，因为使用其他液体会出现漏洞。

```JAVA
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
//liquidStack 输出的流体
//iteminput 输入
//meltingPoint 熔点
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```

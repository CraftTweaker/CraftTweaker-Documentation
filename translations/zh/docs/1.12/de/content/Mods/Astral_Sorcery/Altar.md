# 祭坛合成（Altar Crafting）

你可以为星辉魔法的祭坛添加或移除配方。

## 导入

使用`mods.astralsorcery.Altar`以导入祭坛配方相关包。

## 移除祭坛配方

This function removes the recipe with the given resource location.  
You can get those locations by hovering over the recipe output in JEI or the Astral tome while the F3 screen is active.  
Prints a warning if the recipe does not exist.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
//resourceLocation 指的是 resource location

mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```

<details><summary>1.10 版本之前的处理器</summary>

This function removes the first recipe it finds that returns provided [IItemStack](../../../Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

<table>
    <tr><th>祭坛等级</th><th>等级名称</th></tr>
    <tr><td>0</td><td>星辉合成台</td></tr>
    <tr><td>1</td><td>星辉祭坛</td></tr>
    <tr><td>2</td><td>天辉祭坛</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altarLevel);
//output 输出
//altarLevel 祭坛等级
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## 添加祭坛配方

Since v1.10 all recipes require a resource location as first parameter.  
Unlike vanilla recipe names, they are not optional and you will encounter errors if you do not provide it. If you want to override an existing recipe, you can just add a new recipe with the same location.  
You can get those locations by hovering over the recipe output in JEI or the Astral tome while the F3 screen is active.

All recipe addition methods require these parameters:  
string `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `output`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] `inputs`

The `inputs` parameter is, unlike in Crafting Table recipes only a 1 Dimensional Array.  
You can use [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) or `null` as the array's members

这些配方都是有序合成！

### 发现

`inputs` length *has to be* 9

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### 共振

为星辉合成台（2级）添加配方

`inputs` length *has to be* 13

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar.addAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### 星宿

为天辉祭坛（3级）添加配方

`inputs` length *has to be* 21

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```zenscript
mods.astralsorcery.Altar.addConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
            <ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
            <ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
            <ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
            null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
            <ore:blockMarble>, <ore:blockMarble>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <minecraft:nether_star>, <minecraft:nether_star>,
            <ore:blockMarble>, <ore:blockMarble>]);
```

### 光辉

为五彩祭坛（4级）添加配方

`Constellation（星座）` 未翻译的星座名称（类型为字符串）。 这是一个可选参数。

`inputs` length *has to be* 25 or higher. 序号25以后的物品会被认为是“外围物品”，它们需要被放置在祭坛周围以参与合成。

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] inputs, @optional String iRequiredConstellationFocusName);

//recipeLocation recipe location
//output 输出
//starlight 所需星光
//craftTickTime 合成时间（单位：刻）
//inputs 输入（数组）
//iRequiredConstellationFocusName 星座名称

mods.astralsorcery.Altar.addTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
    <liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
    <liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
    null, null, null,<ore:blockMarble>, <ore:blockMarble>,
    <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
    <ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
    //Outer Items, indices 25+
    <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorcery.constellation.evorsio");
```
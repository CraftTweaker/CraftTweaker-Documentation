# 祭坛合成（Altar Crafting）

你可以为星辉魔法的祭坛添加或移除配方。

## 导入

使用`mods.astralsorcery.Altar`以导入祭坛配方相关包。 

## 移除祭坛配方

这个方法移除传入的 resource location 的配方。  
你可以用以下方法获取它的 resource location ：在开启 F3 屏幕的情况下鼠标悬浮在 JEI 或星空日记中的物品图标上。  
如果配方不存在则打印错误信息。

    //mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
    //resourceLocation 指的是 resource location
    
    mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
    

<details><summary>1.10 版本之前的处理器</summary>

这个方法移除第一个在传入的祭坛等级下`输出`为传入的物品堆[（IItemStack）](../../../Vanilla/Items/IItemStack/)的配方。   
如果有多个配方可以合成传入的物品，你需要多次使用这个方法。

<table>
    <tr><th>祭坛等级</th><th>等级名称</th></tr>
    <tr><td>0</td><td>星辉合成台</td></tr>
    <tr><td>1</td><td>星辉祭坛</td></tr>
    <tr><td>2</td><td>天辉祭坛</td></tr>
</table>

```JAVA
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altarLevel);
//output 输出
//altarLevel 祭坛等级
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## 添加祭坛配方

1.10 版本之后所有配方都需要 resource location 作为第一个参数。  
与原版配方不同的是，这个参数不是可选参数，意味着如果你不提供这些参数会出现错误。 如果你想覆盖之前的配方，你可以直接添加一个与原来的 resource location 相同的配方。  
你可以通过在 F3 菜单开启时将鼠标悬浮在 JEI 或 星空日志 的输出槽获取 resource location。

所有添加配方的方法都需要这些参数：  
string `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `output`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] `inputs`

与工作台配方不同的是，`inputs（输入）`参数是一个一维数组。   
数组中的数据类型可以是[IItemStacks（物品堆）](/Vanilla/Items/IItemStack/)，[ILiquidStacks（流体堆）](/Vanilla/Liquids/ILiquidStack/)，[IOreDictEntries（矿物词典条目）](/Vanilla/OreDict/IOreDictEntry/)和 `null（空）`。

这些配方都是有序合成！

### 发现

`inputs（输入）`数组的长度*必须为* 9

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```JAVA
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### 共振

为星辉合成台（2级）添加配方

`inputs（输入）`数组的长度*必须为* 13

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```JAVA
mods.astralsorcery.Altar.addAttunmentAltarRecipe(mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### 星宿

为天辉祭坛（3级）添加配方

`inputs（输入）`数组的长度*必须为* 21

`inputs（输入）` 顺序：  
![输入顺序](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```JAVA
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

`inputs（输入）`数组的长度*必须为* 25或更高。 Items at index 25 or higher will be considered as "outer items" that need to be put on relays around the altar.

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```JAVA
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] inputs, @optional String iRequiredConstellationFocusName);

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
# 祭壇の作成

AS 祭壇からクラフトレシピを追加したり削除したりできます。

## 発信中

`mods.astalsorcery.Altar` を使用して、AltarRecipeパッケージを呼び出すことができます。

## 祭壇のレシピを削除

This function removes the recipe with the given resource location.  
You can get those locations by hovering over the recipe output in JEI or the Astral tome while the F3 screen is active.  
Prints a warning if the recipe does not exist.

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("aststrsorcery:shaped/internal/altar/lightwell');
```

<details><summary>Pre v1.10 handler</summary>

This function removes the first recipe it finds that returns provided [IItemStack](../../../Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

<table>
    <tr><th>祭壇レベル</th><th>レベル名</th></tr>
    <tr><td>0</td><td>光沢のある作業台</td></tr>
    <tr><td>1</td><td>スターライトで祭壇をクラフトする</td></tr>
    <tr><td>2</td><td>天祭壇（天）</td></tr>
</table>

```zenscript
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altLevel);
mods.astalsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```

</details>

## 祭壇のレシピを追加

v1.10以降、すべてのレシピは最初のパラメータとしてリソースの場所を必要とします。  
バニラレシピ名とは異なり、オプションではなく、指定しないとエラーが発生します。 既存のレシピを上書きしたい場合は、同じ場所で新しいレシピを追加できます。  
F3画面がアクティブな状態で、JEIやアストラル大冊のレシピ出力にカーソルを合わせることで、これらの場所を得ることができます。

All recipe addition methods require these parameters:  
string `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `output`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] `inputs`

The `inputs` parameter is, unlike in Crafting Table recipes only a 1 Dimensional Array.  
You can use [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) or `null` as the array's members

これらのレシピは形を変えられません！

### 発見

`入力` の長さ *は* 9 でなければなりません

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```zenscript
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
            , null,            <minecraft:grass>, null, <ore:treeLeaves>,
            null, <minecraft:grass>, null,
            <liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```

### Attunement

スターライトの作業台（T2）にレシピを追加

`入力` の長さ *は* 13 でなければなりません

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```zenscript
mods.astralsorcery.Altar.addAttunementAltarRecipe("mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
            null, null, null,
            <ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
            null, <liquid:astralsorcery.liquidstarlight>, null,
            <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```

### Constellation

天体祭壇にレシピを追加 (T3)

`入力` の長さ *は* 21 でなければなりません

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar3.png)

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

### 形質（形質）

トレイト祭壇にレシピを追加します (T4)

`Constellation` を非ローカライズされた文字列としてコンステレーションとします。 これはオプションのパラメータです。

`入力` の長さ *は* 25 以上でなければなりません。 インデックス25以上の項目は、祭壇の周りにリレーを配置する必要がある「外側項目」と見なされます。

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```zenscript
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
# JEI

CraftTweakerはJustEnoughItems (JEI)をサポートしています。 JEIにアイテムや流体を追加または非表示にしたり、説明ページを追加したりできます。

## 削除

JEIからアイテムを削除するか、削除するか、すべてのレシピを作成できます。

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI.hide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## カテゴリを非表示

JEIカテゴリ全体を非表示にすることができます(例:クラフトレシピ、炉レシピ、機械Xレシピ...)。  
カテゴリを文字列として受け付け、 `/ct jeiCategories` の ingame を実行することで、すべての登録カテゴリを取得できます。

```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## アイテムを追加

JEIに [IItemStack](/Vanilla/Items/IItemStack/) を追加して、追加されていないアイテムや、NBTタグ付きのアイテムをJEIに追加することもできます。

```zenscript
//addItem(item);
mods.jei.JEItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["What once was stone", "Is stone no more"]}}));
```

## 説明を追加

A JEI Description is an extra page shown when looking up an ingredient's recipe/usages in JEI which contains information on that ingredient.  
You can add a JEI Description to an [IItemStack](/Vanilla/Items/IItemStack/), an [IItemStack](/Vanilla/Items/IItemStack/)[], an [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) or an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

文字列が長すぎて1行(またはページ)に書き込めない場合は、自動的に改行/改ページが作成されます。  
各文字列パラメータには、少なくとも1行以上があり、長すぎる場合はウィンドウの末尾をラップします。

```zenscript
//addDescription(IItemStack item, string... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
mods.jei.JE.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Never","Gonna","You","Never","Let","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "You can use things to create things", "", "things like Armor",char@@2,char@@3,"That as was...");

//addDescription(ILiquidStack stack, string... desc);
mods.jei.JEI.addDescription(<liquid:lava>, [LAVA"]);
```

`desc` パラメータは varArg です。 すべての記述文字列を含む1つの文字列[]を与えることができます または好きな文字列を何でも。 混合しないでください！
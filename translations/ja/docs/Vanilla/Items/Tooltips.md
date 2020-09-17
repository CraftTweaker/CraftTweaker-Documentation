# ツールチップ

ツールチップを追加または削除するのは本当に簡単です:  
必要なのはアイテム(またはoreDictなど)、つまりIIngredientです。

## ツールチップの消去

`アイテム`からすべてのツールチップを削除します

```zenscript
item.clearTooltip();
```

## 特定のツールチップを削除する

この関数は、与えられた正規表現に一致するすべてのツールチップを削除します。 1つのツールチップは一般的に1行のテキストです(スペースによる改行がない限り)。

```zenscript
item.removeTooltip(regex);
```

`アイテム` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` は文字列です

## 標準ツールチップ

`項目` に `tT`をツールチップとして追加します。

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Storage, what I can say more?");
```

`アイテム` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` は文字列です

## Shift Tooltips

これは、シフトを保持するときにのみ表示されるツールチップを追加します。  
シフトを保持しない場合に表示される情報を追加することもできます。(通常、シフトツールチップについてのメッセージのようなものを作成するために使用されます。

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltipt("RED!!!", "Hold shift to know what I am");
```

`項目` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` は [IFormattedText](/Vanilla/Utils/IFormattedText/) です。 自動的に変換される文字列を使用することもできます。  
`info` は [IFormattedText](/Vanilla/Utils/IFormattedText/) です。 文字列が自動的に変換されるので、文字列を使用することもできます。

# Markup

世界はカラフルなので、私たちのツールチップのすべてが必要です。 これらのオプションをネストすることもできます。(緑色のテキストが必要な場合は、取り消し線です)

## 文字列の色

16色のいずれかを文字列に適用できます。

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format.gray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white
```

```zenscript
<minecraft:stick>.addTooltip(format.green("This one was ripe"));
```

## 文字列の書式設定

以下のように文字列に異なる形式を適用できます:

```zenscript



format.underline
format@@4format@@5 format@@6format@@7 format@@7format@@8.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("This is a bad tooltip"));
```

## ツールチップ関数

You can replace the [IFormattedText](/Vanilla/Utils/IFormattedText/) parameter with an ITooltipFunction (`import crafttweaker.item.ITooltipFunction;`).  
These functions allow you to dynamically generate a tooltip based on the given IItemStack.

tooltip 関数は、 [IItemStack](/Vanilla/Items/IItemStack/) を取得し、tooltip を文字列として返す関数です。 つまり、 `` コマンド *を使用すると、これらの関数に* が動作しないということです。 それを達成する必要がある場合は、Minecraft のフォーマットプレフィックスに依存する必要があります。

シフトツールチップについては、同様に第二の機能を提供することができます。 これにより、シフトが押されたときに表示されるツールチップも生成できます。 シフトツールチップの場合は、両方のパラメータを関数として、または両方とも [IFormattedText](/Vanilla/Utils/IFormattedText/)として、ミックスアップはありません!

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Example
<ore:myAxeOreDictionary>.add(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>.addAdvancedTooltip(function(item) {   
    return "Damage: " ~ item.damage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>.addShiftTooltip(function(item) {    
    return "Uses left: " ~ (item.maxDamage - item.damage);
}, function(item){
    return "Hold shift for some juicy math.";
});
```
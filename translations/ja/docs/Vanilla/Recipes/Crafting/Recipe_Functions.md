# レシピ関数

# IRecipeFunction

Some recipes support custom functions to programmatically determine their output.  
This can be especially useful if you need some of the input item's information, like the damage value.  
This is a so-called IRecipeFunction.

## ツルハシを修理する例

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//出力
recipes.addShapeless("pickrepair",diaPick,

//followed by the input array. One change though - we mark the diamond pickaxe, so we can use it in the function later
[diaPick.anyDamage().marked("mark"),<minecraft:diamond>],

//now we start declaring the function. 
//3つのパラメータ、1つは出力、もう1つは入力、もう1つは情報を作成するためのパラメータです。 
//入力パラメータのみが必要です。
function(out, ins, cInfo){

    //0のDMGまたは現在のダメージ-10のいずれかを返します。 これは、負の損傷値を防ぐためです。
    return ins.mark.withDamage(max(0,ins.mark.damage - 10));
}, 
//ここでは recipeAction は必要ありませんので、 null
null);
```

## IRecipeFunctionを設定する方法

上記の例で見られるかもしれないように。 3つのパラメータを持つ関数があります:  
このように呼び出す必要はありません。名前を付けることができます。

`out` is the recipe's output and an IItemStack object.  
`ins` is a map with the marks as keys and the marked inputs as values.  
`cInfo` is an ICraftingInfo Object

この関数は、レシピが出力するIItemStackを返す必要があります。

`null` を返すことでレシピを無効にすることができ、特定の条件下で作成することはできません。

ここで `ins` を変更するのは間違ったアイデアです。 この関数は、実際に結果を引き出すのではなく、クラフトグリッドの変更ごとにトリガーします。

# IRecipeAction

But CraftTweaker goes beyond simply calculating your outputs using functions.  
With an IRecipeAction Function, you can also determine what should happen when a user crafts the item.  
An IRecipeAction object comes after an IRecipeFunction!

```zenscript
val stone = <minecraft:stone>;

recipes.addShapeless("experiestone",stone,[stone,stone,stone,stone,stone,stone],
//IrecipeFunction, just return the output, it does not interesting us this time.
function(out,ins,cInfo){
    return out;
},
//IRecipeAction
function(out,cInfo,player){
    player.xp += 1;
});
```

これにより、制作が完了するたびにレシピ1レベルを行うプレイヤーが表示されます。 Again, we have a function with 3 Parameters:  
`out` is the recipe's output and an IItemStack object.  
`cInfo` is an ICraftingInfo Object  
`player` is the player performing the recipe and an [IPlayer](/Vanilla/Players/IPlayer/) object.
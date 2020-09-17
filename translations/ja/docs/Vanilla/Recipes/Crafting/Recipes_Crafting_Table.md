# レシピ

## レシピタイプ

レシピにはいくつかのタイプがあります:

### 形状のレシピ

形をしたレシピはレシピで、どのアイテムがどのスロットに入るかが重要です。 例えば、鉄のレギンスを作るために7つのインゴットを配置することはできません。 形状が重要なので、形状のレシピです。

### 鏡像レシピ

ミラーレシピは形状のレシピです。 唯一の違いは、レシピが水平または垂直軸に沿ってミラーリングすることができることです。

### 形のないレシピ

シェイプレスレシピはレシピであり、クラフトグリッドに入れたアイテムだけがレシピであり、形状は重要ではありません。 例えば、青と黄色の染料は緑色の染料を作ります。 このレシピは、どのアイテムをどこに置くかは気にしません。

## レシピを削除

レシピを削除する方法はいくつかあります。

### 削除

```zenscript
recipes.remove(output, NBTMatch);
```

This will crafting table recipes for the given `output`.  
If `NBTMatch` is true, it will only remove recipes that result in items with the same NTB-Data as provided

`Output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
`NBTMatch` is a boolan and optional (Will be the same as false if not specified).

### RemoveShaped

```zenscript
recipes.removeShaped(output, inputs);
```

`入力` を `入力`で出力する形状のレシピのみを削除します。

`出力` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`入力` は [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (例：[[iron,iron,null,iron],[iron,null,iron],[iron]),[iron,null,iron]])

さらに、 `入力` は任意です。 If omitted, the function will do the same as `recipe.remove`, though it will only remove shaped Recipes.  
`inputs` can contain wildcard characters: `[[<*>,<*>,<*>],[<*>,<*>,<*>],[<*>,<*>,<*>]]` would refer a recipe whose items, as long as each slot is filled, don't matter.

### RemoveShapeless

```zenscript
recipes.removeShapeless(output, inputs, wildcard);
```

This one is more strict on which recipes to remove and will only remove shapeless recipes that craft `output` with `input`.  
If `wildcard` is true, it will remove shapeless recipes that craft `output` with `input` and other, non-specified items (for example you could disable all shapeless recipe that contain, among others, Lapis as ingredient).

`output` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)[]  
`wildcard` is a boolan and optional (Will be the same as false if not specified)

さらに、 `入力` は任意です。 省略すると、関数は `recipe.remove`と同じ操作を行いますが、シェイプレスレシピは削除されます。

### すべて削除

ゲーム内のレシピをすべて削除します。  
少しやり過ぎだと思いませんか？

```zenscript
recipes.removeAll();
```

### 名前で削除

1.12 では命名レシピが導入されているため、名前がわかったらレシピを削除することもできます。 Regexを使用して、複数のレシピを一度に削除することもできます。 そして、あなたが正規表現が何であるかを知らなければ、私はここでそれを説明しません!

```zenscript
recipes.removeByRegex("name[1-9]");
recipes.removeByRecipeName("modid:recipename");
```

### Modで削除

また、指定したModで追加されたレシピをすべて削除することもできます。  
modのmodiを文字列として指定する必要があります。

```zenscript
recipes.removeByMod("modulearmachinery");
```

## レシピを追加

### ノート 1.12

On 1.12, each added recipe requires a UNIQUE identifier, because the forge dev team wanted it that way.  
This means, all add functions now require an additional parameter `name` at the start (which cannot be omitted).  
This means `recipe.addShaped(output,input);` now is `recipe.addShaped(name,output,input);`  
All other functionality stay the same. `名` は一意である必要があることを覚えておいてください!  
`名前` は文字列です。

### addShaped

```zenscript
//pre-1.12
recipes.addShaped(output,input,function,action);

//1.12
recipes.addShaped(name,output,input,function,action);
```

This creates a shaped recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`name` is a string and needs to be unique but is also optional `output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`inputs` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[][\] (see below)  
`function` is a IRecipeFunction. 関数の詳細については、 [Wikiエントリを尊重する](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) を参照してください。  
`アクション` は IRecipeAction です。 アクションの詳細については、 [Wikiのエントリを尊重する](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) を参照してください。

`inputs` is a 2 Dimensional [IIngredient](/Vanilla/Variable_Types/IIngredient/) Array.  
So the recipe for Iron Leggings would be written as `[[iron,iron,iron],[iron,null,iron],[iron,null,iron]]`  
If that looks to confusing, try splitting the arrays up into one array per line

```zenscript
val iron = <minecraft:iron_ingot>;
val leggings = <minecraft:iron_leggings>;

recipes.addShaped("CTLeggings", leggings,
 [[iron,iron,iron],
  [iron,null,iron],
  [iron,null,iron]);
```

### addShapedMirrored

```zenscript
//Normal pre 1.12 syntax
recipes.addShapedMirrored(output,input,function,action);

//Recommended 1.12 syntax
recipes.addShapedMirrored(name,output,input,function,action);
```

`addShaped`と同様に、この方法で作成されたレシピだけがミラーレシピである。

### addShapeless

```zenscript
//Normal pre 1.12 syntax
recipes.addShapeless(output,input,function,action)

//Recommended 1.12 syntax
recipes.addShapeless(name,output,function,action)
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.

`名前` は文字列で、ユニークな `の出力` は [IItemStack](/Vanilla/Items/IItemStack/) である  
`inputs` は、 [IIngredient](/Vanilla/Variable_Types/IIngredient/)である (例: [<minecraft:dye:1>,<minecraft:dye:2>])  
`関数` はIRecipeFunctionです。 関数の詳細については、 [wiki の項目](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipefunction) を参照してください。 これは任意です。  
`アクション` IRecipeActionです。 アクションの詳細については、 [Wikiのエントリを尊重する](/Vanilla/Recipes/Crafting/Recipe_Functions/#irecipeaction) を参照してください。 これは任意です。

### addHidden

```zenscript
addHiddenShapeless(名前の文字列、IItemStack 出力、IIngredient[] 食材、@Optional IRecipeFunction 関数、@Optional IRecipeAction action);
addHiddenShaped(String name, IItemStack output, IIngredient[][] factions, @Optional IRecipeFunction 関数, @Optional IRecipeAction action, @Optional boolean mirrored);
```

This creates a shapeless recipe for `output` using `inputs` as Ingredients that is named `name`.  
If a `function` is added as third parameter, you can also use a function to determinate the output.  
If an `action` function is added as forth parameter, you can also determine, what will happen, if the item is crafted.  
For the shapeless variant you can also set if the recipe is `mirrored`, if omitted, it will not.

## その他の機能

### 登録済みのクラフトレシピを全て入手しましょう。

[`リスト<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) には、登録されているすべてのクラフトレシピが含まれています。

    レシピ。すべて;
    

### 特定のIIngredientのすべてのレシピを入手する

You can use this to get a [`List<ICraftingRecipe>`](/Vanilla/Recipes/Crafting/ICraftingRecipe/) that contains ALL registered crafting recipes for the given [IIngredient](/Vanilla/Variable_Types/IIngredient/).

    //recipes.getRecipesFor(IIngredient 食材);
    recipes.getRecipesFor(<minecraft:iron_ingot>);
    

### すべてのアイテムの成分を別の成分に置き換える

これは、レシピ内のすべての [成分](/Vanilla/Variable_Types/IIngredient/) を別のものに置き換えることができます。例えば、すべてのスティックが石に付いています。 また、レシピ出力に再びマッチするオプションの 3 番目のパラメータも受け付けます。 レシピの場合

    //recipes.replaceAllOccurences(IIngredient toReplace, IIngredient replaceWith, @Optional IIngredient forOutput);
    
    //replaces every stick with stone
    recipes.replaceAllOccurences(<minecraft:stick>, <minecraft:stone>);
    
    //Explicitly uses any output, replaces gold ingots with gold blocks
    recipes.replaceAllOccurences(<ore:ingotGold>, <ore:blockGold>, <*>);
    
    
    //Only replaces in recipes with a diamond_sword as output
    recipes.replaceAllOccurences(<ore:gemDiamond>, <ore:blockDiamond>, <minecraft:diamond_sword>);
    
    
    //conditions work as well -> replaces in recipes for any recipe output except tnt
    recipes.replaceAllOccurences(<ore:gunpowder>, <minecraft:tnt>, <*>.only(function(item) {
        return !isNull(item) & !<minecraft:tnt>.matches(item);
    }));
    

### クラフト

`レシピ` の中からクラフトすることもできます！ この関数は、レシピが見つかるかどうかに応じて [IItemStack](/Vanilla/Items/IItemStack/) または `null` を返します。

    //recipes.craft(IItemStack[][]content);
    recipes.craft([[<minecraft:iron_ingot>]]);
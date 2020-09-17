# ICraftingRecipe

ICraftingRecipeはZSがそれを見る方法をクラフトテーブルレシピです。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.recipes.ICraftingRecipe`

## ZenMethods/Getters

### 材料を入手

[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] または [IIngredient](/Vanilla/Variable_Types/IIngredient/) [][] を返します。

```zenscript
rec.foodents1D
rec.食材2D
```

### Get standart output

アウプトゥットを [IItemStack](/Vanilla/Items/IItemStack/) として返します。 注意してください、nullすることができます!

```zenscript
rec.output
```

### 条件のチェック

それぞれがブール値を返します。

```zenscript
rec.hasTransformer;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.shaped;
```

### resourceDomain

基本的には、レシピを追加したModのMODO。

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### 材料

原材料リストを [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] または [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[] として返します。

```zenscript
rec.食材1D;
rec.食材2D;
```

### 出力

レシピの [IItemStack](/Vanilla/Items/IItemStack/) 出力。

```zenscript
rec.output;
```

### To String

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```
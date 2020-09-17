# RecipeBuilder

RecipeBuilder クラスには、1 つの目的しかありません: 新しい [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) オブジェクトの作成。

## 発信中

`mods.modarmachinery.RecipeBuilder` を使用してBrewパッケージを呼び出すことができます。

## RecipePrimer を作成します。

これらはクラスで見つけられる唯一の関数であり、両方とも新しい [RecipePrimer](/Mods/ModularMachinery/Recipes/RecipePrimer/) Object を返します。

```zenscript
//mods.moduarmachiner.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryName, int processingTickTime);


//mods.moduramachinery.RecipeBuilder.newBuilder(String recipeRegistryName, String associatedMachineRegistryint Name, processingTicke, int sortingPriority);


```

```zenscript
var item = <item:minecraft:gold_ingot>;
```
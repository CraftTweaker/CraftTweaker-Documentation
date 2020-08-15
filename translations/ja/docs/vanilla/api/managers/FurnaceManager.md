# FurnaceManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.FurnaceManager
```

## Implemented Interfaces
FurnaceManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## メソッド
### addRecipe

Adds a recipe based on given params.

```zenscript
furnace.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
furnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| パラメータ    | タイプ                                                                 | 説明                              |
| -------- | ------------------------------------------------------------------- | ------------------------------- |
| name     | 文字列型                                                                | Name of the new recipe          |
| 出力       | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe |
| input    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient input of the recipe |
| xp       | float型                                                              | how much xp the player gets     |
| cookTime | int                                                                 | how long it takes to cook       |


### removeRecipe

Removes a recipe based on it's output and input.

```zenscript
furnace.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
furnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| パラメータ | タイプ                                                                 | 説明                                   |
| ----- | ------------------------------------------------------------------- | ------------------------------------ |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output of the recipe.     |
| input | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngredient of the recipe to remove. |




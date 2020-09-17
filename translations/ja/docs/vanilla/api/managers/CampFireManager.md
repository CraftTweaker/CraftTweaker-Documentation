# CampFireManager



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
craftweaker.api.CampFireManager
```

## 実装されたインターフェース
CampFireManager は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.registrries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## メソッド
### addRecipe

与えられたパラメータに基づいてレシピを追加します。

```zenscript
campfire.addRecipe(name as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
campfire.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0);
```

| パラメータ | タイプ                                                                | 説明                 |
| ----- | ------------------------------------------------------------------ | ------------------ |
| 名前    | 文字列型                                                               | 新しいレシピの名前          |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)  | レシピの IItemStack 出力 |
| input | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | レシピの原料入力           |
| xp    | float型                                                             | プレーヤーがどれだけXPを取得するか |
| 調理時間  | int                                                                | 調理にどれだけ時間がかかるか     |


### RemoveRecipe

出力と入力に基づいてレシピを削除します。

```zenscript
campfire.removeRecipe(crafttweaker.api.item.IItemStack, crafttweaker.api.item.IIngredient);
campfire.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| パラメータ | タイプ                                                                | 説明                 |
| ----- | ------------------------------------------------------------------ | ------------------ |
| 出力    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)  | IItemStack レシピの出力。 |
| input | [craftweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | 削除するレシピの成分.        |




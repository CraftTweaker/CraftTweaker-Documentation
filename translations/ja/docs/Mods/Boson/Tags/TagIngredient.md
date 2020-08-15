# `TagIngredient`

`TagIngredient` は `IIngredient` 実装で、レシピで [`タグ`](/Mods/Boson/Tags/Tag/) を使用することができます。 [`タグ` ローダー](/Mods/Boson/Loaders/Tags/) の外部からのみ、このデータにアクセスできます。 タグと取得方法についての詳細は [このページ](/Mods/Boson/Tags/Concept/) を参照してください。

## クラスの詳細
このクラスは `net.thesilkminer.mc.boson.zen.tag` パッケージ内にあり、 `net.thesilkminer.mc.boson.tag.tag.TagIngredient` インポートのための完全修飾名です。

## 新しいインスタンスの作成
Refer to [the bracket handler documentation](/Mods/Boson/Tags/BracketHandler/).

## `IIngredient`
`TagIngredient` は `IIngredient`であるため、そのインターフェイスのすべてのプロパティとメソッドへのアクセスを提供します。 詳細については、 から [`IIngredient`のドキュメント ページ](/Vanilla/Variable_Types/IIngredient/) を参照してください。 このドキュメントページ では、このクラスに特有の追加とQuirks のみを概説しています。

## プロパティ
`TagIngredient` は、次の表に示されるように、追加のプロパティセットへの読み取り専用アクセスを提供します。

| プロパティ名    | タイプ                                    | 説明                    |
| --------- | -------------------------------------- | --------------------- |
| `tagName` | [`名前SpacedString`](/Mods/Boson/Names/) | この成分が参照するタグを一意に識別する名前 |

## 例

```zenscript
val anyIngot = <tag-items:forge:ingots>;
val anyWool = <tag-items:minecraft:wool>;

recipes.addShaped("wool_infused_ingot", <contenttweaker:wool_infused_ingot>, [[anyIngot, anyWool]), [anyWool, anyIngot]);
```

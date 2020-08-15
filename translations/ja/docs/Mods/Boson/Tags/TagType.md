# `TagType`

`TagType` は指定された [`タグ`](/Mods/Boson/Tags/Tag/) 内に保存できるアイテムの種類を識別します。 It also hosts some additional read-only data that identifies a certain set of mnemonics that help identify a type in a more human-friendly way.

## クラスの詳細
このクラスは `net.thesilkminer.mc.boson.zen.tag` パッケージに含まれており、 `net.thesilkminer.mc.boson.tag.tagType` インポートのための完全修飾名です。

## 新しいインスタンスの作成
CraftTweakerからrawタグタイプの新しいインスタンスを作成することはできません。 It is nevertheless possible to obtain the type of a given `Tag` via its properties. 詳しくは [ `Tag`](/Mods/Boson/Tags/Tag/) のドキュメント を参照してください。

### Known `TagType` インスタンス
既定では、既に特定のタグタイプが作成されています [ブラケットハンドラ](/Mods/Boson/Tags/BracketHandler/) で `Tag`s または `TagIngredient`s のインスタンスを取得することができます。 これらのニーモニック は以下の表に書かれています:

| ニーモニック     | 保存されたオブジェクト                                   |
| ---------- | --------------------------------------------- |
| `ブロック`     | [`IBlockState`](/Vanilla/Blocks/IBlockState/) |
| `<unk>` | (CraftTweaker経由で現在アクセスできません)                  |
| `項目`       | [`IItemStack`](/Vanilla/Items/IItemStack/)    |

## プロパティー
`TagType` は、次の表で説明されているように、特定のプロパティセットへの読み取り専用アクセスを提供します。

| プロパティ名              | タイプ                                                              | 説明                                    |
| ------------------- | ---------------------------------------------------------------- | ------------------------------------- |
| `directoryName`     | `文字列`                                                            | JSONタグがデータパック内にあるディレクトリの名前            |
| `名前`                | `文字列`                                                            | 与えられたタグの種類を識別するニーモニック; タグブラケットハンドラで使用 |
| `classType`         | [`クラス`](/Mods/Boson/Reflection/Class/)                           | タグに保存されているオブジェクトの種類                   |
| `converterFunction` | [`関数<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | 名前をタグ要素に変換します                         |

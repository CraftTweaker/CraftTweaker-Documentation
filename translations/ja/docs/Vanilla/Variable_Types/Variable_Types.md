# 変数のタイプ

もしかしたら変数と値とで混乱しているかもしれません。CraftTweakerが整数、アイテムあるいは鉱石辞書エントリをどの様に扱っているのか疑問に思いませんでしたか?

変数を宣言する最も簡潔な構文は次のとおりです。 ```var name = value;``` これによって変数が作成され、文脈にて最適と考えられる型へとキャストされます。

## 指定した型への変数のキャスト

より複雑なスクリプトを書こうとすると、変数を指定した型へキャストする必要が出てくると思います。 例えば、次のスクリプトはうまく動きません。

    var test;
    
    test = <minecraft:dirt>;
    recipes.remove(test);
    

何故でしょう? なぜなら、CraftTweakerは値が定まっていない変数をIAnyという型にキャストするためです。 実装は実際には無いですが、この型はいくつかのレシピハンドラを簡単にするために用意されました。しかし、これは時折不都合だったりします。 元はほぼすべての型を扱える型として意図されていたため、変数を変更する必要は無いですが、インターフェースは何も実装されていません。

閑話休題、この問題をどうやって解決するでしょうか? 変数testを ```IItemStack```にキャストすると解決できます。この型はアイテムを扱う型です。 残念なことに、いくつかの型を使うには最初にインポートしなければなりません。これはその一例です。

    import crafttweaker.item.IItemStack;
    var test as IItemStack;
    
    test = <minecraft:dirt>;
    recipes.remove(test);
    

## 変数の型の一覧

変数の型の(不完全な)一覧です。

| 名前(CraftTweaker)                                    | 説明                                                                                | 例                                                    | Import                                    |
| --------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| Integer型(int)                                       | Integer型は、文字通り整数を表します(1, 2, 3...など)。但し、上限は2,147,483,647までです。                      | `var test = 10 as int;`                              |                                           |
| [IItemStack](/Vanilla/Items/IItemStack/)            | 1つのアイテムです。                                                                        | `var test = <minecraft:dirt> as IItemStack;`   | import crafttweaker.item.IItemStack;      |
| [IIngredient](/Vanilla/Variable_Types/IIngredient/) | 1つ以上のアイテムを表します(例: `<minecraft:dirt>`, `<ore:ingotIron>`,...)。         | `var test = <minecraft:dirt> as IIngredient;`  | import crafttweaker.item.IIngredient;     |
| [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)    | 指定した鉱石辞書名に対応する複数のアイテムです(例: `<ore:ingotIron>`, `<ore:ingotGold>`,...)。 | `var test = <ore:ingotIron> as IOreDictEntry;` | import crafttweaker.oredict.IOreDictEntry |
| Boolean型(bool)                                      | Boolean型はtrueかfalseの値を持ちます。                                                       | `var test = false as bool;`                          |                                           |
| Byte型(byte)                                         | Byte型は0から255までの整数を表します。                                                           | `var test = 125 as byte;`                            |                                           |
| 単精度浮動小数点数(float)                                    | 10進法の小数点を表します。                                                                    | `var test = 1.25 as float;`                          |                                           |
| 倍精度浮動小数点数(double)                                   | 単精度浮動小数点数と似ていますが、より精度が高く、より広い範囲の値を表せます。                                           | `var test = 1.25 as double;`                         |                                           |
| Long型(long)                                         | Integer型と似ていますが、より広い範囲の値を表せます。普通はintで十分です。                                        | `var test = 30 as long;`                             |                                           |
| Null (null)                                         | Null、無いこと、無。 厳密には型ではないですが、便利です。                                                   | `var test = null;`                                   |                                           |
| Short型(short)                                       | Integer型と似ていますが、表せる値の範囲が狭いです。                                                     | `var test = 16 as short;`                            |                                           |
| 文字列型(string)                                        | 文字列型とはテキストです。 ダブルクォーテーション「"」で括られたものは自動的に文字列型として解釈されます。なので、普通"as"でキャストする必要はありません。  | `var test = "Hello World!" as string;`               |                                           |
| Void (void)                                         | nullより更に小さいです。 おそらく、関数に対してはvoidだけ必要になるでしょう。                                       | `var test as void;`                                  |                                           |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)      | IItemStackと同じ様に、液体に対して使います。                                                       | `var test = <liquid:water> as ILiquidStack;`   | import crafttweaker.liquid.ILiquidStack;  |
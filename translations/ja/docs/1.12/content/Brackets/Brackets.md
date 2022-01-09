# ブラケット記法

ZenScriptはアイテム、エンティティや鉱石辞書といったゲーム内オブジェクトの参照にブラケット記法を使用します。

## ブラケット記法の使い方

ZenScriptにおけるブラケット記法は、`<`と`>`を用いて定義されます。これらの内側に有るものは全てブラケット記法と解釈されます。

ブラケット記法の一例として、アイテムのブラケット記法があります。これによりゲーム内におけるアイテムを取り扱うことができるようになります。

## 使用例

[アイテムのブラケット記法](/Vanilla/Brackets/Bracket_Item/)の使い方は次のようになります。

```zenscript
<minecraft:apple>
```

これは、`りんご`の[アイテム](/Vanilla/Items/IItemStack/)を表します。

[鉱石辞書のブラケット記法](/Vanilla/Brackets/Bracket_Ore/)の使い方は次のようになります。

```zenscript
<ore:ingotIron>
```

これは[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)における`ingotIron`を表します。
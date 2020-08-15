# MiniBlocks ユーティリティ

## 特定の Mini Blocks を取得

これは特定のMiniBlockのIIngredientを取得するためのutil関数で、奇妙なNBTを避けることができます。

* type パラメータは "siding", "moulding" または "corner" を指定します。
* parentBlockは、このparentBlockは鉱石のようなIIngredientなものであるため、miniblockがそのテクスチャから得たブロックです。

```zenscript
mods.betterwithmods.MiniBlocks.getMiniBlock(String type, IIngredient parentBlock)


//Example
//
mods.betterwithmods.MiniBlock("siding", <ore:plankWood>);
```
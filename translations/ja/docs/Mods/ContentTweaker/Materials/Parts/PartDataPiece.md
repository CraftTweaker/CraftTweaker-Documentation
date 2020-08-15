# PartDataPiece

パーツデータピースは [パーツタイプ](/Mods/ContentTweaker/Materials/Parts/PartType/) に追加することで、 [パーツデータ](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) を [パーツ](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) で作成された [パーツ](/Mods/ContentTweaker/Materials/Parts/Part/) この [パーツタイプ](/Mods/ContentTweaker/Materials/Parts/PartType/)に追加することができます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.PartDataPiece;`

## そのようなオブジェクトを取得しています

[パート](/Mods/ContentTweaker/Materials/Parts/Part/) の `getData()` を [パート](/Mods/ContentTweaker/Materials/Parts/Part/) で取得できます。

代わりに、 [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) を使用して新しいPartDataPieceを登録することもできます:

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(String name, boolean required)
```

パラメータ:

- 文字列名: 新しい部品データピースの名前
- boolean required: PartDataPiece は [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) に登録するために必要ですか?

## ZenMethods

PartType から次の情報を取得できます:

| ZenMethod    | 戻り値 |
| ------------ | --- |
| getName()    | 文字列 |
| isRequired() | 文字列 |
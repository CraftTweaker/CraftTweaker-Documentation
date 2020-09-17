# MaterialPart

A MaterialPart Object is, as the name suggests a combination of a [Material](/Mods/ContentTweaker/Materials/Materials/Material/) and a [Part](/Mods/ContentTweaker/Materials/Parts/Part/), such as `platinum gear`.

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.MaterialPart;`

## そのようなオブジェクトを取得しています

このようなオブジェクトをリストまたは単一のオブジェクトとしてリトレインする方法はいくつかあります。

単一オブジェクト:

- [マテリアル部品ブラケットハンドラ](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/) の使用
- [マテリアルの](/Mods/ContentTweaker/Materials/Materials/Material/) registerPartMethodの使用
- [部品の](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterial メソッドの使用

リスト:

- [MaterialSystem の](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial Method の使用
- [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) registerParts Method の使用
- [部品の](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterialsメソッドの使用

## フィールド

MaterialPartから次の情報を取得できます:

| ZenMethod            | 戻り値                                                                             |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | 文字列                                                                             |
| getLocalizedName()   | 文字列                                                                             |
| hasEffect()          | boolean型                                                                        |
| hasOverlay()         | boolean型                                                                        |
| getMaterial()        | [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | 文字列                                                                             |
| getCTColor()         | [色](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                            |
| getColor()           | int                                                                             |
| isColorized()        | boolean型                                                                        |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

MaterialPartの以下の情報を設定することもできます。

| ZenMethod                           | パラメータ              | 説明                                                |
| ----------------------------------- | ------------------ | ------------------------------------------------- |
| setColorized(colorized)             | ブーリアンカラー化          | アイテムのカラーコードを適用するかどうかを設定します。                       |
| setTextureLocation(textureLocation) | 文字列textureLocation | アイテムのテクスチャパスを設定します。 たとえば、1つのギアに残りのギアと異なる外観を求める場合。 |
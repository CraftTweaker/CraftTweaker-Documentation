# ISoundTypeDefinition

ISoundTypeDefinition オブジェクトは、ゲーム内のサウンド (タイプ) を表します。 サウンドタイプは、ほとんどの場合、1つまたは複数のブロックにバインドされます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.SoundType;`

## ISoundTypeDefinition オブジェクトの呼び出し

[Sound Type Bracket Handler](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Sound_Type/):  
`<soundtype:wood>` を使用してこのようなオブジェクトを取得できます。

## パラメータのないZenMethods

| ZenMethod       | 戻り値の種類                                                                                  | 定義                             |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------ |
| getVolume()     | float型                                                                                  | 型の音量を返します                      |
| getPitch()      | float型                                                                                  | 型のピッチを返します                     |
| getBreakSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 関連するブロックが壊れたときに発生する音を返します。     |
| getStepSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 関連するブロックが踏まれたときに発生する音を返します。    |
| getPlaceSound() | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 関連するブロックを配置したときに発生するサウンドを返します。 |
| getHitSound()   | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 関連するブロックがヒットしたときに発生する音を返します。   |
| getFallSound()  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) | 関連するブロックが落下したときに発生する音を返します。    |
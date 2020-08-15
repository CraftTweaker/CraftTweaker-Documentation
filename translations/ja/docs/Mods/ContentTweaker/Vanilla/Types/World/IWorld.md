# IWorld

IWorld オブジェクトは、プレーヤーが現在いる世界を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.World;`

## パラメータなしのZenMethodsとZenGetters

| ZenMethod          | ZenGetter     | 戻り値の種類                                                         | 説明                                                                                                            |
| ------------------ | ------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| isRemote()         | リモート          | boolean型                                                       | 世界が「スレーブ」クライアントである場合、真です。変更はこの世界から保存または伝播されません。 例えば、サーバーのワールドでは false に設定されています。クライアントのワールドでは true に設定されています。 |
| isRaining()        | 雨             | boolean型                                                       | 雨が降っている場合は true を返します。                                                                                        |
| isThundering()     | 雷鳴も           | boolean型                                                       | 雷鳴の場合は true を返します                                                                                             |
| getMoonPhase()     | moonPhase     | int                                                            | 現在の月齢を返します。                                                                                                   |
| isDayTime()        | dayTime       | boolean型                                                       | 昼間かどうかをチェックします                                                                                                |
| getWorldTime()     | 時間            | long                                                           | 世界の時刻を返します                                                                                                    |
| getDimension()     | 寸法            | int                                                            | ワールドの寸法を返します                                                                                                  |
| isSurfaceWorld()   | surfaceWorld  | boolean型                                                       | あなたが表面の世界にいるかどうかを返します。                                                                                        |
| getDimensionType() | dimensionType | 文字列型                                                           | 寸法のタイプ名を返します。                                                                                                 |
| getRandom()        | random        | [CTRandom](/Mods/ContentTweaker/Vanilla/Types/World/CTRandom/) | 世界の乱数ジェネレーターを返します。                                                                                            |

## パラメータ付きのZenMethods

- [IBiome](/Vanilla/Biomes/IBiome/) getBiome([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- boolean setBlockState([ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState, [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) getBlockState([IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) blockPos);
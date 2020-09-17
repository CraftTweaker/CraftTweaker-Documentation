# 爆発イベント

このインターフェイスは、すべての爆発イベントによって拡張されます。 つまり、以下のゲッターを使ってポジションの詳細にアクセスすることができます。

## クラスのインポート
エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IExplosionEvent;`

## ZenGetters

| 名前 | タイプ                                    |
| -- | -------------------------------------- |
| 世界 | [IWorld](/Vanilla/World/IWorld/)       |
| 位置 | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x  | double                                 |
| y  | double                                 |
| z  | double                                 |

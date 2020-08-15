# IEventPositionable

このインターフェイスは、位置が重要なすべてのイベントによって拡張されます。  
つまり、位置の詳細にアクセスするために以下のゲッターを使用することができます。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IEventPositionable;`

## ZenGetters

| 名前 | タイプ                                    |
| -- | -------------------------------------- |
| 位置 | [IBlockPos](/Vanilla/World/IBlockPos/) |
| x  | int                                    |
| y  | int                                    |
| z  | int                                    |
# IPlayerEvent

このインターフェイスはプレイヤーを持つすべてのイベントによって拡張されます。  
つまり、プレイヤーにアクセスするには以下のゲッターを使用できます。

## クラスのインポート

エラーを避けるためにクラスを [インポート](/AdvancedFunctions/Import/) する必要があるかもしれません。  
`import crafttweaker.event.IPlayerEvent;`

## ILivingEvent の拡張

このインターフェースは [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)を拡張します。つまり、ILivingEvent が提供するすべての機能が IPlayerEvent にも存在することを意味します。

## ZenGetters

| 名前    | タイプ                                  |
| ----- | ------------------------------------ |
| プレイヤー | [IPlayer](/Vanilla/Players/IPlayer/) |
# FarmlandTrampleEvent

農地踏み場イベントは、農地が踏みにじられようとするたびに発生します。 イベントをキャンセルすると、ブロックが踏みつけられなくなります。

## メモ

`event.fallDistance` には農地に到達する前に降下した距離が含まれています。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. armlandTrampleEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
FarmlandTryple Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersも同様に呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter      | ZenSetter | タイプ                                   |
| -------------- | --------- | ------------------------------------- |
| `エンティティ`       |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallDistance` |           | float型                                |

# EntityTravelToDimension

EntityTravelToDimensionイベントは、エンティティが別のディメンションに移動しようとするたびに発生します。 キャンセルされた場合、エンティティは旅行を妨げられます。

## メモ

`event.dimension` には、図形が移動しようとしている寸法が含まれています。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
EntityTravelToDimension Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter | 戻り値 |
| --------- | --- |
| `寸法`      | int |

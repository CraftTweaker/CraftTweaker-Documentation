# 爆発開始

ExplosionStartイベントは、爆発が始まる直前に発生します。 キャンセルされた場合、爆発は起こりません。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. xplosionStartEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
ExplosionStartイベントは、以下のインターフェースを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [爆発イベント](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

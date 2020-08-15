# PotionBrewPre

このイベントはバニラ醸造が行われる直前に発生し、 **が**をキャンセルすると醸造が行われなくなります。 キャンセルされても項目が変更された場合は、 [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) が自動的に発行されます。 これにより、"modded"醸造のシミュレーションが可能になります。

**注意**: このイベントは、レシピの計算が行われているため、「タイマー」が「最大進行度」に達すると発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PotionBrewPre Eventsは以下のインターフェースを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [iPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

# PotionBrewPost

このイベントは、出力アイテムがすでに交換されている場合、醸造スタンドタイルエンティティによってポーションが「醸造」された直後に発生します。 [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) がキャンセルされたが、醸造スタンド内のアイテムスタックが変更された場合は、このイベントも発生します。

プリイベントがアイテムスタックを変更せずにキャンセルされた場合、このイベントは **ではなく** 発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
PotionBrewPost Events は以下のインターフェイスを実装しており、すべてのメソッド/ゲッター/セッターを呼び出すことができます。

- [iPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)

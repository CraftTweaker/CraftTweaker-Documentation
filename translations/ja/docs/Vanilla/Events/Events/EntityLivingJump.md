# EntityLivingJump

EntityLivingJump イベントは、エンティティがジャンプしたときに発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingJumpEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
# EntityLivingDeath

EntityLivingDeath イベントは、エンティティが死にそうなときに発生します。  
エンティティをライブ状態にするためにキャンセルすることができます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerDeathDrops イベントは以下のインターフェイスを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

| ZenGetter    | タイプ                                             |
| ------------ | ----------------------------------------------- |
| damageSource | [IDamageSource](/Vanilla/Damage/IDamageSource/) |
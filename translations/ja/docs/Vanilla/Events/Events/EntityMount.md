# EntityMountEvent

EntityMount イベントは、エンティティがマウントまたはアンマウントされたときに発生します。 キャンセルされた場合、エンティティはマウント(またはマウント解除)できません。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityMountEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
EntityMountEvent イベントは、以下のインターフェイスを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter        | 戻り値                                   |
| ---------------- | ------------------------------------- |
| `世界`             | [IWorld](/Vanilla/World/IWorld/)      |
| `mountingEntity` | [IEntity](/Vanilla/Entities/IEntity/) |
| `mountedEntity`  | [IEntity](/Vanilla/Entities/IEntity/) |
| `isMounting`     | boolean型                              |
| `isdismounting`  | boolean型                              |

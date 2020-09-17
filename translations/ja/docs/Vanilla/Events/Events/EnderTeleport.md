# EnderTeleport

EnderTeleportイベントは、エンダーマンまたはシュルカーテレポート時に発生します。  
プレイヤーがエンダーパールを使ってテレポートするたびに発射されます(他のMODもこのイベントを発生させる可能性があります)。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnderTeleportEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

LivingEntityUseItem Eventsは、以下のインターフェースを実装し、それらのメソッド/getters/setters/settersをすべて呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

イベント中に以下の情報を取得/設定できます:

| ZenGetter | ZenSetter | タイプ    |
| --------- | --------- | ------ |
| `targetX` | `targetX` | double |
| `targetY` | `targetY` | double |
| `targetZ` | `targetZ` | double |
| `攻撃ダメージ`  | `攻撃ダメージ`  | float型 |
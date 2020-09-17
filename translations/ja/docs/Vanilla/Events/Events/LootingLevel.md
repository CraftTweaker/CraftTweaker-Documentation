# LootingLevel

このイベントは、略奪レベルを計算するために生きているエンティティクリーチャーが殺されるたびに発生します。 値はそのまま増加または減少または残すことができます。 値は他のイベントによってすでに変更されている可能性がありますが、元の値は含まれていません。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LootingLevelEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
LootingLevel Eventsは以下のインターフェースを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter      | ZenSetter | タイプ                                             |
| -------------- | --------- | ----------------------------------------------- |
| `略奪レベル`        | `略奪レベル`   | int型                                            |
| `damageSource` |           | [IDamageSource](/Vanilla/Damage/IDamageSource/) |

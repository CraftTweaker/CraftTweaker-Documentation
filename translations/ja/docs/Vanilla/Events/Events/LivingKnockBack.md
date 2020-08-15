# LivingKnockBack

このイベントはエンティティがノックバックされたときに発生します。 イベントは **キャンセル可能** で、エンティティがノックバックされるのを防ぎます。 代わりに、XとZ比に加えてノックバックの強度を調整することができます。

## イベントクラス
関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. ivingKnockBackEvent <br x-id="2" /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張
LivingKnockBack Eventsは以下のインターフェースを実装し、それらのメソッド/ゲッター/セッターをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
イベント中に以下の情報を取得/設定できます:

| ZenGetter          | ZenSetter | タイプ                                   |
| ------------------ | --------- | ------------------------------------- |
| `攻撃`               | `攻撃`      | [IEntity](/Vanilla/Entities/IEntity/) |
| `オリジナル・アタッカー`      |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `強度`               | `強度`      | float型                                |
| `originalStrength` |           | float型                                |
| `ratioX`           | `ratioX`  | double型                               |
| `レシオZ`             | `レシオZ`    | double型                               |
| `originalRatioX`   |           | double型                               |
| `OriginalRatioZ`   |           | double                                |

## メモ

When the event arrives, it's possible that the `attacker`, `strength`, or the various `ratio`s have already been modified. これらの値は、 `original*` 変数で確認できます。

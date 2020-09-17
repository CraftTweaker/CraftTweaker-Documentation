# CriticalHitEvent

CriticalHit イベントはプレイヤーが別の生物を攻撃するたびに発生します。 これは **結果** があり、デフォルトのクライト挙動が発生するかどうかを決定します。

- ****を許可: 攻撃はクリティカルに強制される
- **deny**: 攻撃がクリティカルであることを防ぎます
- **default**: 攻撃は、クリットかどうかを判断するためにデフォルトのバニラ動作を使用します。

クリティカルヒットのダメージ修飾子も調整できます。

## メモ

`event.oldDamageModifier` contains the original damage modifier of the event, while `event.isVanillaCrit` is a boolean value that determines whether or not this is actually already a critical hit.

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CriticalHitEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
CriticalHit Events 以下のインターフェイスを実装しており、すべてのメソッド/getters/settersを呼び出すこともできます。

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter           | ZenSetter        | 戻り値の型                                 |
| ------------------- | ---------------- | ------------------------------------- |
| `target`            |                  | [IEntity](/Vanilla/Entities/IEntity/) |
| `oldDamageModifier` |                  | float型                                |
| `damageModifier`    | `damageModifier` | float型                                |
| `isVanillaCrit`     |                  | boolean型                              |

## ZenMethods

- `event.deny()` は結果を否定します。
- `event.allow()` は結果を許可するように設定します。
- `event.default()` は結果をデフォルトに設定します。

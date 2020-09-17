# PlayerUseHoe

PlayerUseHoe イベントはプレイヤーがホーを使用するたびに発生します。 私が何を言っているか分かっていれば。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerUseHoeEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerUseHoe Eventsは以下のインターフェイスを実装し、それらのメソッド/getters/settersをすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter    | 戻り値                                         |
| ------------ | ------------------------------------------- |
| `キャンセル済み`    | boolean型                                    |
| `処理されました`    | boolean型                                    |
| `x`          | int                                         |
| `y`          | int                                         |
| `z`          | int                                         |
| `プレイヤー`      | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `世界`         | [IWorld](/Vanilla/World/IWorld/)            |
| `ブロック`       | [IBlock](/Vanilla/Blocks/IBlock/)           |
| `blockState` | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `寸法`         | int                                         |
| `項目`         | [IItemStack](/Vanilla/Items/IItemStack/)    |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します
- `event.process()` は処理済みとしてイベントを設定します
# PlayerFillBucket

プレイヤーがバケットを入力するたびに、PlayerFillBucket イベントが発生します。

## イベントクラス

関数ヘッダーのイベントをこのクラスとしてキャストする必要があります:  
`crafttweaker.event. layerFillBucketEvent <br /> 
 <code>`  
もちろん、 [インポート](/AdvancedFunctions/Import/) 前にそのクラスをインポートして、その名前を使用することもできます。

## イベントインターフェースの拡張

PlayerFillBucket Events 以下のインターフェイスを実装し、すべてのメソッド/getters/settersを呼び出すこともできます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IProcessableEvent](/Vanilla/Events/Events/IProcessableEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter        | 戻り値                                                |
| ---------------- | -------------------------------------------------- |
| `キャンセル済み`        | boolean型                                           |
| `プレイヤー`          | [IPlayer](/Vanilla/Players/IPlayer/)               |
| `result`         | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `emptyBucket`    | [IItemStack](/Vanilla/Items/IItemStack/)           |
| `x`              | int                                                |
| `y`              | int                                                |
| `z`              | int                                                |
| `世界`             | [IWorld](/Vanilla/World/IWorld/)                   |
| `blockState`     | [IBlockState](/Vanilla/Blocks/IBlockState/)        |
| `ブロック`           | [IBlock](/Vanilla/Blocks/IBlock/)                  |
| `寸法`             | int                                                |
| `rayTraceResult` | [IrayTraceResult](/Vanilla/World/IRayTraceResult/) |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。

## Setters

- `event.result = <minecraft:ender_pearl>` これはイベントも処理します!
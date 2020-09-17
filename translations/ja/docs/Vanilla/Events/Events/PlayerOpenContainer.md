# PlayerOpenContainer

PlayerOpenContainer イベントは、プレイヤーがコンテナを開くたびに発生します。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerOpenContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerOpenContainer Eventsは以下のインターフェイスを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter | 戻り値                                          |
| --------- | -------------------------------------------- |
| `キャンセル済み` | boolean型                                     |
| `プレイヤー`   | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `コンテナ`    | [IContainer](/Vanilla/Container/IContainer/) |

## ZenMethods

- `event.cancel()` はイベントをキャンセルとして設定します。
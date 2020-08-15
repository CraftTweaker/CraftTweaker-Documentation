# BlockBreakEvent

ブロックが壊れた時はいつでもBlockBreak Eventが発生します。  
ブロックが壊れないようにイベントをキャンセルできます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockBreakEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

BlockBreak Eventsは以下のインターフェースを実装しており、それらのメソッド/getters/settersもすべてコールできます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters

イベントから次の情報を取得できます。

| ZenGetter  | ZenSetter | タイプ                                  |
| ---------- | --------- | ------------------------------------ |
| `プレイヤー`    |           | [IPlayer](/Vanilla/Players/IPlayer/) |
| `isPlayer` |           | bool                                 |
| `経験`       | `経験`      | int                                  |
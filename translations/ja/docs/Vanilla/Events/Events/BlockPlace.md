
# BlockPlaceEvent

BlockBreak イベントは、ブロックが配置されるたびに発生します。 イベントをキャンセルすると、ブロックの設置を防ぐことができます。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.BlockPlaceEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
BlockPlace Eventsは以下のインターフェースを実装しており、それらのメソッド/getters/settersもすべて呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)


## ZenGetters
イベントから次の情報を取得できます。

| ZenGetter     | ZenSetter | タイプ                                         |
| ------------- | --------- | ------------------------------------------- |
| `プレイヤー`       |           | [IPlayer](/Vanilla/Players/IPlayer/)        |
| `現在`          |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `placedAgain` |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `手`           |           | 文字列型                                        |

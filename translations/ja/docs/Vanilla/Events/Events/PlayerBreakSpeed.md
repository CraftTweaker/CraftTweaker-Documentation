# PlayerBreakSpeed

PlayerBreakSpeedイベントは、プレイヤーがブロックを破壊しようとするたびに発生します。  
ブロックを壊すことができないようにキャンセルすることができます。

## イベントクラス

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerBreakSpeedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張

PlayerBreakSpeed Eventsは以下のインターフェイスを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetter/Setter

| ZenGetter  | ZenSetter | タイプ                                         |
| ---------- | --------- | ------------------------------------------- |
| blockState |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| ブロック       |           | [IBlock](/Vanilla/Blocks/IBlock/)           |
| オリジナルスピード  |           | float型                                      |
| newSpeed   | newSpeed  | float型                                      |
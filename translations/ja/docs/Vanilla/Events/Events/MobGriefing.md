# MobGriefing

このイベントは、潜在的なモブグリーフィングが発生しようとしているときに発生します。 **結果** があり、デフォルトの動作が発生するかどうかを決定します。

- **allow**: the greefing is allowed
- **deny**: グリーフィングを阻止する
- **デフォルト**: バニラロジックに従ってグリーフィングが発生します。

## イベントクラス
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MobGriefingEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## イベントインターフェースの拡張
MobGriefing Eventsは以下のインターフェースを実装し、すべてのメソッド/getters/settersを呼び出すことができます。

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)

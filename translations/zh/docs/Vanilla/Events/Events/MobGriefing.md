# MobGriefing

每当可能发生暴民悲痛时，就会发生这种事件。 它有 **个结果** 决定是否发生默认行为：

- **允许**: 悲痛是允许的
- **拒绝**: 防止悲痛。
- **默认**: 悲痛是根据Vanilla 逻辑发生的。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MobGriefingEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
MobGriefing Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)

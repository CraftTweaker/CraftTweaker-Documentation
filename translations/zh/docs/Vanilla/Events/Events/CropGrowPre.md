# CropGrowPreEvent

作物生长前活动在作物试图生长时被发起。 它有 **个结果** 决定是否发生默认行为：

- **允许**: 作物被迫生长。
- **拒绝**: 作物被阻止生长。
- **默认**: 攻击使用默认的原版行为。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CropGrowPreEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
CropGrowPost Events 实现了以下接口，并且能够调用他们所有的方法/getter/setter

- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| `原始方块状态`  |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| `原始块`     |           | [IBlock](/Vanilla/Blocks/IBlock/)           |

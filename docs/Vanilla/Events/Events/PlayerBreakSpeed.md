# 玩家破坏速度（PlayerBreakSpeed）

玩家破坏速度事件在玩家尝试破坏方块时触发。  
通过取消这个事件可以停止玩家破坏方块。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerBreakSpeedEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家破坏速度事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEventCancelable](IEventCancelable)
- [IPlayerEvent](IPlayerEvent)
- [IEventPositionable](IEventPositionable)

## ZenGetter/Setter

| ZenGetter     | ZenSetter | Type                                       |
|---------------|-----------|--------------------------------------------|
| blockState    |           | [IBlockState](/Vanilla/Blocks/IBlockState) |
| block         |           | [IBlock](/Vanilla/Blocks/IBlock)           |
| originalSpeed |           | float                                      |
| newSpeed      | newSpeed  | float                                      |

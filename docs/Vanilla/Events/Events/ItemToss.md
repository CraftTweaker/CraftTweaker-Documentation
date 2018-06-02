# 物品投掷（ItemToss）

物品投掷事件在物品从玩家物品栏投掷出去时触发。  
取消这个事件将导致物品无法被投掷，会直接删除。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.ItemTossEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
物品投掷事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEntityEvent](IEntityEvent)
- [IEventCancelable](IEventCancelable)

## ZenGetter/ZenSetter

| ZenGetter | Type                                         |
|-----------|----------------------------------------------|
| item      | [IEntityItem](/Vanilla/Entities/IEntityItem) |
| player    | [IPlayer](/Vanilla/Players/IPlayer)          |

# 物品过期（ItemExpire）

物品过期事件会在物品过期（也就是掉落物达到它的最大寿命时）触发。  
可以被取消，用来防止物品被标记为死亡。
如果取消了，将会添加 `extralife` 到物品的生命时间中。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.ItemExpireEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
PlayerDeathDrops 实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IEntityEvent](IEntityEvent)
- [IEventCancelable](IEventCancelable)

## ZenGetter/ZenSetter

| ZenGetter | ZenSetter | Type                                         |
|-----------|-----------|----------------------------------------------|
| item      |           | [IEntityItem](/Vanilla/Entities/IEntityItem) |
| extraLife | extraLife | int                                          |

# 有生命实体使用物品（LivingEntityUseItem）

有生命实体使用物品事件会在实体准备使用物品，停止使用，使用完毕，以及使用物品时的每一个ticks触发。  
由于这个调用太过频繁，它们的四个子事件只有在特殊情况下才会触发。

## 导入相关类
最好在使用前 [导入](/AdvancedFunctions/Import) 类来避免错误。   
```
//基础事件
import crafttweaker.event.EntityLivingUseItemEvent.All;

//特殊事件
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## 事件接口拓展
有生命实体使用物品事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [ILivingEvent](ILivingEvent)
- [IEventCancelable](IEventCancelable)


## ZenGetters/ZenSetters
在事件中可以获取/设置如下信息：

| ZenGetter  | 返回类型                             |
|------------|-----------------------------------------|
| `player`   | [IPlayer](/Vanilla/Players/IPlayer)     |
| `isPlayer` | bool                                    |
| `item`     | [IItemStack](/Vanilla/Items/IItemStack) |
| `duration` | int                                     |


| ZenSetter  | 参数类型                          |
|------------|-----------------------------------------|
| `duration` | int                                     |

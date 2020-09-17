# LivingEntityUseItem

每当一个实体开始使用物品时，即发射LivingEntityUseItem 事件， 在玩家使用一件物品完成并使用每个物品后，停止这么做。  
由于这种情况常常被调用，有4个子事件只在它们的具体情况下被调用。

## 导入类

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.

```zenscript
//Base Event
import crafttweaker.event.EntityLivingUseItemEvent.All;

//Specific Events
import crafttweaker.event.EntityLivingUseItemEvent.Start;
import crafttweaker.event.EntityLivingUseItemEvent.Tick;
import crafttweaker.event.EntityLivingUseItemEvent.Stop;
import crafttweaker.event.EntityLivingUseItemEvent.Finish;
```

## 事件界面扩展

LivingEntityUseItems 事件实现了以下接口，并且能够同时调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters

以下信息可以在事件中检索/设置：

| ZenGetter  | 返回值类型                                         |
| ---------- | --------------------------------------------- |
| `播放器`      | [IPlayer](/Vanilla/Players/IPlayer/)          |
| `isPlayer` | 布尔值                                           |
| `项目`       | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |
| `持续时间`     | 整数                                            |

| ZenSetter | 参数类型 |
| --------- | ---- |
| `持续时间`    | 整数   |
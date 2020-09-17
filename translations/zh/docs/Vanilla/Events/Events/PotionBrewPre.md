# 药水 BrewPre

这个事件是在香草酿造前直接发射的，如果 **取消了**，将防止酿酒发生。 如果取消，但是项目被修改，那么 [药水BrewPost事件](/Vanilla/Events/Events/PotionBrewPost/) 将被自动触发。 这允许模拟一下“moded”酿造。

**注意**: 当计时器达到“最大进度”时，这个事件就会被触发了。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PotionBrewPre Events 实现了以下接口，并且能够调用他们所有的方法/getter/setters：

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

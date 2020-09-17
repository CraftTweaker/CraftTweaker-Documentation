# 药水 BrewPosts

这个事件在药水被酿造台式瓦片实体“酿造”后立即发射，输出项已被替换。 如果 [药水 BrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) 已被取消，但酿造台内的物品堆栈已被修改，这个事件也会触发。

如果取消预事件而不修改项目堆栈，这个事件将 **不会被触发**。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PotionBrewPost 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)

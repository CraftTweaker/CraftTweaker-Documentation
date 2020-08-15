# EntityTravel To维度

每当一个实体即将前往另一个角落时，都会发起“实体旅行的维度”活动。 如果取消，实体无法旅行。

## 注

`event.degree` 包含实体将要前往的维度。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityTravelToDimensionEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
EntityTravel ToDimension 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | 返回值类型 |
| --------- | ----- |
| `尺寸`      | 整型    |

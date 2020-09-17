# 爆炸开始

爆炸开始事件是在爆炸开始前不久发射的。 如果取消，爆炸将不会发生。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.ExplosionStartEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
爆炸开始事件实现了以下接口，并且能够调用他们的所有方法/getter/setter：

- [IExplossion事件](/Vanilla/Events/Events/IExplosionEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

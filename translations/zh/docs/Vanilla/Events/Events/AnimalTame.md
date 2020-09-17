# AnimalTame

发射这个事件是为了确定一个动物是否会被拍摄。 如果取消， **tame无法成功**。 否则，它只不过是对正在进行的指责的一种通知。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
AnimalTame 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                                |
| --------- | --------- | ------------------------------------------------- |
| `动物数`     |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `动物数`     |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `播放器`     |           | [IPlayer](/Vanilla/Players/IPlayer/)              |

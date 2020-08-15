# AnimalTame

This event is fired to determine if an animal is going to be tamed. If canceled, **the tame does not succeed**. Otherwise, it simply serves as a notification of the tame taking place.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.AnimalTameEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
AnimalTame Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                                |
| --------- | --------- | ------------------------------------------------- |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `animal`  |           | [IEntityAnimal](/Vanilla/Entities/IEntityAnimal/) |
| `播放器`     |           | [IPlayer](/Vanilla/Players/IPlayer/)              |

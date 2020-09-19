# 玩家OpenContainer

当玩家打开容器时，玩家会触发PlayerOpenContainer事件。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerOpenContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerOpenContainer Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                        |
| --------- | -------------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)         |
| `容器`      | [IContainer](/Vanilla/Container/IContainer/) |
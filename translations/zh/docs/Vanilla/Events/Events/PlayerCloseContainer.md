# PlayerCloseContainer

当玩家关闭容器时，PlayerCloseContaineContainer事件将被开除。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerCloseContainer Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                        |
| --------- | -------------------------------------------- |
| `容器`      | [IContainer](/Vanilla/Container/IContainer/) |

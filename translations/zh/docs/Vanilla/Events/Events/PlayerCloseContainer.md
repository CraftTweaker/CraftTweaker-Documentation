# PlayerCloseContainer

The PlayerCloseContainer Event is fired whenever a player closes a container.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerCloseContainerEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerCloseContainer Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                        |
| --------- | -------------------------------------------- |
| `容器`      | [IContainer](/Vanilla/Container/IContainer/) |

# PlayerAdvancement

每当一名玩家被授予高级版时，玩家升级活动就会被发射。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAdvancementEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerAdvance事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型  |
| --------- | ------ |
| `id`      | string |

## Id

除了玩家事件所显示的功能外，您可以获得高级ID作为字符串。

这可以是一个像这样的字符串

```zenscript
“minecraft:story/mine_diamond”
```
# 玩家死亡掉落

每当玩家的物品因为死亡而落入地面时，玩家死亡事件就会被射击。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                                     |
| --------- | --------------------------------------------------------- |
| `播放器`     | [IPlayer](/Vanilla/Players/IPlayer/)                      |
| `项目`      | [`列表<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `破坏源`     | [IDamageSource](/Vanilla/Damage/IDamageSource/)           |

## 修改项目掉线

您可以添加到机器人列表或者完全用一个新的插件：

```zenscript
items = //reference to IEntityItem list.

///event.addItem(StemStack 项目);
event.additem(<minecraft:iron_ingot>);

/event.additem(IEntityitem iten);
event.additem(<minecraft:iron_ingot>.createEntityItityItem(event.player.world, event.player.position);
```
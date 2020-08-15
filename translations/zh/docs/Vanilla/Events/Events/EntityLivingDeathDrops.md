# EntityLivingDeathDrops

EntityLivingDeathDrops 事件是在一个实体的死亡原因下丢弃物品时发射的。  
可以取消它来阻止实体丢弃任何东西。

## 事件类

You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingDeathDropsEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展

PlayerDeathDrops Events 实现了以下接口，并且也能够调用他们的所有方法/getter/setter：

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

以下信息可以从事件中检索：

| ZenGetter | 返回值类型                                                     |
| --------- | --------------------------------------------------------- |
| `掉落数`     | [`列表<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `破坏源`     | [IDamageSource](/Vanilla/Damage/IDamageSource/)           |
| `近期命中`    | 布尔值                                                       |
| `抢掠级别`    | 整数                                                        |

## 修改项目掉线

您可以添加到机器人列表或者完全用一个新的插件：

```zenscript
drops = //reference to IEntityItem list.

///event.addItem(StemStack 项目);
event.additem(<minecraft:iron_ingot>);

/event.additem(IEntityitem iten);
event.additem(<minecraft:iron_ingot>.createEntityItityItem(event.player.world, event.player.position);
```
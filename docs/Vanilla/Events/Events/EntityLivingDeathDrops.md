# 有生命实体死亡掉落（EntityLivingDeathDrops）

有生命实体死亡掉落事件在实体死亡后，掉落物出现前触发。  
它可以被取消，用来阻止实体掉落任何物品。   

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.EntityLivingDeathDropsEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
有生命实体死亡掉落事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [ILivingEvent](ILivingEvent)
- [IEventCancelable](IEventCancelable)



## ZenGetters
从事件中可以获取如下信息：

|    ZenGetter    |                     Return Type                      |
| :-------------: | :--------------------------------------------------: |
|    `player`     |         [IPlayer](/Vanilla/Players/IPlayer)          |
|     `items`     | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem) |
| `damageSource`  |    [IDamageSource](/Vanilla/Damage/IDamageSource)    |
| `isRecentlyHit` |                         bool                         |
| `lootingLevel`  |                         int                          |

## 自定义掉落物品

你可以为掉落物添加物品，或者干脆复写它：
```js
event.items = //参考 实体物品列表

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```

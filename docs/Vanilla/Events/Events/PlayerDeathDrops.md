# 玩家死亡掉落（PlayerDeathDrops）

玩家死亡掉落事件在玩家死亡，物品掉落在地面时触发。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerDeathDropsEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
玩家死亡掉落事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IPlayerEvent](IPlayerEvent)


## ZenGetters
从事件中可以获取如下信息：

| ZenGetterZenGetter |                     Return Type                      |
| :----------------: | :--------------------------------------------------: |
|      `player`      |         [IPlayer](/Vanilla/Players/IPlayer)          |
|      `items`       | [`List<IEntityItem>`](/Vanilla/Entities/IEntityItem) |
|   `damageSource`   |    [IDamageSource](/Vanilla/Damage/IDamageSource)    |

## 修改物品掉落

你可以为掉落物添加物品，或者干脆复写它：
```js
event.items = //参考实体物品列表

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```

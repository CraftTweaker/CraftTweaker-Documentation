# 方块采掘掉落（BlockHarvestDropsEvent）

方块采掘掉落事件在方块马上就要变成掉落物时触发。  
你可以自行定义方块列表，以及设定所有的掉落几率。想要优先处理所以的几率，请设置为1。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.BlockHarvestDropsEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
方块采掘掉落事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [IBlockEvent](IBlockEvent)


## ZenGetters
从事件中可以获取如下信息：

|   ZenGetter    |  ZenSetter   |                      类型                      |
| :------------: | :----------: | :--------------------------------------------: |
|    `player`    |              |      [IPlayer](/Vanilla/Players/IPlayer)       |
|   `isPlayer`   |              |                      bool                      |
|  `silkTouch`   |              |                      bool                      |
| `fortuneLevel` |              |                      int                       |
|    `drops`     |   `drops`    | List<[IItemStack](/Vanilla/Items/IItemStack)\> |
|  `dropChance`  | `dropChance` |                     float                      |


## 向列表中添加一个物品
你可以通过如下两种写法添加物品：
```
event.drops += <minecraft:coal>;
event.addItem(<minecraft:coal>);
```

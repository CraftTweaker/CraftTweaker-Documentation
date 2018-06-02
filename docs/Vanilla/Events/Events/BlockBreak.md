# 方块破坏事件（BlockBreakEvent）

方块破坏事件在任意方块被破坏时触发。  
你可以通过取消该事件来阻止方块被破坏。

## 事件类
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.BlockBreakEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。

## 事件接口拓展
方块破坏事件实现了如下接口，能够使用如下所有的 methods，getters 和 setters：

- [事件取消](IEventCancelable)
- [方块事件](IBlockEvent)


## ZenGetters
从事件中国可以获取如下信息：

|  ZenGetter   |  ZenSetter   |               类型               |
| :----------: | :----------: | :------------------------------: |
|   `player`   |              | [玩家](/Vanilla/Players/IPlayer) |
|  `isPlayer`  |              |              布尔值              |
| `experience` | `experience` |               整型               |
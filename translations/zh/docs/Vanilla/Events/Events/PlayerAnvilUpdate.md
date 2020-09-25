# PlayerAnvilUpdate

PlayerAnvilUpdate事件是在玩家将物品放置在阳台左侧和右侧位置时触发的。
 * 如果事件被取消，原版行为将不会运行，输出将设置为空。
 * 如果事件未被取消，但输出不是空的，它将设置输出而不是运行原生行为.
 * 如果输出为 null，且事件未被取消，原版行为将被执行。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerAnvilUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerAnvilUpdate事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters & ZenSettters
以下信息可以从事件中检索：

| ZenGetter    | ZenSetter    | 类型                                       | 描述                               |
| ------------ | ------------ | ---------------------------------------- | -------------------------------- |
| `剩余物品`       |              | [IItemStack](/Vanilla/Items/IItemStack/) | 输入的左侧。                           |
| `右侧项`        |              | [IItemStack](/Vanilla/Items/IItemStack/) | 输入的右侧。                           |
| `outputItem` | `outputItem` | [IItemStack](/Vanilla/Items/IItemStack/) | 设置此项以设置输出堆栈。                     |
| `itemName`   |              | 字符串                                      | 如果用户指定了一个项目，则设置该项目的名称。           |
| `xp成本`       | `xp成本`       | 整数                                       | 如果输出为 null 则设置为更改基本成本!= null。    |
| `材料成本`       | `材料成本`       | 整数                                       | 修理过程中从右侧栏位消耗的物品数量。 留为 0 来消费整个堆栈。 |

## ZenMethods

- `event.cancel()` 将事件设置为取消。

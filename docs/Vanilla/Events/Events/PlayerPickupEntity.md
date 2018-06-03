# 玩家捡起实体（PlayerPickupEntity）

玩家捡起实体事件在玩家与一些实体交互时触发。

## Event Class
你需要在函数头进行一次事件的类型转换，转换成如下的事件类：
`crafttweaker.event.PlayerPickupEvent`  
当然，你可以采用更为简洁的 [导入](/AdvancedFunctions/Import) 方法，在文件开头导入相关语句，而后直接通过名称进行调用。


## ZenGetters
从事件中可以获取如下信息：

| ZenGetter   | Return Type                          |
|-------------|--------------------------------------|
| `canceled`  | boolean                              |
| `processed` | boolean                              |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer)  |
| `entity`    | [IEntity](/Vanilla/Entities/IEntity) |

## ZenMethods

- `event.cancel()` 设置事件为可取消的。
- `event.process()` 设置事件为可处理的。

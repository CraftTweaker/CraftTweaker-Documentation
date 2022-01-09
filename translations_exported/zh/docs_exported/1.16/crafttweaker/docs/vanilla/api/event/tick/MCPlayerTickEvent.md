# MCPlayerTickEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCPlayerTickEvent;
```


## Extending MCTickEvent

MCPlayerTickEvent extends [MCTickEvent](/vanilla/api/event/tick/MCTickEvent). That means all methods available in [MCTickEvent](/vanilla/api/event/tick/MCTickEvent) are also available in MCPlayerTickEvent

## 使用方式

:::group{name=getPlayer}

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
// MCPlayerTickEvent.getPlayer() as MCPlayerEntity

myMCPlayerTickEvent.getPlayer();
```

:::


## 参数

| 名称     | 类型                                                           | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------------------------------ | ---- | ----- | ----------------------- |
| player | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | true | false | No Description Provided |


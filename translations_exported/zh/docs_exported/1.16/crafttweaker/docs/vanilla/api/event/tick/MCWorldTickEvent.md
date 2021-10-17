# MCWorldTickEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.tick.MCWorldTickEvent;
```


## Extending MCTickEvent

MCWorldTickEvent extends [MCTickEvent](/vanilla/api/event/tick/MCTickEvent). That means all methods available in [MCTickEvent](/vanilla/api/event/tick/MCTickEvent) are also available in MCWorldTickEvent

## 使用方式

:::group{name=getWorld}

Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
// MCWorldTickEvent.getWorld() as MCWorld

myMCWorldTickEvent.getWorld();
```

:::


## 参数

| 名称    | 类型                                    | 可获得  | 可设置   | 描述                      |
| ----- | ------------------------------------- | ---- | ----- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | true | false | No Description Provided |


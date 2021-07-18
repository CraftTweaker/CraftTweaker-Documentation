# MCLivingSpawnEvent

The event is not cancelable.

The event does not have a result.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingSpawnEvent;
```


## Extending MCLivingEvent

MCLivingSpawnEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingSpawnEvent

## 参数

| 名称    | 类型                                    | 可获得  | 可设置   |
| ----- | ------------------------------------- | ---- | ----- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | true | false |
| x     | double                                | true | false |
| y     | double                                | true | false |
| z     | double                                | true | false |


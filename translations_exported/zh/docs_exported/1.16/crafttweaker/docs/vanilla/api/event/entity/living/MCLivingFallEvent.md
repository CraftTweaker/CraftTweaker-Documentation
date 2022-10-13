# MCLivingFallEvent



The event is cancelable.

If the event is canceled, the Entity does not fall (no fall damage is inflicted).

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingFallEvent;
```


## Extending MCLivingEvent

MCLivingFallEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingFallEvent

## 参数

| 名称               | 类型    | 可获得  | 可设置  | 描述                      |
| ---------------- | ----- | ---- | ---- | ----------------------- |
| damageMultiplier | float | true | true | No Description Provided |
| distance         | float | true | true | No Description Provided |


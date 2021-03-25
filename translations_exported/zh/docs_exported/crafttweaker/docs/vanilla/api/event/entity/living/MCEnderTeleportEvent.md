# MCEnderTeleportEvent

Event for when an Enderman/Shulker teleports or an ender pearl is used.

The event is cancelable.

If the event is canceled, the ender teleport won't happen.

The event does not have a result.



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCEnderTeleportEvent;
```


## Extending MCLivingEvent

MCEnderTeleportEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCEnderTeleportEvent

## 参数

| 名称           | 类型     | 可获得  | 可设置  |
| ------------ | ------ | ---- | ---- |
| attackDamage | float  | true | true |
| targetX      | double | true | true |
| targetY      | double | true | true |
| targetZ      | double | true | true |


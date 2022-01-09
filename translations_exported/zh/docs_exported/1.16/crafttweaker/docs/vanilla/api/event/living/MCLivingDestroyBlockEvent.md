# MCLivingDestroyBlockEvent



The event is cancelable.

If the event is canceled, the block will not be destroyed.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDestroyBlockEvent;
```


## Extending MCLivingEvent

MCLivingDestroyBlockEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDestroyBlockEvent

## 参数

| 名称    | 类型                                                      | 可获得  | 可设置   | 描述                      |
| ----- | ------------------------------------------------------- | ---- | ----- | ----------------------- |
| 点     | [BlockPos](/vanilla/api/util/BlockPos)                  | true | false | No Description Provided |
| state | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | true | false | No Description Provided |


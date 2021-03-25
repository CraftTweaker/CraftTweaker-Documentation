# LivingDestroyBlockEvent



The event is cancelable.

If the event is canceled, the block will not be destroyed.

The event does not have a result.



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingDestroyBlockEvent;
```


## Extending MCLivingEvent

LivingDestroyBlockEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in LivingDestroyBlockEvent

## 参数

| 名称    | 类型                                                       | 可获得  | 可设置   |
| ----- | -------------------------------------------------------- | ---- | ----- |
| 点     | [BlockPos](/vanilla/api/util/BlockPos)                   | true | false |
| state | [MCBlockState #MC方块状态](/vanilla/api/blocks/MCBlockState) | true | false |


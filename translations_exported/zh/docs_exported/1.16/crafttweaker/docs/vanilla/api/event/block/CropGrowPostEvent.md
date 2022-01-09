# MCCropGrowPostEvent



The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCCropGrowPostEvent;
```


## Extending MCCropGrowEvent

MCCropGrowPostEvent extends [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent). That means all methods available in [MCCropGrowEvent](/vanilla/api/event/block/MCCropGrowEvent) are also available in MCCropGrowPostEvent

## 使用方式

:::group{name=getOriginState}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCCropGrowPostEvent.getOriginState() as MCBlockState

myMCCropGrowPostEvent.getOriginState();
```

:::


## 参数

| 名称          | 类型                                                      | 可获得  | 可设置   | 描述                      |
| ----------- | ------------------------------------------------------- | ---- | ----- | ----------------------- |
| originState | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | true | false | No Description Provided |


# CropGrowPostEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.crop.CropGrowPostEvent;
```


## Extending CropGrowEvent

CropGrowPostEvent extends [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent). That means all methods available in [CropGrowEvent](/forge/api/event/block/crop/CropGrowEvent) are also available in CropGrowPostEvent

## 使用方式

:::group{name=getOriginState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// CropGrowPostEvent.getOriginState() as BlockState

myCropGrowPostEvent.getOriginState();
```

:::


## 参数

| 名称          | 类型                                          | 可获得  | 可设置   | 描述                      |
| ----------- | ------------------------------------------- | ---- | ----- | ----------------------- |
| originState | [BlockState](/vanilla/api/block/BlockState) | true | false | No Description Provided |


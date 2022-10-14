# BlockEvent

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockEvent;
```


## Extending Event

BlockEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in BlockEvent

## 使用方式

:::group{name=getBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockEvent.getBlockState() as BlockState

myBlockEvent.getBlockState();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockEvent.getPos() as BlockPos

myBlockEvent.getPos();
```

:::

:::group{name=getWorld}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// BlockEvent.getWorld() as Level

myBlockEvent.getWorld();
```

:::


## 参数

| 名称    | 类型                                          | 可获得  | 可设置   |
| ----- | ------------------------------------------- | ---- | ----- |
| 点     | [BlockPos](/vanilla/api/util/math/BlockPos) | true | false |
| state | [BlockState](/vanilla/api/block/BlockState) | true | false |
| world | [Level](/vanilla/api/world/Level)           | true | false |


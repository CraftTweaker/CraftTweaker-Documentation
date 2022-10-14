# BlockPlaceEvent



The event is cancelable.

If the event is canceled, the block will not be placed

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockPlaceEvent;
```


## Extending BlockEvent

BlockPlaceEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockPlaceEvent

## 使用方式

:::group{name=getEntity}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// BlockPlaceEvent.getEntity() as Entity

myBlockPlaceEvent.getEntity();
```

:::

:::group{name=getPlacedAgainst}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getPlacedAgainst() as BlockState

myBlockPlaceEvent.getPlacedAgainst();
```

:::

:::group{name=getPlacedBlock}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getPlacedBlock() as BlockState

myBlockPlaceEvent.getPlacedBlock();
```

:::

:::group{name=getReplacedBlock}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockPlaceEvent.getReplacedBlock() as BlockState

myBlockPlaceEvent.getReplacedBlock();
```

:::


## 参数

| 名称            | 类型                                          | 可获得  | 可设置   |
| ------------- | ------------------------------------------- | ---- | ----- |
| entity        | [Entity](/vanilla/api/entity/Entity)        | true | false |
| placedAgainst | [BlockState](/vanilla/api/block/BlockState) | true | false |
| placedBlock   | [BlockState](/vanilla/api/block/BlockState) | true | false |
| replacedBlock | [BlockState](/vanilla/api/block/BlockState) | true | false |


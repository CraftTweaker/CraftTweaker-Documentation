# BlockBreakEvent



The event is cancelable.

If the event is canceled, prevents the block from being broken.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockBreakEvent;
```


## Extending BlockEvent

BlockBreakEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockBreakEvent

## 使用方式

:::group{name=getExpToDrop}

Return Type: int

```zenscript
// BlockBreakEvent.getExpToDrop() as int

myBlockBreakEvent.getExpToDrop();
```

:::

:::group{name=getPlayer}

Gets the player who broke the block. If no player is available, use a fake player

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// BlockBreakEvent.getPlayer() as Player

myBlockBreakEvent.getPlayer();
```

:::

:::group{name=setExpToDrop}

Return Type: void

```zenscript
BlockBreakEvent.setExpToDrop(amount as int) as void
```

| 参数     | 类型  | 描述                      |
| ------ | --- | ----------------------- |
| amount | int | No Description Provided |


:::


## 参数

| 名称        | 类型                                               | 可获得  | 可设置   | 描述                                                                                |
| --------- | ------------------------------------------------ | ---- | ----- | --------------------------------------------------------------------------------- |
| expToDrop | int                                              | true | true  | No Description Provided                                                           |
| player    | [Player](/vanilla/api/entity/type/player/Player) | true | false | Gets the player who broke the block. If no player is available, use a fake player |


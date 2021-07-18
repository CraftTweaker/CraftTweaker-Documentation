# MCBlockToolInteractEvent

Fired when when this block is right clicked by a tool to change its state. For example: Used to determine if an axe can strip a log, a shovel can turn grass into a path, or a hoe can till dirt into farmland.

The event is not cancelable.

The event does not have a result.



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockToolInteractEvent;
```


## Extending MCBlockEvent

MCBlockToolInteractEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockToolInteractEvent

## 方法

### getFinalState

Gets the transformed state after tool use. If setFinalState is not called, it will return the original state. This will be bypassed if canceled, returning null instead.

Return Type: [MCBlockState](/vanilla/api/blocks/MCBlockState)?

```zenscript
MCBlockToolInteractEvent.getFinalState() as MCBlockState?
myMCBlockToolInteractEvent.getFinalState();
```

### getHeldItemStack

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCBlockToolInteractEvent.getHeldItemStack() as IItemStack
myMCBlockToolInteractEvent.getHeldItemStack();
```

### getPlayer

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCBlockToolInteractEvent.getPlayer() as MCPlayerEntity
myMCBlockToolInteractEvent.getPlayer();
```

### getToolType

Return Type: string

```zenscript
MCBlockToolInteractEvent.getToolType() as string
myMCBlockToolInteractEvent.getToolType();
```

### setFinalState

Sets the transformed state after tool use. If not set, will return the original state. This will be bypassed if canceled, returning null instead.

Return Type: void

```zenscript
MCBlockToolInteractEvent.setFinalState(state as MCBlockState) as void
```

| 参数    | 类型                                                       | 描述                      |
| ----- | -------------------------------------------------------- | ----------------------- |
| state | [MCBlockState #MC方块状态](/vanilla/api/blocks/MCBlockState) | No Description Provided |



## 参数

| 名称            | 类型                                                           | 可获得  | 可设置   |
| ------------- | ------------------------------------------------------------ | ---- | ----- |
| finalState    | [MCBlockState](/vanilla/api/blocks/MCBlockState)?            | true | true  |
| heldItemStack | [IItemStack](/vanilla/api/items/IItemStack)                  | true | false |
| player        | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | true | false |
| toolType      | string                                                       | true | false |


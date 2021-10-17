# FluidPlaceBlockEvent

Fired when a fluid places a block. This can happen on one of two scenarios: 1) When fluids touch each other, spawning a block (When Lava and Water touch they create Cobblestone). 2) When Lava spawns fire around it.

 You can use this event to change what block is set, so you could replace cobblestone with something else.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.FluidPlaceBlockEvent;
```


## Extending MCBlockEvent

FluidPlaceBlockEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in FluidPlaceBlockEvent

## 使用方式

:::group{name=getFluidPos}

Gets the position of the Fluid that fired this event.

Returns: The position of the Fluid.  
Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// FluidPlaceBlockEvent.getFluidPos() as BlockPos

myFluidPlaceBlockEvent.getFluidPos();
```

:::

:::group{name=getNewState}

Gets the new BlockState that will be placed.

Returns: The new BlockState that will be placed.  
Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// FluidPlaceBlockEvent.getNewState() as MCBlockState

myFluidPlaceBlockEvent.getNewState();
```

:::

:::group{name=getOriginalState}

Gets the original BlockState that would have been placed before the event fired.

Returns: The original BlockState that would have been placed.  
Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// FluidPlaceBlockEvent.getOriginalState() as MCBlockState

myFluidPlaceBlockEvent.getOriginalState();
```

:::

:::group{name=setNewState}

Sets the new BlockState that will be placed.

Return Type: void

```zenscript
// FluidPlaceBlockEvent.setNewState(state as MCBlockState) as void

myFluidPlaceBlockEvent.setNewState(<blockstate:minecraft:dirt>);
```

| 参数    | 类型                                                      | 描述                  |
| ----- | ------------------------------------------------------- | ------------------- |
| state | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | The new BlockState. |


:::


## 参数

| 名称            | 类型                                                      | 可获得  | 可设置   | 描述                                                                               |
| ------------- | ------------------------------------------------------- | ---- | ----- | -------------------------------------------------------------------------------- |
| fluidPos      | [BlockPos](/vanilla/api/util/BlockPos)                  | true | false | Gets the position of the Fluid that fired this event.                            |
| newState      | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | true | true  | Gets the new BlockState that will be placed.                                     |
| originalState | [MCBlockState #MC方块状态](/vanilla/api/block/MCBlockState) | true | false | Gets the original BlockState that would have been placed before the event fired. |


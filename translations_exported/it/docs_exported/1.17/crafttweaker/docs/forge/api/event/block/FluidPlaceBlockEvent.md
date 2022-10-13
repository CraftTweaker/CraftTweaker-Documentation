# FluidPlaceBlockEvent

Fired when a fluid places a block. This can happen on one of two scenarios: 1) When fluids touch each other, spawning a block (When Lava and Water touch they create Cobblestone). 2) When Lava spawns fire around it.

 You can use this event to change what block is set, so you could replace cobblestone with something else.

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.FluidPlaceBlockEvent;
```


## Extending BlockEvent

FluidPlaceBlockEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in FluidPlaceBlockEvent

## Metodi

:::group{name=getFluidPos}

Gets the position of the Fluid that fired this event.

Returns: The position of the Fluid.  
Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// FluidPlaceBlockEvent.getFluidPos() as BlockPos

myFluidPlaceBlockEvent.getFluidPos();
```

:::

:::group{name=getNewState}

Gets the new BlockState that will be placed.

Returns: The new BlockState that will be placed.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// FluidPlaceBlockEvent.getNewState() as BlockState

myFluidPlaceBlockEvent.getNewState();
```

:::

:::group{name=getOriginalState}

Gets the original BlockState that would have been placed before the event fired.

Returns: The original BlockState that would have been placed.  
Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// FluidPlaceBlockEvent.getOriginalState() as BlockState

myFluidPlaceBlockEvent.getOriginalState();
```

:::

:::group{name=setNewState}

Sets the new BlockState that will be placed.

Return Type: void

```zenscript
// FluidPlaceBlockEvent.setNewState(state as BlockState) as void

myFluidPlaceBlockEvent.setNewState(<blockstate:minecraft:dirt>);
```

| Parametro | Tipo                                        | Descrizione         |
| --------- | ------------------------------------------- | ------------------- |
| state     | [BlockState](/vanilla/api/block/BlockState) | The new BlockState. |


:::


## Proprietà

| Nome          | Tipo                                        | Ha Getter | Ha Setter | Descrizione                                                                      |
| ------------- | ------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------- |
| fluidPos      | [BlockPos](/vanilla/api/util/math/BlockPos) | sì        | no        | Gets the position of the Fluid that fired this event.                            |
| newState      | [BlockState](/vanilla/api/block/BlockState) | sì        | sì        | Gets the new BlockState that will be placed.                                     |
| originalState | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | Gets the original BlockState that would have been placed before the event fired. |


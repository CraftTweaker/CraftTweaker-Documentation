# BlockToolModificationEvent

Fired when this block is interacted with by a tool to change its state.
 For example: Used to determine if an axe can strip a log, a shovel can turn grass into a path, or a hoe can till dirt into farmland.

The event is cancelable.

If the event is canceled, this will prevent the tool from changing the block's state.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.BlockToolModificationEvent;
```


## Extending BlockEvent

BlockToolModificationEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in BlockToolModificationEvent

## Methods

:::group{name=getFinalState}

Gets the transformed state after tool use.
 If setFinalState is not called, it will return the original state.
 This will be bypassed if canceled, returning null instead.

Return Type: [BlockState](/vanilla/api/block/BlockState)?

```zenscript
// BlockToolModificationEvent.getFinalState() as BlockState?

myBlockToolModificationEvent.getFinalState();
```

:::

:::group{name=getHeldItemStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// BlockToolModificationEvent.getHeldItemStack() as IItemStack

myBlockToolModificationEvent.getHeldItemStack();
```

:::

:::group{name=getPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// BlockToolModificationEvent.getPlayer() as Player

myBlockToolModificationEvent.getPlayer();
```

:::

:::group{name=getToolType}

Return Type: [ToolAction](/forge/api/tool/ToolAction)

```zenscript
// BlockToolModificationEvent.getToolType() as ToolAction

myBlockToolModificationEvent.getToolType();
```

:::

:::group{name=setFinalState}

Sets the transformed state after tool use.
 If not set, will return the original state.
 This will be bypassed if canceled, returning null instead.

```zenscript
BlockToolModificationEvent.setFinalState(state as BlockState)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::


## Properties

|     Name      |                       Type                       | Has Getter | Has Setter |                                                                                       Description                                                                                        |
|---------------|--------------------------------------------------|------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| finalState    | [BlockState](/vanilla/api/block/BlockState)?     | true       | true       | Gets the transformed state after tool use. <br />  If setFinalState is not called, it will return the original state. <br />  This will be bypassed if canceled, returning null instead. |
| heldItemStack | [IItemStack](/vanilla/api/item/IItemStack)       | true       | false      |                                                                                                                                                                                          |
| player        | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |                                                                                                                                                                                          |
| toolAction    | [ToolAction](/forge/api/tool/ToolAction)         | true       | false      |                                                                                                                                                                                          |


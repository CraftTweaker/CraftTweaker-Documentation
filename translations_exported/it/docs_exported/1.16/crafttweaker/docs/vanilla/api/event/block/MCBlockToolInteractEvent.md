# MCBlockToolInteractEvent

Fired when when this block is right clicked by a tool to change its state. For example: Used to determine if an axe can strip a log, a shovel can turn grass into a path, or a hoe can till dirt into farmland.

The event is cancelable.

If the event is canceled, this will prevent the tool from changing the block's state.

The event does not have a result.



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockToolInteractEvent;
```


## Extending MCBlockEvent

MCBlockToolInteractEvent extends [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent). That means all methods available in [MCBlockEvent](/vanilla/api/event/block/MCBlockEvent) are also available in MCBlockToolInteractEvent

## Metodi

:::group{name=getFinalState}

Gets the transformed state after tool use. If setFinalState is not called, it will return the original state. This will be bypassed if canceled, returning null instead.

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)?

```zenscript
// MCBlockToolInteractEvent.getFinalState() as MCBlockState?

myMCBlockToolInteractEvent.getFinalState();
```

:::

:::group{name=getHeldItemStack}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCBlockToolInteractEvent.getHeldItemStack() as IItemStack

myMCBlockToolInteractEvent.getHeldItemStack();
```

:::

:::group{name=getPlayer}

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
// MCBlockToolInteractEvent.getPlayer() as MCPlayerEntity

myMCBlockToolInteractEvent.getPlayer();
```

:::

:::group{name=getToolType}

Return Type: [ToolType](/vanilla/api/tool/ToolType)

```zenscript
// MCBlockToolInteractEvent.getToolType() as ToolType

myMCBlockToolInteractEvent.getToolType();
```

:::

:::group{name=setFinalState}

Sets the transformed state after tool use. If not set, will return the original state. This will be bypassed if canceled, returning null instead.

Return Type: void

```zenscript
MCBlockToolInteractEvent.setFinalState(state as MCBlockState) as void
```

| Parametro | Tipo                                            | Descrizione             |
| --------- | ----------------------------------------------- | ----------------------- |
| state     | [MCBlockState](/vanilla/api/block/MCBlockState) | No Description Provided |


:::


## Proprietà

| Nome          | Tipo                                                 | Ha Getter | Ha Setter | Descrizione                                                                                                                                                                                          |
| ------------- | ---------------------------------------------------- | --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| finalState    | [MCBlockState](/vanilla/api/block/MCBlockState)?     | sì        | sì        | Gets the transformed state after tool use. <br />  If setFinalState is not called, it will return the original state. <br />  This will be bypassed if canceled, returning null instead. |
| heldItemStack | [IItemStack](/vanilla/api/items/IItemStack)          | sì        | no        | No Description Provided                                                                                                                                                                              |
| player        | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity) | sì        | no        | No Description Provided                                                                                                                                                                              |
| toolType      | [ToolType](/vanilla/api/tool/ToolType)               | sì        | no        | No Description Provided                                                                                                                                                                              |


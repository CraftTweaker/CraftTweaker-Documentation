# MCBlockEvent

The event is not cancelable.

The event does not have a result.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.MCBlockEvent;
```


## Extending MCEvent

MCBlockEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCBlockEvent

## Metodi

:::group{name=getBlockState}

Return Type: [MCBlockState](/vanilla/api/block/MCBlockState)

```zenscript
// MCBlockEvent.getBlockState() as MCBlockState

myMCBlockEvent.getBlockState();
```

:::

:::group{name=getPos}

Return Type: [BlockPos](/vanilla/api/util/BlockPos)

```zenscript
// MCBlockEvent.getPos() as BlockPos

myMCBlockEvent.getPos();
```

:::

:::group{name=getWorld}

Return Type: [MCWorld](/vanilla/api/world/MCWorld)

```zenscript
// MCBlockEvent.getWorld() as MCWorld

myMCBlockEvent.getWorld();
```

:::


## Proprietà

| Nome  | Tipo                                            | Ha Getter | Ha Setter | Descrizione             |
| ----- | ----------------------------------------------- | --------- | --------- | ----------------------- |
| pos   | [BlockPos](/vanilla/api/util/BlockPos)          | sì        | no        | No Description Provided |
| state | [MCBlockState](/vanilla/api/block/MCBlockState) | sì        | no        | No Description Provided |
| world | [MCWorld](/vanilla/api/world/MCWorld)           | sì        | no        | No Description Provided |


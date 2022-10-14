# BlockEntity

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BlockEntity;
```


## Metodi

:::group{name=getBlockPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// BlockEntity.getBlockPos() as BlockPos

myBlockEntity.getBlockPos();
```

:::

:::group{name=getBlockState}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
// BlockEntity.getBlockState() as BlockState

myBlockEntity.getBlockState();
```

:::

:::group{name=getLevel}

Return Type: [Level](/vanilla/api/world/Level)

```zenscript
// BlockEntity.getLevel() as Level

myBlockEntity.getLevel();
```

:::

:::group{name=hasLevel}

Return Type: boolean

```zenscript
// BlockEntity.hasLevel() as boolean

myBlockEntity.hasLevel();
```

:::

:::group{name=updateData}

Return Type: void

```zenscript
BlockEntity.updateData(data as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Proprietà

| Nome       | Tipo                                        | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------- | --------- | --------- | ----------------------- |
| blockPos   | [BlockPos](/vanilla/api/util/math/BlockPos) | sì        | no        | No Description Provided |
| blockState | [BlockState](/vanilla/api/block/BlockState) | sì        | no        | No Description Provided |
| data       | [MapData](/vanilla/api/data/MapData)        | sì        | no        | No Description Provided |
| hasLevel   | boolean                                     | sì        | no        | No Description Provided |
| level      | [Level](/vanilla/api/world/Level)           | sì        | no        | No Description Provided |


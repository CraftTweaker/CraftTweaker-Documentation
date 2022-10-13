# MCTileEntity

Represents a block entity.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tileentity.MCTileEntity;
```


## Metodi

:::group{name=updateData}

Return Type: void

```zenscript
MCTileEntity.updateData(data as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Proprietà

| Nome  | Tipo                                   | Ha Getter | Ha Setter | Descrizione             |
| ----- | -------------------------------------- | --------- | --------- | ----------------------- |
| data  | [MapData](/vanilla/api/data/MapData)   | sì        | no        | No Description Provided |
| pos   | [BlockPos](/vanilla/api/util/BlockPos) | sì        | no        | No Description Provided |
| world | [MCWorld](/vanilla/api/world/MCWorld)  | sì        | no        | No Description Provided |


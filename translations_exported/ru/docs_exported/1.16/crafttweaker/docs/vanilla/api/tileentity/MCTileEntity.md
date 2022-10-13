# MCTileEntity

Represents a block entity.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tileentity.MCTileEntity;
```


## Методы

:::group{name=updateData}

Return Type: void

```zenscript
MCTileEntity.updateData(data as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| data     | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Свойства

| Название | Тип                                    | Имеет Getter | Имеет Setter | Описание                |
| -------- | -------------------------------------- | ------------ | ------------ | ----------------------- |
| data     | [MapData](/vanilla/api/data/MapData)   | true         | false        | No Description Provided |
| pos      | [BlockPos](/vanilla/api/util/BlockPos) | true         | false        | No Description Provided |
| world    | [MCWorld](/vanilla/api/world/MCWorld)  | true         | false        | No Description Provided |


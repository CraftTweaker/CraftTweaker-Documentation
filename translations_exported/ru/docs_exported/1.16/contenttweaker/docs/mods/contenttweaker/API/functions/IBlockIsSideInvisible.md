# IBlockIsSideInvisible

This class was added by a mod with mod-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockIsSideInvisible;
```


## Static Properties

| Название   | Тип                                                                               | Имеет Getter | Имеет Setter | Описание                |
| ---------- | --------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| GLASS_LIKE | [IBlockIsSideInvisible](/mods/contenttweaker/API/functions/IBlockIsSideInvisible) | true         | false        | No Description Provided |

## Методы

:::group{name=apply}

Return Type: boolean

```zenscript
IBlockIsSideInvisible.apply(thisBlock as CoTBlockAdvanced, state as MCBlockState, adjacentBlockState as MCBlockState, side as Direction) as boolean
```

| Параметр           | Тип                                                                         | Описание                |
| ------------------ | --------------------------------------------------------------------------- | ----------------------- |
| thisBlock          | [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced) | No Description Provided |
| state              | [MCBlockState](/vanilla/api/block/MCBlockState)                             | No Description Provided |
| adjacentBlockState | [MCBlockState](/vanilla/api/block/MCBlockState)                             | No Description Provided |
| side               | [Direction](/vanilla/api/util/Direction)                                    | No Description Provided |


:::



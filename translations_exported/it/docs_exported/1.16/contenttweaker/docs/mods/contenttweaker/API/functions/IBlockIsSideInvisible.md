# IBlockIsSideInvisible

This class was added by a mod with mod-id `contenttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IBlockIsSideInvisible;
```


## Static Properties

| Nome       | Tipo                                                                              | Ha Getter | Ha Setter | Descrizione             |
| ---------- | --------------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| GLASS_LIKE | [IBlockIsSideInvisible](/mods/contenttweaker/API/functions/IBlockIsSideInvisible) | sì        | no        | No Description Provided |

## Metodi

:::group{name=apply}

Return Type: boolean

```zenscript
IBlockIsSideInvisible.apply(thisBlock as CoTBlockAdvanced, state as MCBlockState, adjacentBlockState as MCBlockState, side as Direction) as boolean
```

| Parametro          | Tipo                                                                        | Descrizione             |
| ------------------ | --------------------------------------------------------------------------- | ----------------------- |
| thisBlock          | [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced) | No Description Provided |
| state              | [MCBlockState](/vanilla/api/block/MCBlockState)                             | No Description Provided |
| adjacentBlockState | [MCBlockState](/vanilla/api/block/MCBlockState)                             | No Description Provided |
| side               | [Direction](/vanilla/api/util/Direction)                                    | No Description Provided |


:::



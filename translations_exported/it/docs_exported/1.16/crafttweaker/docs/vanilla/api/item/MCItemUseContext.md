# MCItemUseContext

A class to handle some data when using item.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemUseContext;
```


## Proprietà

| Nome                      | Tipo                                                  | Ha Getter | Ha Setter | Descrizione             |
| ------------------------- | ----------------------------------------------------- | --------- | --------- | ----------------------- |
| direction                 | [Direction](/vanilla/api/util/Direction)              | sì        | no        | No Description Provided |
| hand                      | [MCHand](/vanilla/api/util/MCHand)                    | sì        | no        | No Description Provided |
| hasSecondaryUseForPlayer  | boolean                                               | sì        | no        | No Description Provided |
| hitVector                 | [MCVector3d](/vanilla/api/util/MCVector3d)            | sì        | no        | No Description Provided |
| placementHorizontalFacing | [Direction](/vanilla/api/util/Direction)              | sì        | no        |                         |
| player                    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | sì        | no        | No Description Provided |
| pos                       | [BlockPos](/vanilla/api/util/BlockPos)                | sì        | no        | No Description Provided |
| world                     | [MCWorld](/vanilla/api/world/MCWorld)                 | sì        | no        | No Description Provided |


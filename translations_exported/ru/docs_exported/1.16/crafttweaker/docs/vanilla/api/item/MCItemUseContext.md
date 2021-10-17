# MCItemUseContext

A class to handle some data when using item.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemUseContext;
```


## Свойства

| Название                  | Тип                                                   | Имеет Getter | Имеет Setter | Описание                |
| ------------------------- | ----------------------------------------------------- | ------------ | ------------ | ----------------------- |
| direction                 | [Direction](/vanilla/api/util/Direction)              | true         | false        | No Description Provided |
| hand                      | [MCHand](/vanilla/api/util/MCHand)                    | true         | false        | No Description Provided |
| hasSecondaryUseForPlayer  | boolean                                               | true         | false        | No Description Provided |
| hitVector                 | [MCVector3d](/vanilla/api/util/MCVector3d)            | true         | false        | No Description Provided |
| placementHorizontalFacing | [Direction](/vanilla/api/util/Direction)              | true         | false        |                         |
| player                    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true         | false        | No Description Provided |
| pos                       | [BlockPos](/vanilla/api/util/BlockPos)                | true         | false        | No Description Provided |
| world                     | [MCWorld](/vanilla/api/world/MCWorld)                 | true         | false        | No Description Provided |


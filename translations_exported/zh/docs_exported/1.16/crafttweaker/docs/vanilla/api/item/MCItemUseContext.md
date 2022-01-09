# MCItemUseContext

A class to handle some data when using item.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemUseContext;
```


## 参数

| 名称                        | 类型                                                    | 可获得  | 可设置   | 描述                      |
| ------------------------- | ----------------------------------------------------- | ---- | ----- | ----------------------- |
| direction                 | [Direction](/vanilla/api/util/Direction)              | true | false | No Description Provided |
| hand                      | [MCHand](/vanilla/api/util/MCHand)                    | true | false | No Description Provided |
| hasSecondaryUseForPlayer  | 布尔值                                                   | true | false | No Description Provided |
| hitVector                 | [MCVector3d](/vanilla/api/util/MCVector3d)            | true | false | No Description Provided |
| placementHorizontalFacing | [Direction](/vanilla/api/util/Direction)              | true | false |                         |
| player                    | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true | false | No Description Provided |
| 点                         | [BlockPos](/vanilla/api/util/BlockPos)                | true | false | No Description Provided |
| world                     | [MCWorld](/vanilla/api/world/MCWorld)                 | true | false | No Description Provided |


# IItemInteractWithEntity

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemInteractWithEntity;
```


## 方法

:::group{name=apply}

Return Type: [ActionResultType](/vanilla/api/util/ActionResultType)

```zenscript
IItemInteractWithEntity.apply(stack as MCItemStackMutable, player as MCPlayerEntity, target as MCLivingEntity, hand as MCHand) as ActionResultType
```

| 参数     | 类型                                                           | 描述                      |
| ------ | ------------------------------------------------------------ | ----------------------- |
| stack  | [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable)  | No Description Provided |
| player | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | No Description Provided |
| target | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)         | No Description Provided |
| hand   | [MCHand](/vanilla/api/util/MCHand)                           | No Description Provided |


:::



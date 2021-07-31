# MCItemEntity

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCItemEntity;
```


## Extending MCEntity

MCItemEntity extends [MCEntity](/vanilla/api/entity/MCEntity). That means all methods available in [MCEntity](/vanilla/api/entity/MCEntity) are also available in MCItemEntity

## Constructor #构造函数


```zenscript
new MCItemEntity(world as MCWorld, x as double, y as double, z as double, stack as ItemStack) as MCItemEntity
```

| 参数    | 类型                                    | 描述                      |
| ----- | ------------------------------------- | ----------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | No description provided |
| x     | double                                | No description provided |
| y     | double                                | No description provided |
| z     | double                                | No description provided |
| stack | [物品应用](/vanilla/api/item/ItemStack)   | No description provided |



## 参数

| 名称   | 类型                                          | 可获得  | 可设置  |
| ---- | ------------------------------------------- | ---- | ---- |
| item | [IItemStack](/vanilla/api/items/IItemStack) | true | true |


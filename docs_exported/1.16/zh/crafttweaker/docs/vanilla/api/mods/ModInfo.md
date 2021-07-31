# ModInfo

保存已加载模组的信息

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.ModInfo;
```


## 参数

| 名称          | 类型                                                                                | 可获得  | 可设置   |
| ----------- | --------------------------------------------------------------------------------- | ---- | ----- |
| blocks      | stdlib.List&lt;[MCBlock](/vanilla/api/blocks/MCBlock)&gt;             | true | false |
| displayName | string                                                                            | true | false |
| 实体类型        | stdlib.List&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| fluids      | stdlib.List&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;              | true | false |
| items       | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;        | true | false |
| modid       | string                                                                            | true | false |
| 命名空间        | string                                                                            | true | false |
| version     | string                                                                            | true | false |


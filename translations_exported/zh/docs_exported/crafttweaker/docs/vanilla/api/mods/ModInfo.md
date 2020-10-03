# ModInfo

保存已加载模组的信息

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作工具.api.mods.ModInfo
```

## 参数

| 名称          | 类型                                                                                               | 可获得  | 可设置   |
| ----------- | ------------------------------------------------------------------------------------------------ | ---- | ----- |
| blocks      | 列表&lt;[craftmiliter.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true | false |
| displayName | String                                                                                           | true | false |
| 实体类型        | 列表&lt;[craftmiliter.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| fluids      | 邮件列表&lt;[craftminstrer.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)&gt;            | true | false |
| items       | 列表&lt;[craftmiliter.api.IItemStack](/vanilla/api/items/IItemStack)&gt;               | true | false |
| modid       | String                                                                                           | true | false |
| 命名空间        | String                                                                                           | true | false |
| version     | String                                                                                           | true | false |


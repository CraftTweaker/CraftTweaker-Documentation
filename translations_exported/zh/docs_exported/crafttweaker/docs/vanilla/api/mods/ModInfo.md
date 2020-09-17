# ModInfo

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作工具.api.mods.ModInfo
```

## 参数

| 名称     | 类型                                                                                               | 可获得  | 可设置   |
| ------ | ------------------------------------------------------------------------------------------------ | ---- | ----- |
| blocks | 列表&lt;[craftmiliter.api.block.MCBlock](/vanilla/api/blocks/MCBlock)&gt;              | true | false |
| 显示名称   | 字符串[string]                                                                                      | true | false |
| 实体类型   | 列表&lt;[craftmiliter.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | true | false |
| 项目     | 列表&lt;[craftmiliter.api.IItemStack](/vanilla/api/items/IItemStack)&gt;               | true | false |
| 莫多德    | 字符串[string]                                                                                      | true | false |
| 命名空间   | 字符串[string]                                                                                      | true | false |
| 版本     | 字符串[string]                                                                                      | true | false |


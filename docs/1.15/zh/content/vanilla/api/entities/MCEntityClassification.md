# MCEntityClassification #MC实体分类

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.entity.MCEntityClassification
```

## 已实现的接口
MCEntityClassification实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 参数

| 名称                       | 类型      | 可获得  | 可设置   |
| ------------------------ | ------- | ---- | ----- |
| commandString            | String  | true | false |
| isAnimal #识别为动物          | boolean | true | false |
| isPeaceful #友好生物         | boolean | true | false |
| maxNumberOfEntity #实体最大值 | int     | true | false |
| name                     | String  | true | false |


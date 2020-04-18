# MCEntityClassification #MC实体分类

此类由具有mod-id的mod添加 `crafttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.entity.MCEntityClassification
```

## 已实现的接口
MCEntityClassification实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## 参数

| 名称                       | 类型          | 可获得  | 可设置   |
| ------------------------ | ----------- | ---- | ----- |
| commandString #命令字符串     | String      | true | true  |
| isAnimal #识别为动物          | 布尔值         | true | false |
| isPeaceful #友好生物         | 布尔值         | true | false |
| maxNumberOfEntity #实体最大值 | int         | true | false |
| 名称                       | 字符串[string] | true | false |


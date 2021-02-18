# MCEntityClassification #MC实体分类

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityClassification;
```


## Extending Enum&lt;MCEntityClassification&gt;

MCEntityClassification extends Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt;. That means all methods available in Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt; are also available in MCEntityClassification

## 参数

| 名称                       | 类型      | 可获得  | 可设置   |
| ------------------------ | ------- | ---- | ----- |
| commandString            | string  | true | false |
| isAnimal #识别为动物          | boolean | true | false |
| isPeaceful #友好生物         | boolean | true | false |
| maxNumberOfEntity #实体最大值 | int     | true | false |
| name                     | string  | true | false |


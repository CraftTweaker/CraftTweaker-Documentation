# MCEntityType #MC实体类型

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## 已实现的接口
MCEntityType实现了以下接口。 That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)
## 参数

| 名称                 | 类型                                                                           | 可获得  | 可设置   |
| ------------------ | ---------------------------------------------------------------------------- | ---- | ----- |
| classification #类别 | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false |
| commandString      | string                                                                       | true | false |
| height             | float                                                                        | true | false |
| immuneToFire #免疫火焰 | boolean                                                                      | true | false |
| lootTable          | string                                                                       | true | false |
| name               | string                                                                       | true | false |
| serializable #可序列化 | boolean                                                                      | true | false |
| summonable #可召唤的   | boolean                                                                      | true | false |
| translationKey     | string                                                                       | true | false |
| width              | float                                                                        | true | false |


# MCEntityType #MC实体类型

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## 已实现的接口
MCEntityType实现了以下接口。 That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| 结果类型                                                     | 是否隐藏 |
| -------------------------------------------------------- | ---- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## 方法

:::group{name=create}

Creates a new entity in the world.

Returns: The newly created Entity  
Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityType.create(world as MCWorld) as MCEntity
```

| 参数    | 类型                                    | 描述                                    |
| ----- | ------------------------------------- | ------------------------------------- |
| world | [MCWorld](/vanilla/api/world/MCWorld) | World for the entity to be created in |


:::


## 运算符

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## 参数

| 名称                 | 类型                                                                           | 可获得  | 可设置   | 描述                      |
| ------------------ | ---------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| classification #类别 | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| commandString      | string                                                                       | true | false | No Description Provided |
| height             | float                                                                        | true | false | No Description Provided |
| immuneToFire #免疫火焰 | boolean                                                                      | true | false | No Description Provided |
| lootTable          | string                                                                       | true | false | No Description Provided |
| name               | string                                                                       | true | false | No Description Provided |
| serializable #可序列化 | boolean                                                                      | true | false | No Description Provided |
| summonable #可召唤的   | boolean                                                                      | true | false | No Description Provided |
| translationKey     | string                                                                       | true | false | No Description Provided |
| width              | float                                                                        | true | false | No Description Provided |


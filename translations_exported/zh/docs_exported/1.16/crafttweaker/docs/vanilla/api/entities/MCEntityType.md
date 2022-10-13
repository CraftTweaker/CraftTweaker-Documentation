# MCEntityType #MC实体类型

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## 已实现的接口
MCEntityType实现了以下接口。 That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## Static Methods

:::group{name=setNameplateHandler}

Sets the global nameplate handler for all EntityTypes.

Return Type: void

```zenscript
// MCEntityType.setNameplateHandler(function as INameplateFunction) as void

MCEntityType.setNameplateHandler((entity, result) => {
 result.setAllow();
 result.content = "Custom name! Position: " + entity.position;
 }));
```

| 参数       | 类型                                                           | 描述                                                                      |
| -------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how all EntityType's nameplate are rendered. |


:::

## Casters

| 结果类型                                                     | 是否隐藏 |
| -------------------------------------------------------- | ---- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## 使用方式

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

:::group{name=getRegistryName}

Gets the registry name of this EntityType

Returns: The registry name of this EntityType as a ResourceLocation  
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// MCEntityType.getRegistryName() as MCResourceLocation

myMCEntityType.getRegistryName();
```

:::

:::group{name=setNameplate}

Sets the nameplate handler for this EntityType.

Return Type: void

```zenscript
// MCEntityType.setNameplate(function as INameplateFunction) as void

myMCEntityType.setNameplate((entity, result) => {
 result.setAllow();
 result.content = "Custom name! Position: " + entity.position;
 }));
```

| 参数       | 类型                                                           | 描述                                                                      |
| -------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how this EntityType's nameplate is rendered. |


:::


## 运算符

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## 参数

| 名称                   | 类型                                                                           | 可获得  | 可设置   | 描述                                        |
| -------------------- | ---------------------------------------------------------------------------- | ---- | ----- | ----------------------------------------- |
| classification #类别   | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided                   |
| commandString #命令字符串 | string                                                                       | true | false | No Description Provided                   |
| height #实体高度         | float                                                                        | true | false | No Description Provided                   |
| immuneToFire #免疫火焰   | 布尔值                                                                          | true | false | No Description Provided                   |
| lootTable            | string                                                                       | true | false | No Description Provided                   |
| name（名称）             | string                                                                       | true | false | No Description Provided                   |
| registryName         | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)                   | true | false | Gets the registry name of this EntityType |
| serializable #可序列化   | 布尔值                                                                          | true | false | No Description Provided                   |
| summonable #可召唤的     | 布尔值                                                                          | true | false | No Description Provided                   |
| translationKey       | string                                                                       | true | false | No Description Provided                   |
| width #宽度            | float                                                                        | true | false | No Description Provided                   |


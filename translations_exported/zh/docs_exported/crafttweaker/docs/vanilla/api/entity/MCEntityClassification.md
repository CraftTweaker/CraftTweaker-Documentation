# MCEntityClassification #MC实体分类



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityClassification;
```


## Extending Enum&lt;MCEntityClassification&gt;

MCEntityClassification extends Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt;. That means all methods available in Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt; are also available in MCEntityClassification

## Static Properties

| 名称             | 类型                                                                           | 可获得  | 可设置   | 描述                      |
| -------------- | ---------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| AMBIENT        | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| CREATURE       | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| MISC           | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| MONSTER        | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| WATER_AMBIENT  | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| WATER_CREATURE | [MCEntityClassification #MC实体分类](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |

## 方法

:::group{name=getCommandString}

Gets the command string for this EntityClassification

Returns: The command string for this EntityClassification  
Return Type: string

```zenscript
// MCEntityClassification.getCommandString() as string

<entityclassification:monster>.getCommandString();
```

:::

:::group{name=getMaxNumberOfCreature}

Gets how many Entities with this EntityClassification can be in the same area at the same time.

Returns: How many Entities of this EntityClassification can be in the same area at the same time.  
Return Type: int

```zenscript
// MCEntityClassification.getMaxNumberOfCreature() as int

<entityclassification:monster>.getMaxNumberOfCreature();
```

:::

:::group{name=getName}

Gets the name of this Entity Classification

Returns: The name of this Entity Classification  
Return Type: string

```zenscript
// MCEntityClassification.getName() as string

<entityclassification:monster>.getName();
```

:::

:::group{name=isAnimal}

Checks if this EntityClassification is an animal.

Returns: True if this EntityClassification is an animal. False otherwise.  
Return Type: boolean

```zenscript
// MCEntityClassification.isAnimal() as boolean

<entityclassification:monster>.isAnimal();
```

:::

:::group{name=isPeacefulCreature}

Checks if this EntityClassification is peaceful.

Returns: True if this EntityClassification is peaceful. False otherwise.  
Return Type: boolean

```zenscript
// MCEntityClassification.isPeacefulCreature() as boolean

<entityclassification:monster>.isPeacefulCreature();
```

:::


## 参数

| 名称                       | 类型      | 可获得  | 可设置   | 描述                                                                                              |
| ------------------------ | ------- | ---- | ----- | ----------------------------------------------------------------------------------------------- |
| commandString            | string  | true | false | Gets the command string for this EntityClassification                                           |
| isAnimal #识别为动物          | boolean | true | false | Checks if this EntityClassification is an animal.                                               |
| isPeaceful #友好生物         | boolean | true | false | Checks if this EntityClassification is peaceful.                                                |
| maxNumberOfEntity #实体最大值 | int     | true | false | Gets how many Entities with this EntityClassification can be in the same area at the same time. |
| name                     | string  | true | false | Gets the name of this Entity Classification                                                     |


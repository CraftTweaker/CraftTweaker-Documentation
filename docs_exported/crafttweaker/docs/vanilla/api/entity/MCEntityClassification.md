# MCEntityClassification



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityClassification;
```


## Extending Enum&lt;MCEntityClassification&gt;

MCEntityClassification extends Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt;. That means all methods available in Enum&lt;[MCEntityClassification](/vanilla/api/entity/MCEntityClassification)&gt; are also available in MCEntityClassification

## Static Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| AMBIENT | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| CREATURE | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| MISC | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| MONSTER | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| WATER_AMBIENT | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |
| WATER_CREATURE | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false | No Description Provided |

## Methods

:::group{name=getCommandString}

Gets the command string for this EntityClassification

Return Type: string

```zenscript
// MCEntityClassification.getCommandString() as string

<entityclassification:monster>.getCommandString();
```

:::

:::group{name=getMaxNumberOfCreature}

Gets how many Entities with this EntityClassification can be in the same area at the same time.

Return Type: int

```zenscript
// MCEntityClassification.getMaxNumberOfCreature() as int

<entityclassification:monster>.getMaxNumberOfCreature();
```

:::

:::group{name=getName}

Gets the name of this Entity Classification

Return Type: string

```zenscript
// MCEntityClassification.getName() as string

<entityclassification:monster>.getName();
```

:::

:::group{name=isAnimal}

Checks if this EntityClassification is an animal.

Return Type: boolean

```zenscript
// MCEntityClassification.isAnimal() as boolean

<entityclassification:monster>.isAnimal();
```

:::

:::group{name=isPeacefulCreature}

Checks if this EntityClassification is peaceful.

Return Type: boolean

```zenscript
// MCEntityClassification.isPeacefulCreature() as boolean

<entityclassification:monster>.isPeacefulCreature();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| commandString | string | true | false | Gets the command string for this EntityClassification |
| isAnimal | boolean | true | false | Checks if this EntityClassification is an animal. |
| isPeaceful | boolean | true | false | Checks if this EntityClassification is peaceful. |
| maxNumberOfEntity | int | true | false | Gets how many Entities with this EntityClassification can be in the same area at the same time. |
| name | string | true | false | Gets the name of this Entity Classification |


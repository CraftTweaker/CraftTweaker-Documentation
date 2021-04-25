# MCEntityType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## Implemented Interfaces
MCEntityType implements the following interfaces. That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| Result type | Is Implicit |
|-------------|-------------|
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## Methods

:::group{name=create}

Creates a new entity in the world.

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityType.create(world as MCWorld) as MCEntity
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | World for the entity to be created in |


:::


## Operators

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| classification | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true | false |
| commandString | string | true | false |
| height | float | true | false |
| immuneToFire | boolean | true | false |
| lootTable | string | true | false |
| name | string | true | false |
| serializable | boolean | true | false |
| summonable | boolean | true | false |
| translationKey | string | true | false |
| width | float | true | false |


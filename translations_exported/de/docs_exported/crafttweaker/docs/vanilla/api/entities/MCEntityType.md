# MCEntityType

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## Implemented Interfaces
MCEntityType implements the following interfaces. That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| Result type                                              | Is Implicit |
| -------------------------------------------------------- | ----------- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true        |

## Methoden

:::group{name=create}

Creates a new entity in the world.

Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityType.create(world as MCWorld) as MCEntity
```

| Parameter | Type                                  | Beschreibung                          |
| --------- | ------------------------------------- | ------------------------------------- |
| world     | [MCWorld](/vanilla/api/world/MCWorld) | World for the entity to be created in |


:::


## Operatoren

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## Properties

| Name           | Type                                                                 | Has Getter | Has Setter | Beschreibung            |
| -------------- | -------------------------------------------------------------------- | ---------- | ---------- | ----------------------- |
| classification | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true       | false      | No Description Provided |
| commandString  | string                                                               | true       | false      | No Description Provided |
| height         | float                                                                | true       | false      | No Description Provided |
| immuneToFire   | boolean                                                              | true       | false      | No Description Provided |
| lootTable      | string                                                               | true       | false      | No Description Provided |
| name           | string                                                               | true       | false      | No Description Provided |
| serializable   | boolean                                                              | true       | false      | No Description Provided |
| summonable     | boolean                                                              | true       | false      | No Description Provided |
| translationKey | string                                                               | true       | false      | No Description Provided |
| width          | float                                                                | true       | false      | No Description Provided |


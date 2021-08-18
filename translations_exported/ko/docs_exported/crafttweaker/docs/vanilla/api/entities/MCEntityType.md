# MCEntityType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## Implemented Interfaces
MCEntityType implements the following interfaces. That means all methods defined in these interfaces are also available in MCEntityType

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

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

| Parameter | Type                                                         | Description                                                             |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function  | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how all EntityType's nameplate are rendered. |


:::

## Casters

| 반환 자료형                                                   | 암묵적  |
| -------------------------------------------------------- | ---- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | true |

## Methods

:::group{name=create}

Creates a new entity in the world.

Returns: The newly created Entity  
Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityType.create(world as MCWorld) as MCEntity
```

| Parameter | Type                                  | Description                           |
| --------- | ------------------------------------- | ------------------------------------- |
| world     | [MCWorld](/vanilla/api/world/MCWorld) | World for the entity to be created in |


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

| Parameter | Type                                                         | Description                                                             |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function  | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how this EntityType's nameplate is rendered. |


:::


## 연산자

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## Properties

| 이름             | Type                                                                 | Has Getter | Has Setter | Description                               |
| -------------- | -------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------------- |
| classification | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | true       | false      | No Description Provided                   |
| commandString  | string                                                               | true       | false      | No Description Provided                   |
| height         | float                                                                | true       | false      | No Description Provided                   |
| immuneToFire   | boolean                                                              | true       | false      | No Description Provided                   |
| lootTable      | string                                                               | true       | false      | No Description Provided                   |
| name           | string                                                               | true       | false      | No Description Provided                   |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)           | true       | false      | Gets the registry name of this EntityType |
| serializable   | boolean                                                              | true       | false      | No Description Provided                   |
| summonable     | boolean                                                              | true       | false      | No Description Provided                   |
| translationKey | string                                                               | true       | false      | No Description Provided                   |
| width          | float                                                                | true       | false      | No Description Provided                   |


# MCEntityType

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MCEntityType;
```


## Interfacce Implementate
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

| Parametro | Tipo                                                         | Descrizione                                                             |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function  | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how all EntityType's nameplate are rendered. |


:::

## Caster

| Tipo Risultato                                           | Implicito |
| -------------------------------------------------------- | --------- |
| [EntityIngredient](/vanilla/api/entity/EntityIngredient) | sì        |

## Metodi

:::group{name=create}

Creates a new entity in the world.

Returns: The newly created Entity  
Return Type: [MCEntity](/vanilla/api/entity/MCEntity)

```zenscript
MCEntityType.create(world as MCWorld) as MCEntity
```

| Parametro | Tipo                                  | Descrizione                           |
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

| Parametro | Tipo                                                         | Descrizione                                                             |
| --------- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| function  | [INameplateFunction](/vanilla/api/entity/INameplateFunction) | The function that controls how this EntityType's nameplate is rendered. |


:::


## Operators

:::group{name=OR}

```zenscript
myMCEntityType | other as EntityIngredient
```

:::


## Proprietà

| Nome           | Tipo                                                                 | Ha Getter | Ha Setter | Descrizione                               |
| -------------- | -------------------------------------------------------------------- | --------- | --------- | ----------------------------------------- |
| classification | [MCEntityClassification](/vanilla/api/entity/MCEntityClassification) | sì        | no        | No Description Provided                   |
| commandString  | string                                                               | sì        | no        | No Description Provided                   |
| height         | float                                                                | sì        | no        | No Description Provided                   |
| immuneToFire   | boolean                                                              | sì        | no        | No Description Provided                   |
| lootTable      | string                                                               | sì        | no        | No Description Provided                   |
| nome           | string                                                               | sì        | no        | No Description Provided                   |
| registryName   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)           | sì        | no        | Gets the registry name of this EntityType |
| serializable   | boolean                                                              | sì        | no        | No Description Provided                   |
| summonable     | boolean                                                              | sì        | no        | No Description Provided                   |
| translationKey | string                                                               | sì        | no        | No Description Provided                   |
| width          | float                                                                | sì        | no        | No Description Provided                   |


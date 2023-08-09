# Expansion for Level

## Methods

:::group{name=getRequirementMap}

Gets a list of requirements that must be met in order to attack an entity

Return Type: int?[string]

```zenscript
Level.getRequirementMap(entity as Entity, type as invalid) as int?[string]
```

| Parameter |                 Type                 |       Description        |
|-----------|--------------------------------------|--------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |                          |
| type      | **invalid**                          | the requirement category |


:::

:::group{name=getRequirementMap}

Gets a list of requirements that must be met in order to use the item

Return Type: int?[string]

```zenscript
Level.getRequirementMap(itemStack as IItemStack, type as invalid) as int?[string]
```

| Parameter |                    Type                    |       Description        |
|-----------|--------------------------------------------|--------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |                          |
| type      | **invalid**                                | the requirement category |


:::

:::group{name=getRequirementMap}

Gets a spico of requirements that need to be fulfilled in order to break the block

Return Type: int?[string]

```zenscript
Level.getRequirementMap(pos as BlockPos, type as invalid) as int?[string]
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |                          |
| type      | **invalid**                                 | the requirement category |


:::



# Expansion for Level

## Methods

:::group{name=getRequirementMap}

Gets a list of requirements that must be met in order to attack an entity

Map -> {"combat" : 10, "endurance" : 20}  {skillName : level}

Return Type: int?[string]

```zenscript
// Level.getRequirementMap(entity as Entity, type as invalid) as int?[string]
Level.getRequirementMap(<entity:minecraft:zombie>, <constant:pmmo:reqtype:value>);
```

| Parameter |                 Type                 |       Description        |
|-----------|--------------------------------------|--------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |                          |
| type      | **invalid**                          | the requirement category |


:::

:::group{name=getRequirementMap}

Gets a list of requirements that must be met in order to use the item

Map -> {"combat" : 10, "endurance" : 20}  {skillName : level}

Return Type: int?[string]

```zenscript
Level.getRequirementMap(<item:minecraft:iron_sword>, <constant:pmmo:reqtype:value>);
```

| Parameter |                    Type                    |       Description        |
|-----------|--------------------------------------------|--------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |                          |
| type      | **invalid**                                | the requirement category |


:::

:::group{name=getRequirementMap}

Gets a spico of requirements that need to be fulfilled in order to break the block

Map -> {"combat" : 10, "endurance" : 20}  {skillName : level}

Return Type: int?[string]

```zenscript
Level.getRequirementMap(new BlockPos(10, 60, 10), <constant:pmmo:reqtype:value>);
```

| Parameter |                    Type                     |       Description        |
|-----------|---------------------------------------------|--------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |                          |
| type      | **invalid**                                 | the requirement category |


:::



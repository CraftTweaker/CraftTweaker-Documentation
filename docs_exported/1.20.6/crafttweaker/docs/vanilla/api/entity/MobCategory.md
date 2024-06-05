# MobCategory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MobCategory;
```


## Implemented Interfaces
MobCategory implements the following interfaces. That means all methods defined in these interfaces are also available in MobCategory

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

MobCategory is an enum. It has 8 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:mobcategory:monster>
<constant:minecraft:mobcategory:creature>
<constant:minecraft:mobcategory:ambient>
<constant:minecraft:mobcategory:axolotls>
<constant:minecraft:mobcategory:underground_water_creature>
<constant:minecraft:mobcategory:water_creature>
<constant:minecraft:mobcategory:water_ambient>
<constant:minecraft:mobcategory:misc>
```
## Methods

:::group{name=getDespawnDistance}

Return Type: int

```zenscript
// MobCategory.getDespawnDistance() as int

myMobCategory.getDespawnDistance();
```

:::

:::group{name=getMaxInstancesPerChunk}

Return Type: int

```zenscript
// MobCategory.getMaxInstancesPerChunk() as int

myMobCategory.getMaxInstancesPerChunk();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// MobCategory.getName() as string

myMobCategory.getName();
```

:::

:::group{name=getNoDespawnDistance}

Return Type: int

```zenscript
// MobCategory.getNoDespawnDistance() as int

myMobCategory.getNoDespawnDistance();
```

:::

:::group{name=isFriendly}

Return Type: boolean

```zenscript
// MobCategory.isFriendly() as boolean

myMobCategory.isFriendly();
```

:::

:::group{name=isPersistent}

Return Type: boolean

```zenscript
// MobCategory.isPersistent() as boolean

myMobCategory.isPersistent();
```

:::


## Properties

|         Name         |  Type   | Has Getter | Has Setter |
|----------------------|---------|------------|------------|
| despawnDistance      | int     | true       | false      |
| friendly             | boolean | true       | false      |
| maxInstancesPerChunk | int     | true       | false      |
| noDespawnDistance    | int     | true       | false      |
| persistent           | boolean | true       | false      |


# MobCategory

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.MobCategory;
```


## 已实现的接口
MobCategory implements the following interfaces. That means all methods defined in these interfaces are also available in MobCategory

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

MobCategory is an enum. It has 7 enum constants. They are accessible using the code below.

```zenscript
MobCategory.MONSTER
MobCategory.CREATURE
MobCategory.AMBIENT
MobCategory.UNDERGROUND_WATER_CREATURE
MobCategory.WATER_CREATURE
MobCategory.WATER_AMBIENT
MobCategory.MISC
```
## 使用方式

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


## 参数

| 名称                   | 类型  | 可获得  | 可设置   | 描述                      |
| -------------------- | --- | ---- | ----- | ----------------------- |
| despawnDistance      | int | true | false | No Description Provided |
| friendly             | 布尔值 | true | false | No Description Provided |
| maxInstancesPerChunk | int | true | false | No Description Provided |
| noDespawnDistance    | int | true | false | No Description Provided |
| persistent           | 布尔值 | true | false | No Description Provided |


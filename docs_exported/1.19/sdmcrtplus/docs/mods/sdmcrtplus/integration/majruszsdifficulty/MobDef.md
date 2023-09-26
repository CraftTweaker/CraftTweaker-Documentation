# MobDef

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.MobDef;
```


## Constructors


```zenscript
new MobDef() as MobDef
new MobDef();
```

## Methods

:::group{name=getCount}

Return Type: int

```zenscript
// MobDef.getCount() as int

myMobDef.getCount();
```

:::

:::group{name=getEquipment}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// MobDef.getEquipment() as ResourceLocation

myMobDef.getEquipment();
```

:::

:::group{name=getType}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
// MobDef.getType() as EntityType

myMobDef.getType();
```

:::

:::group{name=setCount}

Return Type: int

```zenscript
MobDef.setCount(count as int) as int
```

| Parameter | Type |
|-----------|------|
| count     | int  |


:::

:::group{name=setEquipment}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
MobDef.setEquipment(resourceLocation as ResourceLocation) as ResourceLocation
```

|    Parameter     |                            Type                            |
|------------------|------------------------------------------------------------|
| resourceLocation | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=setType}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
MobDef.setType(type as EntityType) as EntityType
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType) |


:::


## Properties

|   Name    |                            Type                            | Has Getter | Has Setter |
|-----------|------------------------------------------------------------|------------|------------|
| count     | int                                                        | true       | true       |
| equipment | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | true       |
| type      | [EntityType](/vanilla/api/entity/EntityType)               | true       | true       |


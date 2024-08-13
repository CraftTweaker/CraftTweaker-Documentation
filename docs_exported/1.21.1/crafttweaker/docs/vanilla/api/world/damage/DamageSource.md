# DamageSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.damage.DamageSource;
```


## Static Methods

:::group{name=create}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSource.create(type as DamageType, damageSourcePosition as Vec3) as DamageSource
```

|      Parameter       |                        Type                        |
|----------------------|----------------------------------------------------|
| type                 | [DamageType](/vanilla/api/world/damage/DamageType) |
| damageSourcePosition | [Vec3](/vanilla/api/util/math/Vec3)                |


:::

:::group{name=create}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSource.create(type as DamageType, directEntity as Entity, causingEntity as Entity) as DamageSource
```

|   Parameter   |                        Type                        | Optional |
|---------------|----------------------------------------------------|----------|
| type          | [DamageType](/vanilla/api/world/damage/DamageType) | false    |
| directEntity  | [Entity](/vanilla/api/entity/Entity)               | true     |
| causingEntity | [Entity](/vanilla/api/entity/Entity)               | true     |


:::

## Methods

:::group{name=getLocalizedDeathMessage}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
DamageSource.getLocalizedDeathMessage(entity as LivingEntity) as Component
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=isIn}

Return Type: boolean

```zenscript
DamageSource.isIn(tag as KnownTag<DamageType>) as boolean
```

| Parameter |                                                 Type                                                 |
|-----------|------------------------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[DamageType](/vanilla/api/world/damage/DamageType)&gt; |


:::


## Properties

|         Name         |                        Type                        | Has Getter | Has Setter |
|----------------------|----------------------------------------------------|------------|------------|
| directEntity         | [Entity](/vanilla/api/entity/Entity)?              | true       | false      |
| entity               | [Entity](/vanilla/api/entity/Entity)?              | true       | false      |
| foodExhaustion       | float                                              | true       | false      |
| isCreativePlayer     | boolean                                            | true       | false      |
| isDirect             | boolean                                            | true       | false      |
| msgId                | string                                             | true       | false      |
| scalesWithDifficulty | boolean                                            | true       | false      |
| sourcePosition       | [Vec3](/vanilla/api/util/math/Vec3)?               | true       | false      |
| sourcePositionRaw    | [Vec3](/vanilla/api/util/math/Vec3)?               | true       | false      |
| type                 | [DamageType](/vanilla/api/world/damage/DamageType) | true       | false      |


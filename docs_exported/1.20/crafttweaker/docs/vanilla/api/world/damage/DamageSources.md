# DamageSources

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.damage.DamageSources;
```


## Methods

:::group{name=anvil}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.anvil(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=arrow}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.arrow(arrow as Arrow, cause as Entity) as DamageSource
```

| Parameter |                           Type                           | Optional |
|-----------|----------------------------------------------------------|----------|
| arrow     | [Arrow](/vanilla/api/entity/type/projectile/arrow/Arrow) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity)                     | true     |


:::

:::group{name=badRespawnPointExplosion}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.badRespawnPointExplosion(position as Vec3) as DamageSource
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| position  | [Vec3](/vanilla/api/util/math/Vec3) |


:::

:::group{name=explosion}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.explosion(explosion as Explosion) as DamageSource
```

| Parameter |                   Type                    | Optional |
|-----------|-------------------------------------------|----------|
| explosion | [Explosion](/vanilla/api/world/Explosion) | true     |


:::

:::group{name=explosion}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.explosion(entity as Entity, cause as Entity) as DamageSource
```

| Parameter |                 Type                 | Optional |
|-----------|--------------------------------------|----------|
| entity    | [Entity](/vanilla/api/entity/Entity) | true     |
| cause     | [Entity](/vanilla/api/entity/Entity) | true     |


:::

:::group{name=fallingBlock}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.fallingBlock(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=fallingStalactite}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.fallingStalactite(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=fireball}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.fireball(entity as Fireball, cause as Entity) as DamageSource
```

| Parameter |                           Type                           | Optional |
|-----------|----------------------------------------------------------|----------|
| entity    | [Fireball](/vanilla/api/entity/type/projectile/Fireball) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity)                     | true     |


:::

:::group{name=fireworks}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.fireworks(entity as FireworkRocketEntity, cause as Entity) as DamageSource
```

| Parameter |                                       Type                                       | Optional |
|-----------|----------------------------------------------------------------------------------|----------|
| entity    | [FireworkRocketEntity](/vanilla/api/entity/type/projectile/FireworkRocketEntity) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity)                                             | true     |


:::

:::group{name=indirectMagic}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.indirectMagic(entity as Entity, cause as Entity) as DamageSource
```

| Parameter |                 Type                 | Optional |
|-----------|--------------------------------------|----------|
| entity    | [Entity](/vanilla/api/entity/Entity) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity) | true     |


:::

:::group{name=mobAttack}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.mobAttack(entity as LivingEntity) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=mobProjectile}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.mobProjectile(entity as Entity, cause as LivingEntity) as DamageSource
```

| Parameter |                       Type                       | Optional |
|-----------|--------------------------------------------------|----------|
| entity    | [Entity](/vanilla/api/entity/Entity)             | false    |
| cause     | [LivingEntity](/vanilla/api/entity/LivingEntity) | true     |


:::

:::group{name=noAggroMobAttack}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.noAggroMobAttack(entity as LivingEntity) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=playerAttack}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.playerAttack(player as Player) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=sonicBoom}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.sonicBoom(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=sting}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.sting(entity as LivingEntity) as DamageSource
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=thorns}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.thorns(entity as Entity) as DamageSource
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=thrown}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.thrown(entity as Entity, cause as Entity) as DamageSource
```

| Parameter |                 Type                 | Optional |
|-----------|--------------------------------------|----------|
| entity    | [Entity](/vanilla/api/entity/Entity) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity) | true     |


:::

:::group{name=trident}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.trident(entity as Entity, cause as Entity) as DamageSource
```

| Parameter |                 Type                 | Optional |
|-----------|--------------------------------------|----------|
| entity    | [Entity](/vanilla/api/entity/Entity) | false    |
| cause     | [Entity](/vanilla/api/entity/Entity) | true     |


:::

:::group{name=witherSkull}

Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

```zenscript
DamageSources.witherSkull(entity as WitherSkull, cause as Entity) as DamageSource
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| entity    | [WitherSkull](/vanilla/api/entity/type/projectile/WitherSkull) |
| cause     | [Entity](/vanilla/api/entity/Entity)                           |


:::


## Properties

|      Name      |                          Type                          | Has Getter | Has Setter |
|----------------|--------------------------------------------------------|------------|------------|
|                | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| cactus         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| cramming       | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| dragonBreath   | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| drown          | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| dryOut         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| fall           | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| fellOutOfWorld | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| flyIntoWall    | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| freeze         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| generic        | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| hotFloor       | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| inFire         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| inWall         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| lava           | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| lightningBolt  | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| magic          | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| onFire         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| stalagmite     | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| starve         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| sweetBerryBush | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |
| wither         | [DamageSource](/vanilla/api/world/damage/DamageSource) | true       | false      |


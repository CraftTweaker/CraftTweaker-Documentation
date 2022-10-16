# Explosion

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Explosion;
```


## Static Methods

:::group{name=create}

Return Type: [Explosion](/vanilla/api/world/Explosion)

```zenscript
Explosion.create(world as Level, x as double, y as double, z as double, size as float, causesFire as boolean, mode as ExplosionBlockInteraction, exploder as Entity, source as DamageSource) as Explosion
```

| Параметр   | Тип                                                                       | Optional |
| ---------- | ------------------------------------------------------------------------- | -------- |
| world      | [Level](/vanilla/api/world/Level)                                         | false    |
| x          | double                                                                    | false    |
| y          | double                                                                    | false    |
| z          | double                                                                    | false    |
| size       | float                                                                     | false    |
| causesFire | boolean                                                                   | false    |
| mode       | [ExplosionBlockInteraction](/vanilla/api/world/ExplosionBlockInteraction) | false    |
| exploder   | [Entity](/vanilla/api/entity/Entity)                                      | true     |
| источник   | [DamageSource](/vanilla/api/world/DamageSource)                           | true     |


:::

## Методы

:::group{name=clearToBlow}

Clears the affected block positions of this Explosion.

```zenscript
// Explosion.clearToBlow()

myExplosion.clearToBlow();
```

:::

:::group{name=explode}

Performs the first part of the explosion which is destroying the blocks.

```zenscript
// Explosion.explode()

myExplosion.explode();
```

:::

:::group{name=finalizeExplosion}

Performs the second part of the explosion which is the sound, drops and if enabled the particles.

```zenscript
// Explosion.finalizeExplosion(spawnParticles as boolean)

myExplosion.finalizeExplosion(true);
```

| Параметр       | Тип     | Описание                     |
| -------------- | ------- | ---------------------------- |
| spawnParticles | boolean | Should particles be spawned. |


:::

:::group{name=getDamageSource}

Gets the damage source of this Explosion.

Returns: The damage source of this Explosion.  
Return Type: [DamageSource](/vanilla/api/world/DamageSource)

```zenscript
// Explosion.getDamageSource() as DamageSource

myExplosion.getDamageSource();
```

:::

:::group{name=getHitPlayers}

Gets the player knockback map for this Explosion.

 This map is only populated in [Explosion](/vanilla/api/world/Explosion)#explode() so calling it before will return nothing.

 This map is used to calculate the vectors that players around the explosion will be pushed back by.

Returns: A Map of PlayerEntity to Vector3d depicting knockback vectors.  
Return Type: [Vec3](/vanilla/api/util/math/Vec3)[[Player](/vanilla/api/entity/type/player/Player)]

```zenscript
// Explosion.getHitPlayers() as Vec3[Player]

myExplosion.getHitPlayers();
```

:::

:::group{name=getSourceMob}

Gets the LivingEntity that caused this Explosion.

 For example: If the Explosion was caused by TNT, it will return the PlayerEntity that placed it. If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity. If the Explosion was caused by a Ghast fireball, it will return the Ghast.

 If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that generated in the world), then `null` is returned.

 You may need to cast the returned LivingEntity to not be nullable.

Returns: The LivingEntity that caused this Explosion. `null` if no LivingEntity caused it.  
Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)?

```zenscript
// Explosion.getSourceMob() as LivingEntity?

myExplosion.getSourceMob();
```

:::

:::group{name=getToBlow}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// Explosion.getToBlow() as stdlib.List<BlockPos>

myExplosion.getToBlow();
```

:::


## Свойства

| Название           | Тип                                                                                   | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| damageSource       | [DamageSource](/vanilla/api/world/DamageSource)                                       | true         | false        | Gets the damage source of this Explosion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| playerKnockbackMap | [Vec3](/vanilla/api/util/math/Vec3)[[Player](/vanilla/api/entity/type/player/Player)] | true         | false        | Gets the player knockback map for this Explosion. <br />  <br />  This map is only populated in [Explosion](/vanilla/api/world/Explosion)#explode() so calling it before will return nothing. <br />  <br />  This map is used to calculate the vectors that players around the explosion will be pushed back by.                                                                                                                                                                                                                                                                                                                                                                   |
| sourceMob          | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                     | true         | false        | Gets the LivingEntity that caused this Explosion. <br />  <br />  For example: <br />  If the Explosion was caused by TNT, it will return the PlayerEntity that placed it. <br />  If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity. <br />  If the Explosion was caused by a Ghast fireball, it will return the Ghast. <br />  <br />  If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that <br />  generated in the world), then `null` is returned. <br />  <br />  You may need to cast the returned LivingEntity to not be nullable. |
| toBlow             | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;            | true         | false        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |


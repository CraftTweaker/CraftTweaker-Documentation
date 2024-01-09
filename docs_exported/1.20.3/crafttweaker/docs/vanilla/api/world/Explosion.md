# Explosion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Explosion;
```


## Constructors


```zenscript
new Explosion(level as Level, entity as Level, x as double, y as double, z as double, size as float, causesFire as boolean, mode as ExplosionBlockInteraction) as Explosion
new Explosion(level, player, 0, 0, 0, 1.0, true, <constant:minecraft:explosion/blockinteraction:destroy>);
```
| Parameter  |                                   Type                                    |                  Description                  |
|------------|---------------------------------------------------------------------------|-----------------------------------------------|
| level      | [Level](/vanilla/api/world/Level)                                         | The level to spawn the explosion in           |
| entity     | [Level](/vanilla/api/world/Level)                                         | The entity that spawned the explosion         |
| x          | double                                                                    | The x position.                               |
| y          | double                                                                    | The y position.                               |
| z          | double                                                                    | The z position.                               |
| size       | float                                                                     | How big is the explosion                      |
| causesFire | boolean                                                                   | Does the explosion cause fire                 |
| mode       | [ExplosionBlockInteraction](/vanilla/api/world/ExplosionBlockInteraction) | How should the explosion interact with blocks |



## Methods

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

|   Parameter    |  Type   |         Description          |
|----------------|---------|------------------------------|
| spawnParticles | boolean | Should particles be spawned. |


:::

:::group{name=getDamageSource}

Gets the damage source of this Explosion.

Returns: The damage source of this Explosion.  
Return Type: [DamageSource](/vanilla/api/world/damage/DamageSource)

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

:::group{name=getIndirectSourceEntity}

Gets the LivingEntity that caused this Explosion.

 For example:
 If the Explosion was caused by TNT, it will return the PlayerEntity that placed it.
 If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity.
 If the Explosion was caused by a Ghast fireball, it will return the Ghast.

 If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that
 generated in the world), then `null` is returned.

 You may need to cast the returned LivingEntity to not be nullable.

Returns: The LivingEntity that caused this Explosion. `null` if no LivingEntity caused it.  
Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)?

```zenscript
// Explosion.getIndirectSourceEntity() as LivingEntity?

myExplosion.getIndirectSourceEntity();
```

:::

:::group{name=getToBlow}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// Explosion.getToBlow() as stdlib.List<BlockPos>

myExplosion.getToBlow();
```

:::


## Properties

|         Name         |                                         Type                                          | Has Getter | Has Setter |                                                                                                                                                                                                                                                                                                                   Description                                                                                                                                                                                                                                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| damageSource         | [DamageSource](/vanilla/api/world/damage/DamageSource)                                | true       | false      | Gets the damage source of this Explosion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| indirectSourceEntity | [LivingEntity](/vanilla/api/entity/LivingEntity)?                                     | true       | false      | Gets the LivingEntity that caused this Explosion. <br />  <br />  For example: <br />  If the Explosion was caused by TNT, it will return the PlayerEntity that placed it. <br />  If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity. <br />  If the Explosion was caused by a Ghast fireball, it will return the Ghast. <br />  <br />  If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that <br />  generated in the world), then `null` is returned. <br />  <br />  You may need to cast the returned LivingEntity to not be nullable. |
| playerKnockbackMap   | [Vec3](/vanilla/api/util/math/Vec3)[[Player](/vanilla/api/entity/type/player/Player)] | true       | false      | Gets the player knockback map for this Explosion. <br />  <br />  This map is only populated in [Explosion](/vanilla/api/world/Explosion)#explode() so calling it before will return nothing. <br />  <br />  This map is used to calculate the vectors that players around the explosion will be pushed back by.                                                                                                                                                                                                                                                                                                                               |
| toBlow               | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;                        | true       | false      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |


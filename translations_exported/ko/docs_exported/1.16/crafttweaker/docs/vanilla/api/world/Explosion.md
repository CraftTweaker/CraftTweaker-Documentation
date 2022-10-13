# Explosion

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.Explosion;
```


## Static Methods

:::group{name=create}

Return Type: [Explosion](/vanilla/api/world/Explosion)

```zenscript
Explosion.create(world as MCWorld, x as double, y as double, z as double, size as float, causesFire as boolean, mode as ExplosionMode, exploder as MCEntity, source as DamageSource) as Explosion
```

| Parameter  | Type                                              | Description             | Optional | DefaultValue |
| ---------- | ------------------------------------------------- | ----------------------- | -------- | ------------ |
| world      | [MCWorld](/vanilla/api/world/MCWorld)             | No Description Provided | false    |              |
| x          | double                                            | No Description Provided | false    |              |
| y          | double                                            | No Description Provided | false    |              |
| z          | double                                            | No Description Provided | false    |              |
| size       | float                                             | No Description Provided | false    |              |
| causesFire | boolean                                           | No Description Provided | false    |              |
| mode       | [ExplosionMode](/vanilla/api/world/ExplosionMode) | No Description Provided | false    |              |
| exploder   | [MCEntity](/vanilla/api/entity/MCEntity)          | No Description Provided | true     |              |
| source     | [DamageSource](/vanilla/api/util/DamageSource)    | No Description Provided | true     |              |


:::

## Methods

:::group{name=clearAffectedBlockPositions}

Clears the affected block positions of this Explosion.

Return Type: void

```zenscript
// Explosion.clearAffectedBlockPositions() as void

myExplosion.clearAffectedBlockPositions();
```

:::

:::group{name=doExplosionA}

Performs the first part of the explosion which is destroying the blocks.

Return Type: void

```zenscript
// Explosion.doExplosionA() as void

myExplosion.doExplosionA();
```

:::

:::group{name=doExplosionB}

Performs the second part of the explosion which is the sound, drops and if enabled the particles.

Return Type: void

```zenscript
// Explosion.doExplosionB(spawnParticles as boolean) as void

myExplosion.doExplosionB(true);
```

| Parameter      | Type    | Description                  |
| -------------- | ------- | ---------------------------- |
| spawnParticles | boolean | Should particles be spawned. |


:::

:::group{name=getAffectedBlockPositions}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/BlockPos)&gt;

```zenscript
// Explosion.getAffectedBlockPositions() as stdlib.List<BlockPos>

myExplosion.getAffectedBlockPositions();
```

:::

:::group{name=getDamageSource}

Gets the damage source of this Explosion.

Returns: The damage source of this Explosion.  
Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
// Explosion.getDamageSource() as DamageSource

myExplosion.getDamageSource();
```

:::

:::group{name=getExploder}

Gets the actual Entity that caused this Explosion to occur.

 Examples: TNT will return itself. Creeper will return itself. A Ghast fireball will return itself.

 You may need to cast the returned Entity to not be nullable.

Returns: The Entity that caused this Explosion. If the Explosion wasn't caused by any Entity, it will return null.  
Return Type: [MCEntity](/vanilla/api/entity/MCEntity)?

```zenscript
// Explosion.getExploder() as MCEntity?

myExplosion.getExploder();
```

:::

:::group{name=getExplosivePlacedBy}

Gets the LivingEntity that caused this Explosion.

 For example: If the Explosion was caused by TNT, it will return the PlayerEntity that placed it. If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity. If the Explosion was caused by a Ghast fireball, it will return the Ghast.

 If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that generated in the world), then `null` is returned.

 You may need to cast the returned LivingEntity to not be nullable.

Returns: The LivingEntity that caused this Explosion. `null` if no LivingEntity caused it.  
Return Type: [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)?

```zenscript
// Explosion.getExplosivePlacedBy() as MCLivingEntity?

myExplosion.getExplosivePlacedBy();
```

:::

:::group{name=getPlayerKnockbackMap}

Gets the player knockback map for this Explosion.

 This map is only populated in [Explosion](/vanilla/api/world/Explosion)#doExplosionA() so calling it before will return nothing.

 This map is used to calculate the vectors that players around the explosion will be pushed back by.

Returns: A Map of PlayerEntity to Vector3d depicting knockback vectors.  
Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)[[MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)]

```zenscript
// Explosion.getPlayerKnockbackMap() as MCVector3d[MCPlayerEntity]

myExplosion.getPlayerKnockbackMap();
```

:::

:::group{name=getPosition}

Return Type: [MCVector3d](/vanilla/api/util/MCVector3d)

```zenscript
// Explosion.getPosition() as MCVector3d

myExplosion.getPosition();
```

:::


## Properties

| 이름                     | Type                                                                                             | Has Getter | Has Setter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                        | [MCEntity](/vanilla/api/entity/MCEntity)?                                                        | true       | false      | Gets the actual Entity that caused this Explosion to occur. <br />  <br />  Examples: <br />  TNT will return itself. <br />  Creeper will return itself. <br />  A Ghast fireball will return itself. <br />  <br />  You may need to cast the returned Entity to not be nullable.                                                                                                                                                                                                                                                                                                                                                                               |
| affectedBlockPositions | stdlib.List&lt;[BlockPos](/vanilla/api/util/BlockPos)&gt;                            | true       | false      | No Description Provided                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| damageSource           | [DamageSource](/vanilla/api/util/DamageSource)                                                   | true       | false      | Gets the damage source of this Explosion.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| explosivePlacedBy      | [MCLivingEntity](/vanilla/api/entity/MCLivingEntity)?                                            | true       | false      | Gets the LivingEntity that caused this Explosion. <br />  <br />  For example: <br />  If the Explosion was caused by TNT, it will return the PlayerEntity that placed it. <br />  If the Explosion was caused by a Creeper or another Entity directly, it will return that Entity. <br />  If the Explosion was caused by a Ghast fireball, it will return the Ghast. <br />  <br />  If no Entity caused this Explosion (for example, if the Explosion was caused by TNT in a Desert Temple that <br />  generated in the world), then `null` is returned. <br />  <br />  You may need to cast the returned LivingEntity to not be nullable. |
| playerKnockbackMap     | [MCVector3d](/vanilla/api/util/MCVector3d)[[MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)] | true       | false      | Gets the player knockback map for this Explosion. <br />  <br />  This map is only populated in [Explosion](/vanilla/api/world/Explosion)#doExplosionA() so calling it before will return nothing. <br />  <br />  This map is used to calculate the vectors that players around the explosion will be pushed back by.                                                                                                                                                                                                                                                                                                                                                              |
| position               | [MCVector3d](/vanilla/api/util/MCVector3d)                                                       | true       | false      | No Description Provided                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |


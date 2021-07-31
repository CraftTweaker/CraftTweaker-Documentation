# IExplosion

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.world.IExplosion;`

## Creating an IExplosion object
To create an IExplosion object, you must obtain it from an [IWorld](/Vanilla/World/IWorld/) and call it with any of these three methods:
 * `world.createExplosion(IEntity, double, double, double, float, bool, bool);`
 * `world.performExplosion(IEntity, double, double, double, float, bool, bool);`
 * `world.performExplosion(IExplosion);`

## ZenGetters and ZenSetters
| ZenGetter                | ZenSetter                | Type                                                                             | Description                                                                                                                                                   |
| ------------------------ | ------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `world`                  |                          | [IWorld](/Vanilla/World/IWorld/)                                                 | The world of the explosion.                                                                                                                                   |
| `placedBy`               |                          | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)                        | The entity that initiated the explosion. If the explosion was caused by TNT, the entity is the entity that placed down the TNT, if applicable. Can be `null`. |
| `position`               |                          | [Position3f](/Vanilla/Utils/Position3f/)                                         | The position of the explosion.                                                                                                                                |
| `affectedBlockPositions` | `affectedBlockPositions` | [IBlockPos](/Vanilla/World/IBlockPos/)\[ \]                                    | A list of block positions that the explosion affects. May be null/empty before `doExplosionA()` is called.                                                    |
| `playerKnockbackMap`     |                          | [IVector3d](/Vanilla/World/IVector3d/)\[[IPlayer](/Vanilla/Players/IPlayer/)\] | A map of players in the explosion area mapped to their respective knockbacks taken from the explosion.                                                        |

## ZenMethods
 * `clearAffectedBlockPositions()` - clears the list of affected block positions
 * `onExplosionStart(IWorld world)` - returns a `bool` that is the result of the [ExplosionStart](/Vanilla/Events/Events/ExplosionStart/) event in the specified world, so this should be called if you want to use logic to possibly cancel your explosion before detonating it manually.
 * `doExplosionA()` - performs the first part of the explosion; this includes entity damage, entity knockback, and `affectedBlockPositions` assignment.
 * `doExplosionB(bool spawnParticles)` - performs the second part of the explosion; this includes sounds, particles, block destruction/dropping, and fire creation.

# IDamageSource

An IDamageSource object is the source of damage to an entity.

## Importing the class

It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.damage.IDamageSource;`

## Zengetters and ZenMethods without parameters

| ZenGetter         | ZenMethod                         | Return Type                            |
| ----------------- | --------------------------------- | -------------------------------------- |
| harmInCreative    | canHarmInCreative();              | bool型                                  |
| damageType        | getDamageType();                  | string                                 |
| hungerDamage      | getHungerDamage();                | float型                                 |
| immediateSource   | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/)  |
| trueSource        | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/)  |
| creativePlayer    | isCreativePlayer();               | bool                                   |
| damageLocation    | getDamageLocation();              | [IVector3d](/Vanilla/World/IVector3d/) |
| damageAbsolute    | isDamageAbsolute();               | bool                                   |
| damageUnblockable | isDamageUnblockable();            | bool                                   |
| difficultyScaled  | isDifficultyScaled();             | bool                                   |
| explosion         | isExplosion();                    | bool                                   |
| fireDamage        | isFireDamage();                   | bool                                   |
| magicDamage       | isMagicDamage();                  | bool                                   |
| projectile        | isProjectile();                   | bool                                   |
|                   | setDamageAllowedInCreativeMode(); | IDamageSource                          |
|                   | setDamageBypassesArmor();         | IDamageSource                          |
|                   | setDamageIsAbsolute();            | IDamageSource                          |
|                   | setDifficultyScaled();            | IDamageSource                          |
|                   | setExplosion();                   | IDamageSource                          |
|                   | setFireDamage();                  | IDamageSource                          |
|                   | setMagicDamage();                 | IDamageSource                          |
|                   | setProjectile();                  | IDamageSource                          |

## ZenMethod with Parameters

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → Returns a string containing the death message for the entity if it dies by this damageSource

## Getting an IDamageSource Object

You can either use these methods or the [Damage Source Bracket Handler](/Vanilla/Brackets/Bracket_DamageSource/).

```zenscript
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity trueSource, IEntityLivingBase immediateSource)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity trueSource, @Optional IEntity immediateSource)
crafttweaker.damage.IDamageSource.createIndirectMagicDamage(IEntity trueSource, @Optional IEntity immediateSource)
crafttweaker.damage.IDamageSource.createThornsDamage(IEntity source)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase trueSource)
crafttweaker.damage.IDamageSource.createOfType(String type)
crafttweaker.damage.IDamageSource.createEntityDamage(String type, IEntity source)
crafttweaker.damage.IDamageSource.createIndirectDamage(String type, IEntity trueSource, @Optional IEntity immediateSource)

//Preregistered Damage Types
crafttweaker.damage.IDamageSource.IN_FIRE()
crafttweaker.damage.IDamageSource.LIGHTNING_BOLT()
crafttweaker.damage.IDamageSource.ON_FIRE()
crafttweaker.damage.IDamageSource.LAVA()
crafttweaker.damage.IDamageSource.HOT_FLOOR()
crafttweaker.damage.IDamageSource.IN_WALL()
crafttweaker.damage.IDamageSource.CRAMMING()
crafttweaker.damage.IDamageSource.DROWN()
crafttweaker.damage.IDamageSource.STARVE()
crafttweaker.damage.IDamageSource.CACTUS()
crafttweaker.damage.IDamageSource.FALL()
crafttweaker.damage.IDamageSource.FLY_INTO_WALL()
crafttweaker.damage.IDamageSource.OUT_OF_WORLD()
crafttweaker.damage.IDamageSource.GENERIC()
crafttweaker.damage.IDamageSource.MAGIC()
crafttweaker.damage.IDamageSource.WITHER()
crafttweaker.damage.IDamageSource.ANVIL()
crafttweaker.damage.IDamageSource.FALLING_BLOCK()
crafttweaker.damage.IDamageSource.DRAGON_BREATH()
crafttweaker.damage.IDamageSource.FIREWORKS()
```
# IDamageSource

An IDamageSource object is the source of damage to an entity.  

## Importing the class
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.damage.IDamage`


## Zengetters and ZenMethods without parameters

| ZenGetter        | ZenMethod                         | Return Type                          |
|------------------|-----------------------------------|--------------------------------------|
| harmInCreative   | canHarmInCreative();              | bool                                 |
| damageType       | getDamageType();                  | string                               |
| hunderDamage     | getHungerDamage();                | float                                |
| immediateSource  | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource       | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| creativePlayer   | isCreativePlayer();               | bool                                 |
| damageAbsolute   | isDamageAbsolute();               | bool                                 |
| difficultyScaled | isDifficultyScaled();             | bool                                 |
| explosion        | isExplosion();                    | bool                                 |
| fireDamage       | isFireDamage();                   | bool                                 |
| magicDamage      | isMagicDamage();                  | bool                                 |
| projectile       | isProjectile();                   | bool                                 |
|                  | setDamageAllowedInCreativeMode(); | IDamageSource                        |
|                  | setDamageBypassesArmor();         | IDamageSource                        |
|                  | setDamageIsAbsolute();            | IDamageSource                        |
|                  | setDifficultyScaled();            | IDamageSource                        |
|                  | setExplosion();                   | IDamageSource                        |
|                  | setFireDamage();                  | IDamageSource                        |
|                  | setMagicDamage();                 | IDamageSource                        |
|                  | setProjectile();                  | IDamageSource                        |

## ZenMethod with Parameters

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → Returns a string containing the death message for the entity if it dies by this damageSource


## Getting an IDamageSource Object

You can either use these methods or the [Damage Source Bracket Handler](/Vanilla/Brackets/Bracket_DamageSource/).


```kotlin
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase indirectEntityIn)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity source, @Optional IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createIndirectMagicDamage(IEntity source, @Optional IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createThornsDamage(IEntity source)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase entityLivingBaseIn)
crafttweaker.damage.IDamageSource.createOfType(String type)

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
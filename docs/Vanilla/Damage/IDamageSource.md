# IDamageSource

An IDamageSource object is the source of damage to an entity.  

## Importing the class
It might be required to [import](/AdvancedFunctions/Import) the class to avoid errors.  
`import crafttweaker.damage.IDamage`


## Zengetters and ZenMethods without parameters

| ZenGetter        | ZenMethod                         | Return Type                          |
|------------------|-----------------------------------|--------------------------------------|
| harmInCreative   | canHarmInCreative();              | bool                                 |
| damageType       | getDamageType();                  | string                               |
| hunderDamage     | getHungerDamage();                | float                                |
| immediateSource  | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity) |
| trueSource       | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity) |
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

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity) entity); → Returns a string containing the death message for the entity if it dies by this damageSource
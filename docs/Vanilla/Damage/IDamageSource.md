# 伤害来源

An IDamageSource object is the source of damage to an entity.伤害来源对象是实体受到的伤害的来源

## 导入相关包
有时需要[函数导入](/AdvancedFunctions/Import)相关包以避免错误
`import crafttweaker.damage.IDamage`


## Zengetters and ZenMethods without parameters

| ZenGetter        | ZenMethod                         | 返回类型                              |
|------------------|-----------------------------------|--------------------------------------|
| harmInCreative   | canHarmInCreative();              | 布尔值                                |
| damageType       | getDamageType();                  | 字符串                                |
| hunderDamage     | getHungerDamage();                | 浮点数                                |
| immediateSource  | getImmediateSource();             | [实体](/Vanilla/Entities/IEntity)     |
| trueSource       | getTrueSource();                  | [实体](/Vanilla/Entities/IEntity)     |
| creativePlayer   | isCreativePlayer();               | 布尔值                                |
| damageAbsolute   | isDamageAbsolute();               | 布尔值                                |
| difficultyScaled | isDifficultyScaled();             | 布尔值                                |
| explosion        | isExplosion();                    | 布尔值                                |
| fireDamage       | isFireDamage();                   | 布尔值                                |
| magicDamage      | isMagicDamage();                  | 布尔值                                |
| projectile       | isProjectile();                   | 布尔值                                |
|                  | setDamageAllowedInCreativeMode(); | 伤害来源                              |
|                  | setDamageBypassesArmor();         | 伤害来源                              |
|                  | setDamageIsAbsolute();            | 伤害来源                              |
|                  | setDifficultyScaled();            | 伤害来源                              |
|                  | setExplosion();                   | 伤害来源                              |
|                  | setFireDamage();                  | 伤害来源                              |
|                  | setMagicDamage();                 | 伤害来源                              |
|                  | setProjectile();                  | 伤害来源                              |

## 需要传入数据的ZenMethod

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity) entity); → Returns a string containing the death message for the entity if it dies by this damageSource


## Getting an IDamageSource Object

You can either use these methods or the [Damage Source Bracket Handler](/Vanilla/Brackets/Bracket_DamageSource).


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

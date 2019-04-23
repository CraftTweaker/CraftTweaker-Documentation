# IDamageSource

IDamageSource 对象是实体受伤的来源。

## 导入类

可能需要 [导入](/AdvancedFunctions/Import/) 类来避免错误。  
`import crafttweaker.damage.IDamage`

## Zengetters 和无参数的 ZenMethods

| ZenGetter        | ZenMethod                         | 返回值类型                                 |
| ---------------- | --------------------------------- | ------------------------------------- |
| harmInCreative   | canHarmInCreative();              | bool                                  |
| damageType       | getDamageType();                  | string                                |
| hunderDamage     | getHungerDamage();                | float                                 |
| immediateSource  | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource       | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| creativePlayer   | isCreativePlayer();               | bool                                  |
| damageAbsolute   | isDamageAbsolute();               | bool                                  |
| difficultyScaled | isDifficultyScaled();             | bool                                  |
| explosion        | isExplosion();                    | bool                                  |
| fireDamage       | isFireDamage();                   | bool                                  |
| magicDamage      | isMagicDamage();                  | bool                                  |
| projectile       | isProjectile();                   | bool                                  |
|                  | setDamageAllowedInCreativeMode(); | IDamageSource                         |
|                  | setDamageBypassesArmor();         | IDamageSource                         |
|                  | setDamageIsAbsolute();            | IDamageSource                         |
|                  | setDifficultyScaled();            | IDamageSource                         |
|                  | setExplosion();                   | IDamageSource                         |
|                  | setFireDamage();                  | IDamageSource                         |
|                  | setMagicDamage();                 | IDamageSource                         |
|                  | setProjectile();                  | IDamageSource                         |

## 带参数的ZenMethod

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → 如果实体死于这个伤害源（damageSource），返回一个包含死亡信息的字符串

## 获取 IDamageSource 对象

你也可以使用这些方法或 [Damage Source Bracket Handler](/Vanilla/Brackets/Bracket_DamageSource/)。

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
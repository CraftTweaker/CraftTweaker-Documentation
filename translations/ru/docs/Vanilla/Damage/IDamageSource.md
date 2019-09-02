# IDamageSource

Объект IDamageSource является источником урона сущности.

## Импорт класса

Может понадобиться [импортировать](/AdvancedFunctions/Import/) класс для избежания ошибок:  
`import crafttweaker.damage.IDamage`

## Геттеры и методы ZenScript без параметров

| Геттер           | Метод                             | Возвращаемый тип                      |
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

## Методы ZenScript с параметрами

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → Возвращает строку, содержащую сообщение о смерти сущности, если она умирает из-за этого источника урона.

## Получение объекта IDamageSource

Вы можете воспользоваться методами ниже либо [обработчиком скобок для источника урона](/Vanilla/Brackets/Bracket_DamageSource/).

```kotlin
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase indirectEntityIn)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity source, @Optional IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createIndirectMagicDamage(IEntity source, @Optional IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createThornsDamage(IEntity source)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase entityLivingBaseIn)
crafttweaker.damage.IDamageSource.createOfType(String type)

//Предварительно зарегистрированные источники урона
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
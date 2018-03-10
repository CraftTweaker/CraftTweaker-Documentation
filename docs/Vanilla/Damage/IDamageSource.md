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

- getDeathMessage([实体](/Vanilla/Entities/IEntity) entity); → 返回被这种伤害杀死的生物的死亡信息

# IDamageSource

IDamageSource オブジェクトは、エンティティに損害を与える原因です。

## クラスのインポート

エラーを避けるには、 [クラスを](/AdvancedFunctions/Import/) インポートする必要があります。  
`import crafttweaker.damage.IDamageSource`

## パラメータのないZengettersとZenMethods

| ZenGetter       | ZenMethod                         | Return Type                           |
| --------------- | --------------------------------- | ------------------------------------- |
| harmInCreative  | canHarmInCreative();              | bool型                                 |
| ダメージタイプ         | getDamageType();                  | 文字列                                   |
| hunderDamage    | getHungerDamage();                | float型                                |
| immediateSource | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource      | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| creativePlayer  | isCreativePlayer();               | bool                                  |
| damageAbsolute  | isDamageAbsolute();               | bool                                  |
| 難易度スケール         | isDifficultyScaled();             | bool                                  |
| 爆発              | isExplosion();                    | bool                                  |
| 火災ダメージ          | isFireDamage();                   | bool                                  |
| magicDamage     | isMagicDamage();                  | bool                                  |
| 発射物             | isProjectile();                   | bool                                  |
|                 | setDamageAllowedInCreativeMode(); | IDamageSource                         |
|                 | setDamageBypassesArmor();         | IDamageSource                         |
|                 | setDamageIsAbsolute();            | IDamageSource                         |
|                 | setDifficultyScaled();            | IDamageSource                         |
|                 | setExplosion();                   | IDamageSource                         |
|                 | setFireDamage();                  | IDamageSource                         |
|                 | setMagicDamage();                 | IDamageSource                         |
|                 | setProjectile();                  | IDamageSource                         |

## ZenMethod with Parameters

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → このダメージソースによって死亡した場合、エンティティのデッセージメッセージを含む文字列を返します。

## IDamageSource オブジェクトの取得

これらの方法または [ダメージ元ブラケットハンドラ](/Vanilla/Brackets/Bracket_DamageSource/)を使用できます。

```zenscript
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
# IDamageSource

Un oggetto IDamageSource è la fonte di danno a un'entità.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.damage.IDamageSource`

## Zengetters e ZenMethods senza parametri

| ZenGetter         | ZenMethod                         | Tipo Di Reso                          |
| ----------------- | --------------------------------- | ------------------------------------- |
| harmInCreative    | canHarmInCreative();              | bool                                  |
| damageType        | getDamageType();                  | stringa                               |
| hunderDamage      | getHungerDamage();                | galleggiante                          |
| immediateSource   | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource        | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| creativePlayer    | isCreativePlayer();               | bool                                  |
| dannoAssoluto     | isDamageAbsolute();               | bool                                  |
| DifficoltàScalata | isDifficoltyScaled();             | bool                                  |
| esplosione        | isExplosion();                    | bool                                  |
| incendioDanno     | isFireDamage();                   | bool                                  |
| magicDamage       | isMagicDamage();                  | bool                                  |
| proiettile        | isProjectile();                   | bool                                  |
|                   | setDamageAllowedInCreativeMode(); | IDamageSource                         |
|                   | setDamageBypassesArmor();         | IDamageSource                         |
|                   | setDamageIsAbsolute();            | IDamageSource                         |
|                   | setDifficoltàScalata();           | IDamageSource                         |
|                   | setExplosion();                   | IDamageSource                         |
|                   | setFireDamage();                  | IDamageSource                         |
|                   | setMagicDamage();                 | IDamageSource                         |
|                   | setProjectile();                  | IDamageSource                         |

## ZenMethod con parametri

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → Restituisce una stringa contenente il messaggio di morte per l'entità se muore da questo dannoFonte

## Ottenere un oggetto IDamageSource

È possibile utilizzare questi metodi o il [Gestore parentesi sorgente danni](/Vanilla/Brackets/Bracket_DamageSource/).

```zenscript
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase indirect EntityIn)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity source, @Optional IEntity indirect EntityIn)
crafttweaker.damage.IDamageSource.createIndirectMagicDamage(IEntity source, @Optional IEntity indirect EntityIn)
crafttweaker. amage.IDamageSource.createThornsDamage(IEntity source)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase entityLivingBaseIn)
crafttweaker.damage.IDamageSource.createOfType(String type)

//Preregistered Damage Types
crafttweaker.damage.IDamageSource.IN_FIRE()
crafttweaker.damage.IDamageSource.LIGHTNING_BOLT()
crafttweaker.damage.IDamageSource. N_FIRE()
crafttweaker.damage.IDamageSource.LAVA()
crafttweaker.damage.IDamageSource.HOT_FLOOR()
crafttweaker.damage.IDamageSource.IN_WALL()
crafttweaker.damage.IDamageSource.CRAMMING()
crafttweaker.damage.IDamageSource.DROWN()
crafttweaker.damage.IDamageSource.STARVE()
crafttweaker.damage.IDamageSource.CACTUS()
crafttweaker.IDamageSource.FALL()
crafttweaker.damage. DamageSource.FLY_INTO_WALL()
crafttweaker.damage.IDamageSource.OUT_OF_WORLD()
crafttweaker.damage.IDamageSource.GENERIC()
crafttweaker.damage.IDamageSource.MAGIC()
crafttweaker.damage.IDamageSource.WITHER()
crafttweaker.damage.IDamageSource.ANVIL()
crafttweaker.damage.IDamageSource.FALLING_BLOCK()
crafttweaker.damage.IDamageSource.DRAGON_BREATH()
crafttweaker.damage.IDamageSource.IDamageSource.FIREWORS() 
 crafttWORKS() 
 crafttweaker.damag
```
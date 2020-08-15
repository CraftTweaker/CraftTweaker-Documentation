# IDamageSource

Ein IDamageSource-Objekt ist die Schadensquelle einer Entität.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`Crafttweaker.damage.IDamageSource`

## Zengetters und ZenMethoden ohne Parameter

| ZenGetter          | ZenMethode                        | Rückgabetyp                           |
| ------------------ | --------------------------------- | ------------------------------------- |
| harmInCreative     | canHarmInCreative();              | bool                                  |
| schadentyp         | getDamageType();                  | string                                |
| hunderDamage       | getHungerDamage();                | float                                 |
| immediateSource    | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource         | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| kreativer Spieler  | isCreativePlayer();               | bool                                  |
| absoluter Schaden  | isDamageAbsolute();               | bool                                  |
| schwierig skaliert | isDifficultyScaled();             | bool                                  |
| explosion          | isExplosion();                    | bool                                  |
| feuerschaden       | isFireDamage();                   | bool                                  |
| magischer Schaden  | isMagicDamage();                  | bool                                  |
| projektil          | isProjectile();                   | bool                                  |
|                    | setDamageAllowedInCreativeMode(); | IDamageSource                         |
|                    | setDamageBypassesRüstung();       | IDamageSource                         |
|                    | setDamageIsAbsolute();            | IDamageSource                         |
|                    | setDifficultyScaled();            | IDamageSource                         |
|                    | setExplosion();                   | IDamageSource                         |
|                    | setFireDamage();                  | IDamageSource                         |
|                    | setMagicDamage();                 | IDamageSource                         |
|                    | setProjectile();                  | IDamageSource                         |

## ZenMethode mit Parametern

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) Entity); → Gibt eine Zeichenfolge zurück, die die Todesmeldung für die Entität enthält, wenn sie an dieser Schadensquelle stirbt

## Ein IDamageSource-Objekt wird geladen

Du kannst entweder diese Methoden verwenden oder den [Klammerhandler](/Vanilla/Brackets/Bracket_DamageSource/).

```zenscript
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase indirectEntityIn)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity source, @Optionale IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createIndirectMagicDamageEntity source, @Optional IEntity IndirectEntityIn)
crafttweaker. amage.IDamageSource.createThornsDamage(IEntity source)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase entityLivingBaseIn)
crafttweaker.damage.IDamageSource.createOfType(String type)

//Preregistered Schadentypen
crafttweaker.damageSource.IN_FIRE()
crafttweaker.IDamageSource.IDamageSource.LIGHTNING_BOLT()
crafttweaker.damage.IDamageSource. N_FIRE()
crafttweaker.damage.IDamageSource.LAVA()
crafttweaker.damage.damage.IDamageSource.HOT_FLOOR()
crafttweaker.damage.IDamageSource.IN_WALL()
crafttweaker.damage.IDamageSource.CRAMMING()
crafttweaker.damage.DamageSource.DROWN()
crafttweaker.damage.IDamageSource.STARVE()
crafttweaker.damageSource.CACTUS()
crafttweaker.damage.DamageSource.IDamageSource.FALL()
crafttweaker.damage. DamageSource.FLY_INTO_WALL()
crafttweaker.damage.IDamageSource.OUT_OF_WORLD()
crafttweaker.damage.IDamageSource.GENERIC()
crafttweaker.damage.damageSource.MAGIC()
crafttweaker.damage.damageSource.WITHER()
crafttweaker.damage.IDamageSource.ANVIL()
craftweaker.damageSource.damageSource.FALLING_BLOCK()
crafttweaker.damageSource.IDamageSource.DRAGON_BREATH()
crafttweaker.IDamageSource.IREWORKS() 
 crafttweaker.DamageSource.
```
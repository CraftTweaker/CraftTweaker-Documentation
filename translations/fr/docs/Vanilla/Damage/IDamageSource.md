# IDamageSource

Un objet IDamageSource est la source de dommages à une entité.

## Importation de la classe

Il peut être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.damage.IDamageSource`

## Zengetters et ZenMethods sans paramètres

| ZenGetter                   | Méthode Zen                         | Type de retour                        |
| --------------------------- | ----------------------------------- | ------------------------------------- |
| incréatif                   | canHarmInCreative();                | booléen                               |
| Type de dommage             | getDamageType();                    | chaîne de caractères                  |
| hunderDamage                | format@@0 getHungerDomage();        | flottant                              |
| format@@0 immediateSource   | getImmediateSource();               | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource                  | getTrueSource();                    | [IEntity](/Vanilla/Entities/IEntity/) |
| CréativePlayer              | isCreativePlayer();                 | booléen                               |
| Absolu                      | isDamageAbsolute();                 | booléen                               |
| Difficulté mise à l'échelle | isDifficultyScale();                | booléen                               |
| explosion                   | isExplosion();                      | booléen                               |
| dégâts de feu               | isFireDamage();                     | booléen                               |
| Dégâts magiques             | isMagicDamage();                    | booléen                               |
| projectile                  | isProjectile();                     | booléen                               |
|                             | setDamageAllowedInCreativeMode();   | IDamageSource                         |
|                             | format@@0 setDamageBypassesArmor(); | IDamageSource                         |
|                             | setDamageIsAbsolute();              | IDamageSource                         |
|                             | format@@0 setDifficultyScaled();    | IDamageSource                         |
|                             | setExplosion();                     | IDamageSource                         |
|                             | setFireDamage();                    | IDamageSource                         |
|                             | setMagicDamage();                   | IDamageSource                         |
|                             | setProjectile();                    | IDamageSource                         |

## Méthode Zen avec les paramètres

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) entity); → Renvoie une chaîne contenant le message de mort de l'entité si elle meurt par cette source de dommage

## Obtenir un objet IDamageSource

Vous pouvez soit utiliser ces méthodes soit le [Dommage Source Bracket Handler](/Vanilla/Brackets/Bracket_DamageSource/).

```zenscript
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase indirectEntityIn)
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer player)
crafttweaker.damage.IDamageSource.createThrownDamage(IEntity source, @Optional IEntity indirectEntityIn)
crafttweaker.damage.IDamageSource.createIndirectMagicDamage(IEntity source, @Optional IEntity indirectEntityIn)
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
crafttweaker.damage.IDamageSource.FALL()
crafttweaker.damage. DamageSource.FLY_INTO_WALL()
crafttweaker.damage.IDamageSource.OUT_OF_WORLD()
crafttweaker.damage.IDamageSource.GENERIC()
crafttweaker.damage.IDamageSource.MAGIC()
crafttweaker.damage.IDamageSource.WITHER()
crafttweaker.damage.IDamageSource.ANVIL()
crafttweaker.damage.IDamage.IDamageSource.FALLING_BLOCK()
crafttweaker.damage.IDamSource.DRAGON_BREAT()
crafttweaker.damage.IDamageSource.FIREWORKS()
```
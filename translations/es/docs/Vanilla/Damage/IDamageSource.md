# Fuente del ID

Un objeto IDamageSource es la fuente de daño a una entidad.

## Importar la clase

Podría ser necesario [importar](/AdvancedFunctions/Import/) la clase para evitar errores.  
`importar crafttweaker.damage.IDamageSource`

## Zengetters y ZenMethods sin parámetros

| ZenGetter        | Método                                 | Tipo de devolución                    |
| ---------------- | -------------------------------------- | ------------------------------------- |
| harmInCreative   | canHarmInCreative();                   | pluma                                 |
| tipo de daño     | getDamageType();                       | cadena                                |
| hunderDamage     | obtenerDaño er();                      | flotante                              |
| Fuente inmediata | getInmediateSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource       | getTrueSource();                       | [IEntity](/Vanilla/Entities/IEntity/) |
| creativoJugador  | isCreativePlayer();                    | pluma                                 |
| daño absoluto    | isDamageAbsolute();                    | pluma                                 |
| escalada difícil | isDificultad();                        | pluma                                 |
| explosión        | isExplosion();                         | pluma                                 |
| daño de fuego    | isFireDamage();                        | pluma                                 |
| daño mágico      | isMagicDamage();                       | pluma                                 |
| proyectil        | isProjectile();                        | pluma                                 |
|                  | setDamagePermitido en modo creativo(); | Fuente del ID                         |
|                  | setDamageBypassesArmor();              | Fuente del ID                         |
|                  | setDamageIsAbsolute();                 | Fuente del ID                         |
|                  | setDifficultyScaled();                 | Fuente del ID                         |
|                  | setExplosion();                        | Fuente del ID                         |
|                  | setFireDamage();                       | Fuente del ID                         |
|                  | setMagicDamage();                      | Fuente del ID                         |
|                  | setProyectile();                       | Fuente del ID                         |

## ZenMethod con parámetros

- getDeathMessage([entidad IEntity](/Vanilla/Entities/IEntity/) ); → Devuelve una cadena que contiene el mensaje de muerte para la entidad si muere por este dañoFuente

## Obteniendo un objeto IDamageSource

Puedes usar estos métodos o el [Manejador de Bracket Source Daño](/Vanilla/Brackets/Bracket_DamageSource/).

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
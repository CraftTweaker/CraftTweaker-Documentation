# Źródło ID

Obiekt IDamageSource jest źródłem uszkodzeń jednostki.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuj crafttweaker.damage.IDamageSource`

## Zengetters i ZenMethods bez parametrów

| ZenGetter               | Metoda ZenMethod                  | Typ zwrotu                            |
| ----------------------- | --------------------------------- | ------------------------------------- |
| szkodliwy               | kanHarmInCreative();              | bool                                  |
| Typ obrażeń             | getDamageType();                  | ciąg znaków                           |
| hunderDamage            | getHungerDamage();                | zmiennoprzecinkowe                    |
| natychmiastowe Źródło   | getImmediateSource();             | [IEntity](/Vanilla/Entities/IEntity/) |
| trueSource              | getTrueSource();                  | [IEntity](/Vanilla/Entities/IEntity/) |
| twórcaGracz             | isCreativePlayer();               | bool                                  |
| Uszkodzenie Bezwzględne | isDamageAbsolute();               | bool                                  |
| trudność Skalowana      | isDifficultyScaled();             | bool                                  |
| eksplozja               | isExplosion();                    | bool                                  |
| Obrażenia ognia         | isFireDamage();                   | bool                                  |
| obrażenia magiczne      | isMagicDamage();                  | bool                                  |
| pocisk                  | isProjectile();                   | bool                                  |
|                         | setDamageAllowedInCreativeMode(); | Źródło ID                             |
|                         | setDamageBypassesArmor();         | Źródło ID                             |
|                         | setDamageIsAbsolute();            | Źródło ID                             |
|                         | setDifficultyScaled();            | Źródło ID                             |
|                         | setExplosion();                   | Źródło ID                             |
|                         | setFireDamage();                  | Źródło ID                             |
|                         | setMagicDamage();                 | Źródło ID                             |
|                         | setPocisk();                      | Źródło ID                             |

## Metoda ZenMethod z parametrami

- getDeathMessage([IEntity](/Vanilla/Entities/IEntity/) ); → Zwraca ciąg zawierający wiadomość śmierci dla jednostki, jeśli umrze przez to uszkodzenieŹródło

## Pobieranie obiektu IDamageSource

Możesz użyć tych metod lub [Obrażeń Obrażeń Handler](/Vanilla/Brackets/Bracket_DamageSource/).

```zenscript
crafttweaker.damage.IDamageSource.createMobDamage(IEntityLivingBase mob)
crafttweaker.damage.IDamageSource.createIndirectDamage(IEntity source, IEntityLivingBase pośredniePodmioty
crafttweaker.damage.IDamageSource.createPlayerDamage(IPlayer gracz)
crafttweaker.IDamageSource.createThrownDamage(Źródło: @Opcjonalny podmiot Ipodmiotu)
craftweaker.damage.IDamageSource.createIndirectMagicDamage(podmiot źródło, @Optional IEntity pośrednieEntityIn)
crafttweaker. amage.IDamageSource.createThornsDamage(Źródło podmiotu)
crafttweaker.damage.IDamageSource.createExplosionDamage(@Optional IEntityLivingBase entityLivingBaseIn)
crafttweaker.damage.IDamageSource.createOfType(typ ciągu)

//Wstępnie zarejestrowane typy obrażeń
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
crafttweaker.damage.IDamageSource.ENERIC()
crafttweaker.damage.IDamageSource.MAGIC()
crafttweaker.damage.IDamageSource.WITHER()
crafttweaker.damage.IDamageSource.ANVIL()
crafttweaker.damage.IDamageSource.FALLING_BLOCK()
crafttweaker.damage.IDamageSource.DRAGON_BREATH()
crafttweaker.damage.IDamageSource.FIREWORKS()
```
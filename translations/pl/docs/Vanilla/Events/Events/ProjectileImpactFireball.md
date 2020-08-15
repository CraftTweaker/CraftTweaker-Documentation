# ProjectileImpactFireball

This event is fired whenever a fireball impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

Acceleration values from the fireball entity are available through zengetters.

## Importowanie klasy
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactFireballEvent;`

## Rozszerzenie IEntityEvent
ProjectileImpactFireball Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters i ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter       | ZenSetter       | Typ                                                       |
| --------------- | --------------- | --------------------------------------------------------- |
| `fireball`      |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `shooter`       |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `accelerationX` | `accelerationX` | podwójne                                                  |
| `accelerationY` | `accelerationY` | podwójne                                                  |
| `accelerationZ` | `accelerationZ` | podwójne                                                  |

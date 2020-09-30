# ProjectileImpactFireball

This event is fired whenever a fireball impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

Acceleration values from the fireball entity are available through zengetters.

## Diese Klasse importieren
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactFireballEvent;`

## Extending IEntityEvent
ProjectileImpactFireball Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters and ZenSetters

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter       | ZenSetter       | Type                                                      |
| --------------- | --------------- | --------------------------------------------------------- |
| `fireball`      |                 | [IEntity](/Vanilla/Entities/IEntity/)                     |
| `shooter`       |                 | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) |
| `accelerationX` | `accelerationX` | double                                                    |
| `accelerationY` | `accelerationY` | double                                                    |
| `accelerationZ` | `accelerationZ` | double                                                    |

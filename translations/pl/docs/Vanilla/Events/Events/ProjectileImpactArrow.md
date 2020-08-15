# ProjectileImpactArrow

This event is fired whenever an arrow projectile impacts an entity but before damage, etc, is calculated. It is **cancelable**, and if canceled, the impact will not be processed.

Various values from the arrow entity are available through zengetters, and can be modified in order to adjust damage, knockback strength, pickup status, and determine (or force) a critical hit.

## Importowanie klasy
It might be required to [import](/AdvancedFunctions/Import/) the class to avoid errors.  
`import crafttweaker.event.ProjectileImpactArrowEvent;`

## Rozszerzenie IEntityEvent
ProjectileImpactArrow Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IProjectileEvent](/Vanilla/Events/Events/IProjectileEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters i ZenSetters

Z wydarzenia można uzyskać następujące informacje:

| ZenGetter      | ZenSetter           | Typ                                   |
| -------------- | ------------------- | ------------------------------------- |
| `arrow`        |                     | [IEntity](/Vanilla/Entities/IEntity/) |
| `shooter`      |                     | [IEntity](/Vanilla/Entities/IEntity/) |
| `obrażenia`    | `obrażenia`         | podwójne                              |
|                | `knockbackStrength` | int (setter only, no getter)          |
| `isCritical`   | `isCritical`        | boolean                               |
| `pickupStatus` |                     | Ciąg znaków                           |

## Additional methods

- `setPickupDisallowed()`

Prevents the arrow from being picked up under any circumstances.

- `setPickupAllowed()`

Allows the arrow to be picked up from where the entity landed.

- `setPickupCreative()`

Only allows the arrow to be picked up if the player is in creative mode.

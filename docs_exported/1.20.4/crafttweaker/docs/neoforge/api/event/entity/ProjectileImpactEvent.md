# ProjectileImpactEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.ProjectileImpactEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.ProjectileImpactEvent>(event => {
    println("ProjectileImpactEvent ran!");
});
```


## Supertype

ProjectileImpactEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in ProjectileImpactEvent

## Implemented Interfaces
ProjectileImpactEvent implements the following interfaces. That means all methods defined in these interfaces are also available in ProjectileImpactEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|    Name    |                             Type                             | Has Getter | Has Setter |
|------------|--------------------------------------------------------------|------------|------------|
| hitResult  | [HitResult](/vanilla/api/util/HitResult)                     | true       | false      |
| projectile | [Projectile](/vanilla/api/entity/type/projectile/Projectile) | true       | false      |


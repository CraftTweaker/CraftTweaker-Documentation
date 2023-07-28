# ProjectileImpactEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.ProjectileImpactEvent;
```


## Extending EntityEvent

ProjectileImpactEvent extends [EntityEvent](/forge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/forge/api/event/entity/EntityEvent) are also available in ProjectileImpactEvent

## Properties

|    Name    |                             Type                             | Has Getter | Has Setter |
|------------|--------------------------------------------------------------|------------|------------|
| hitResult  | [HitResult](/vanilla/api/util/HitResult)                     | true       | false      |
| projectile | [Projectile](/vanilla/api/entity/type/projectile/Projectile) | true       | false      |


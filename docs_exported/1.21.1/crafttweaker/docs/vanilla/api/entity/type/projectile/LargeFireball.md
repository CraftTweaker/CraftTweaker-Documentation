# LargeFireball

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.LargeFireball;
```


## Extending Fireball

LargeFireball extends [Fireball](/vanilla/api/entity/type/projectile/Fireball). That means all methods available in [Fireball](/vanilla/api/entity/type/projectile/Fireball) are also available in LargeFireball

## Constructors


```zenscript
new LargeFireball(level as Level, shooter as LivingEntity, direction as Vec3, explosionPower as int) as LargeFireball
new LargeFireball(level, shooter, new Vec3(1, 2, 3), 1);
```
|   Parameter    |                       Type                       |                           Description                           |
|----------------|--------------------------------------------------|-----------------------------------------------------------------|
| level          | [Level](/vanilla/api/world/Level)                | The level the entity is in.                                     |
| shooter        | [LivingEntity](/vanilla/api/entity/LivingEntity) | The entity that created the fireball, used to get the position. |
| direction      | [Vec3](/vanilla/api/util/math/Vec3)              | The direction that the skull is moving in                       |
| explosionPower | int                                              | The explosion power of this fireball                            |




# SmallFireball

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.SmallFireball;
```


## Extending Fireball

SmallFireball extends [Fireball](/vanilla/api/entity/type/projectile/Fireball). That means all methods available in [Fireball](/vanilla/api/entity/type/projectile/Fireball) are also available in SmallFireball

## Constructors


```zenscript
new SmallFireball(level as Level, shooter as LivingEntity, direction as Vec3) as SmallFireball
new SmallFireball(level, shooter, new Vec3(1, 2, 3));
```
| Parameter |                       Type                       |                           Description                           |
|-----------|--------------------------------------------------|-----------------------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                | The level this entity is in.                                    |
| shooter   | [LivingEntity](/vanilla/api/entity/LivingEntity) | The entity that created the fireball, used to get the position. |
| direction | [Vec3](/vanilla/api/util/math/Vec3)              | The direction that the skull is moving in                       |



```zenscript
new SmallFireball(level as Level, x as double, y as double, z as double, direction as Vec3) as SmallFireball
new SmallFireball(level, 0, 1, 2, new Vec3(1, 2, 3));
```
| Parameter |                Type                 |                Description                |
|-----------|-------------------------------------|-------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)   | The level this entity is in.              |
| x         | double                              | The x position of the entity.             |
| y         | double                              | The y position of the entity.             |
| z         | double                              | The z position of the entity.             |
| direction | [Vec3](/vanilla/api/util/math/Vec3) | The direction that the skull is moving in |




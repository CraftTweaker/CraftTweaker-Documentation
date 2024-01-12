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
new SmallFireball(level as Level, shooter as LivingEntity, xPower as double, yPower as double, zPower as double) as SmallFireball
new SmallFireball(level, shooter, 0, 1, 2);
```
| Parameter |                       Type                       |                           Description                           |
|-----------|--------------------------------------------------|-----------------------------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                | The level this entity is in.                                    |
| shooter   | [LivingEntity](/vanilla/api/entity/LivingEntity) | The entity that created the fireball, used to get the position. |
| xPower    | double                                           | The x power of the entity.                                      |
| yPower    | double                                           | The y power of the entity.                                      |
| zPower    | double                                           | The z power of the entity.                                      |



```zenscript
new SmallFireball(level as Level, x as double, y as double, z as double, xPower as double, yPower as double, zPower as double) as SmallFireball
new SmallFireball(level, 0, 1, 2, 3, 3, 3);
```
| Parameter |               Type                |          Description          |
|-----------|-----------------------------------|-------------------------------|
| level     | [Level](/vanilla/api/world/Level) | The level this entity is in.  |
| x         | double                            | The x position of the entity. |
| y         | double                            | The y position of the entity. |
| z         | double                            | The z position of the entity. |
| xPower    | double                            | The x power of the entity.    |
| yPower    | double                            | The y power of the entity.    |
| zPower    | double                            | The z power of the entity.    |




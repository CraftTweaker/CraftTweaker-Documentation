# AbstractHurtingProjectile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.AbstractHurtingProjectile;
```


## Extending Projectile

AbstractHurtingProjectile extends [Projectile](/vanilla/api/entity/type/projectile/Projectile). That means all methods available in [Projectile](/vanilla/api/entity/type/projectile/Projectile) are also available in AbstractHurtingProjectile

## Methods

:::group{name=setAccelerationPower}

Sets the accelerationPower of this projectile.

```zenscript
AbstractHurtingProjectile.setAccelerationPower(accelerationPower as double)
```

|     Parameter     |  Type  |                Description                |
|-------------------|--------|-------------------------------------------|
| accelerationPower | double | The accelerationPower of this projectile. |


:::


## Properties

|       Name        |  Type  | Has Getter | Has Setter |                  Description                   |
|-------------------|--------|------------|------------|------------------------------------------------|
| accelerationPower | double | true       | true       | Gets the accelerationPower of this projectile. |


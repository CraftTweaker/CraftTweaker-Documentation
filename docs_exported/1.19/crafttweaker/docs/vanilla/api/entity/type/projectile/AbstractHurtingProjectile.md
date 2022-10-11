# AbstractHurtingProjectile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.AbstractHurtingProjectile;
```


## Extending Projectile

AbstractHurtingProjectile extends [Projectile](/vanilla/api/entity/type/projectile/Projectile). That means all methods available in [Projectile](/vanilla/api/entity/type/projectile/Projectile) are also available in AbstractHurtingProjectile

## Methods

:::group{name=getXPower}

Gets the x power of this projectile.

Returns: The x power of this projectile.  
Return Type: double

```zenscript
// AbstractHurtingProjectile.getXPower() as double

myAbstractHurtingProjectile.getXPower();
```

:::

:::group{name=getYPower}

Gets the y power of this projectile.

Returns: The y power of this projectile.  
Return Type: double

```zenscript
// AbstractHurtingProjectile.getYPower() as double

myAbstractHurtingProjectile.getYPower();
```

:::

:::group{name=getZPower}

Gets the z power of this projectile.

Returns: The z power of this projectile.  
Return Type: double

```zenscript
// AbstractHurtingProjectile.getZPower() as double

myAbstractHurtingProjectile.getZPower();
```

:::

:::group{name=setXPower}

Sets the x power of this projectile.

```zenscript
// AbstractHurtingProjectile.setXPower(xPower as double)

myAbstractHurtingProjectile.setXPower(4);
```

| Parameter |  Type  |           Description           |
|-----------|--------|---------------------------------|
| xPower    | double | The x power of this projectile. |


:::

:::group{name=setYPower}

Sets the y power of this projectile.

```zenscript
// AbstractHurtingProjectile.setYPower(yPower as double)

myAbstractHurtingProjectile.setYPower(4);
```

| Parameter |  Type  |           Description           |
|-----------|--------|---------------------------------|
| yPower    | double | The y power of this projectile. |


:::

:::group{name=setZPower}

Sets the z power of this projectile.

```zenscript
// AbstractHurtingProjectile.setZPower(zPower as double)

myAbstractHurtingProjectile.setZPower(4);
```

| Parameter |  Type  |           Description           |
|-----------|--------|---------------------------------|
| zPower    | double | The z power of this projectile. |


:::


## Properties

|  Name  |  Type  | Has Getter | Has Setter |             Description              |
|--------|--------|------------|------------|--------------------------------------|
| xPower | double | true       | true       | Gets the x power of this projectile. |
| yPower | double | true       | true       | Gets the y power of this projectile. |
| zPower | double | true       | true       | Gets the z power of this projectile. |


# WitherSkull

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.WitherSkull;
```


## Extending AbstractHurtingProjectile

WitherSkull extends [AbstractHurtingProjectile](/vanilla/api/entity/type/projectile/AbstractHurtingProjectile). That means all methods available in [AbstractHurtingProjectile](/vanilla/api/entity/type/projectile/AbstractHurtingProjectile) are also available in WitherSkull

## Constructors


```zenscript
new WitherSkull(level as Level, owner as LivingEntity, direction as Vec3) as WitherSkull
new WitherSkull(level, entity, new Vec3(1, 2, 3));
```
| Parameter |                       Type                       |                Description                 |
|-----------|--------------------------------------------------|--------------------------------------------|
| level     | [Level](/vanilla/api/world/Level)                | The level the entity is in.                |
| owner     | [LivingEntity](/vanilla/api/entity/LivingEntity) | The owner of the skull, used for position. |
| direction | [Vec3](/vanilla/api/util/math/Vec3)              | The direction that the skull is moving in  |



## Methods

:::group{name=isDangerous}

Gets whether this skull is dangerous or not.

Returns: true if dangerous, false otherwise.  
Return Type: boolean

```zenscript
// WitherSkull.isDangerous() as boolean

myWitherSkull.isDangerous();
```

:::

:::group{name=setDangerous}

Sets whether this skull is dangerous or not.

```zenscript
// WitherSkull.setDangerous(dangerous as boolean)

myWitherSkull.setDangerous(true);
```

| Parameter |  Type   |
|-----------|---------|
| dangerous | boolean |


:::


## Properties

|    Name     |  Type   | Has Getter | Has Setter |                 Description                  |
|-------------|---------|------------|------------|----------------------------------------------|
| isDangerous | boolean | true       | true       | Gets whether this skull is dangerous or not. |


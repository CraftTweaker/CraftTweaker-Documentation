# Projectile

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.projectile.Projectile;
```


## Extending Entity

Projectile extends [Entity](/vanilla/api/entity/Entity). That means all methods available in [Entity](/vanilla/api/entity/Entity) are also available in Projectile

## Methods

:::group{name=getEffectSource}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Projectile.getEffectSource() as Entity

myProjectile.getEffectSource();
```

:::

:::group{name=getOwner}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Projectile.getOwner() as Entity

myProjectile.getOwner();
```

:::

:::group{name=setOwner}

Return Type: void

```zenscript
Projectile.setOwner(entity as Entity) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| entity    | [Entity](/vanilla/api/entity/Entity) | No Description Provided |


:::


## Properties

| Name         | Type                                                         | Has Getter | Has Setter | Description             |
| ------------ | ------------------------------------------------------------ | ---------- | ---------- | ----------------------- |
| effectSource | [Entity](/vanilla/api/entity/Entity)                         | true       | false      | No Description Provided |
| owner        | [Projectile](/vanilla/api/entity/type/projectile/Projectile) | true       | true       | No Description Provided |


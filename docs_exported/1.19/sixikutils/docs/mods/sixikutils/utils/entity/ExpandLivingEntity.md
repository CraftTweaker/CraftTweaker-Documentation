# LivingEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.LivingEntity;
```


## Extending Entity

LivingEntity extends [Entity](/mods/sixikutils/utils/entity/ExpandEntity). That means all methods available in [Entity](/mods/sixikutils/utils/entity/ExpandEntity) are also available in LivingEntity

## Methods

:::group{name=getArmorValue}

Return Type: int

```zenscript
// LivingEntity.getArmorValue() as int

myLivingEntity.getArmorValue();
```

:::

:::group{name=getArrowCount}

Return Type: int

```zenscript
// LivingEntity.getArrowCount() as int

myLivingEntity.getArrowCount();
```

:::

:::group{name=getDespawnDistance}

Return Type: int

```zenscript
// LivingEntity.getDespawnDistance() as int

myLivingEntity.getDespawnDistance();
```

:::

:::group{name=getMaxInstancesPerChunk}

Return Type: int

```zenscript
// LivingEntity.getMaxInstancesPerChunk() as int

myLivingEntity.getMaxInstancesPerChunk();
```

:::

:::group{name=getNoDespawnDistance}

Return Type: int

```zenscript
// LivingEntity.getNoDespawnDistance() as int

myLivingEntity.getNoDespawnDistance();
```

:::

:::group{name=isFriendly}

Return Type: boolean

```zenscript
// LivingEntity.isFriendly() as boolean

myLivingEntity.isFriendly();
```

:::

:::group{name=isPersistent}

Return Type: boolean

```zenscript
// LivingEntity.isPersistent() as boolean

myLivingEntity.isPersistent();
```

:::



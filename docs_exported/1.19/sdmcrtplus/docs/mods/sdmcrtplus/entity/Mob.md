# Mob

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.entity.Mob;
```


## Extending LivingEntity

Mob extends [LivingEntity](/vanilla/api/entity/LivingEntity). That means all methods available in [LivingEntity](/vanilla/api/entity/LivingEntity) are also available in Mob

## Methods

:::group{name=canBeLeashed}

Return Type: boolean

```zenscript
Mob.canBeLeashed(player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=canHoldItem}

Return Type: boolean

```zenscript
Mob.canHoldItem(itemStack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=canPickUpLoot}

Return Type: boolean

```zenscript
// Mob.canPickUpLoot() as boolean

myMob.canPickUpLoot();
```

:::

:::group{name=canTakeItem}

Return Type: boolean

```zenscript
Mob.canTakeItem(itemStack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getLeashHolder}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// Mob.getLeashHolder() as Entity

myMob.getLeashHolder();
```

:::

:::group{name=getTarget}

Return Type: [LivingEntity](/vanilla/api/entity/LivingEntity)

```zenscript
// Mob.getTarget() as LivingEntity

myMob.getTarget();
```

:::

:::group{name=getXpReward}

Return Type: int

```zenscript
// Mob.getXpReward() as int

myMob.getXpReward();
```

:::

:::group{name=isWithinRestriction}

Return Type: boolean

```zenscript
// Mob.isWithinRestriction() as boolean

myMob.isWithinRestriction();
```

:::

:::group{name=removeWhenFarAway}

Return Type: boolean

```zenscript
Mob.removeWhenFarAway(var as double) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| var       | double |


:::

:::group{name=requiresCustomPersistence}

Return Type: boolean

```zenscript
// Mob.requiresCustomPersistence() as boolean

myMob.requiresCustomPersistence();
```

:::

:::group{name=setTarget}

```zenscript
Mob.setTarget(target as LivingEntity)
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| target    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=spawnAnim}

```zenscript
// Mob.spawnAnim()

myMob.spawnAnim();
```

:::

:::group{name=wantsToPickUp}

Return Type: boolean

```zenscript
Mob.wantsToPickUp(itemStack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::



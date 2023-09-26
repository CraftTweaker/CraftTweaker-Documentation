# AgeableMob

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.entity.AgeableMob;
```


## Extending PathfinderMob

AgeableMob extends [PathfinderMob](/mods/sdmcrtplus/entity/PathfinderMob). That means all methods available in [PathfinderMob](/mods/sdmcrtplus/entity/PathfinderMob) are also available in AgeableMob

## Methods

:::group{name=getAge}

Return Type: int

```zenscript
// AgeableMob.getAge() as int

myAgeableMob.getAge();
```

:::

:::group{name=setAge}

```zenscript
AgeableMob.setAge(age as int)
```

| Parameter | Type |
|-----------|------|
| age       | int  |


:::

:::group{name=setAge}

```zenscript
AgeableMob.setAge(baby as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| baby      | boolean |


:::



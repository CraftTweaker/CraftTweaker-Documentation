# Animal

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.animal.Animal;
```


## Extending AgeableMob

Animal extends [AgeableMob](/vanilla/api/entity/type/misc/AgeableMob). That means all methods available in [AgeableMob](/vanilla/api/entity/type/misc/AgeableMob) are also available in Animal

## Methods

:::group{name=canMate}

Return Type: boolean

```zenscript
Animal.canMate(other as Animal) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| other     | [Animal](/vanilla/api/entity/type/animal/Animal) |


:::

:::group{name=finalizeSpawnChildFromBreeding}

```zenscript
Animal.finalizeSpawnChildFromBreeding(level as ServerLevel, otherParent as Animal, child as AgeableMob?)
```

|  Parameter  |                          Type                           |
|-------------|---------------------------------------------------------|
| level       | [ServerLevel](/vanilla/api/world/ServerLevel)           |
| otherParent | [Animal](/vanilla/api/entity/type/animal/Animal)        |
| child       | [AgeableMob](/vanilla/api/entity/type/misc/AgeableMob)? |


:::

:::group{name=isFood}

Return Type: boolean

```zenscript
Animal.isFood(stack as ItemStack) as boolean
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| stack     | [ItemStack](/vanilla/api/item/ItemStack) |


:::

:::group{name=resetLove}

```zenscript
// Animal.resetLove()

myAnimal.resetLove();
```

:::

:::group{name=setInLove}

```zenscript
Animal.setInLove(loveCause as Player?)
```

| Parameter |                       Type                        | Optional |
|-----------|---------------------------------------------------|----------|
| loveCause | [Player](/vanilla/api/entity/type/player/Player)? | true     |


:::

:::group{name=spawnChildFromBreeding}

```zenscript
Animal.spawnChildFromBreeding(level as ServerLevel, otherParent as Animal)
```

|  Parameter  |                       Type                       |
|-------------|--------------------------------------------------|
| level       | [ServerLevel](/vanilla/api/world/ServerLevel)    |
| otherParent | [Animal](/vanilla/api/entity/type/animal/Animal) |


:::


## Properties

|     Name      |                             Type                              | Has Getter | Has Setter |
|---------------|---------------------------------------------------------------|------------|------------|
| canFAllInLove | boolean                                                       | true       | false      |
| inLoveTime    | [Animal](/vanilla/api/entity/type/animal/Animal)              | true       | true       |
| isInLove      | boolean                                                       | true       | false      |
| loveCause     | [ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)? | true       | false      |


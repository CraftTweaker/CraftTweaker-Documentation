# UndeadArmyManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.UndeadArmyManager;
```


## Methods

:::group{name=findNearestUndeadArmy}

Return Type: [UndeadArmy](/mods/sdmcrtplus/integration/majruszsdifficulty/UndeadArmy)

```zenscript
UndeadArmyManager.findNearestUndeadArmy(position as BlockPos) as UndeadArmy
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=getUndeadArmies}

Return Type: stdlib.List&lt;[UndeadArmy](/mods/sdmcrtplus/integration/majruszsdifficulty/UndeadArmy)&gt;

```zenscript
// UndeadArmyManager.getUndeadArmies() as stdlib.List<UndeadArmy>

myUndeadArmyManager.getUndeadArmies();
```

:::

:::group{name=isPartOfUndeadArmy}

Return Type: boolean

```zenscript
UndeadArmyManager.isPartOfUndeadArmy(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=tryToSpawn}

Return Type: boolean

```zenscript
UndeadArmyManager.tryToSpawn(player as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=tryToSpawn}

Return Type: boolean

```zenscript
UndeadArmyManager.tryToSpawn(position as BlockPos, direction as Direction) as boolean
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| position  | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| direction | [Direction](/mods/sdmcrtplus/integration/majruszsdifficulty/Direction) |


:::



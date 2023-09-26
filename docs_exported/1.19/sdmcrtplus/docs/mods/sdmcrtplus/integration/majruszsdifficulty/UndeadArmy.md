# UndeadArmy

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.majruszsdifficulty.UndeadArmy;
```


## Methods

:::group{name=distanceTo}

Return Type: double

```zenscript
UndeadArmy.distanceTo(pos as BlockPos) as double
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=finish}

```zenscript
// UndeadArmy.finish()

myUndeadArmy.finish();
```

:::

:::group{name=getBoss}

Return Type: [Entity](/vanilla/api/entity/Entity)

```zenscript
// UndeadArmy.getBoss() as Entity

myUndeadArmy.getBoss();
```

:::

:::group{name=getCurrentWave}

Return Type: int

```zenscript
// UndeadArmy.getCurrentWave() as int

myUndeadArmy.getCurrentWave();
```

:::

:::group{name=getDirection}

Return Type: [Direction](/mods/sdmcrtplus/integration/majruszsdifficulty/Direction)

```zenscript
// UndeadArmy.getDirection() as Direction

myUndeadArmy.getDirection();
```

:::

:::group{name=getLevel}

Return Type: [ServerLevel](/vanilla/api/world/ServerLevel)

```zenscript
// UndeadArmy.getLevel() as ServerLevel

myUndeadArmy.getLevel();
```

:::

:::group{name=getMobsLeft}

Return Type: stdlib.List&lt;[MobInfo](/mods/sdmcrtplus/integration/majruszsdifficulty/MobInfo)&gt;

```zenscript
// UndeadArmy.getMobsLeft() as stdlib.List<MobInfo>

myUndeadArmy.getMobsLeft();
```

:::

:::group{name=getParticipants}

Return Type: stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;

```zenscript
// UndeadArmy.getParticipants() as stdlib.List<ServerPlayer>

myUndeadArmy.getParticipants();
```

:::

:::group{name=getPhase}

Return Type: **invalid**

```zenscript
// UndeadArmy.getPhase() as invalid

myUndeadArmy.getPhase();
```

:::

:::group{name=getSositionToAttack}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// UndeadArmy.getSositionToAttack() as BlockPos

myUndeadArmy.getSositionToAttack();
```

:::

:::group{name=hasFinished}

Return Type: boolean

```zenscript
// UndeadArmy.hasFinished() as boolean

myUndeadArmy.hasFinished();
```

:::

:::group{name=highlightArmy}

```zenscript
// UndeadArmy.highlightArmy()

myUndeadArmy.highlightArmy();
```

:::

:::group{name=isAreEntitiesLoaded}

Return Type: boolean

```zenscript
// UndeadArmy.isAreEntitiesLoaded() as boolean

myUndeadArmy.isAreEntitiesLoaded();
```

:::

:::group{name=isComponents}

Return Type: **invalid**

```zenscript
// UndeadArmy.isComponents() as invalid

myUndeadArmy.isComponents();
```

:::

:::group{name=isInRange}

Return Type: boolean

```zenscript
UndeadArmy.isInRange(pos as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=isLastWave}

Return Type: boolean

```zenscript
// UndeadArmy.isLastWave() as boolean

myUndeadArmy.isLastWave();
```

:::

:::group{name=isPartOfWave}

Return Type: boolean

```zenscript
UndeadArmy.isPartOfWave(entity as Entity) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=killAllUndeadArmyMobs}

```zenscript
// UndeadArmy.killAllUndeadArmyMobs()

myUndeadArmy.killAllUndeadArmyMobs();
```

:::

:::group{name=setState}

```zenscript
UndeadArmy.setState(state as PhaseState, ticksLeft as int)
```

| Parameter |                                   Type                                   |
|-----------|--------------------------------------------------------------------------|
| state     | [PhaseState](/mods/sdmcrtplus/integration/majruszsdifficulty/PhaseState) |
| ticksLeft | int                                                                      |


:::

:::group{name=start}

```zenscript
UndeadArmy.start(positionToAttack as BlockPos, direction as Direction)
```

|    Parameter     |                                  Type                                  |
|------------------|------------------------------------------------------------------------|
| positionToAttack | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| direction        | [Direction](/mods/sdmcrtplus/integration/majruszsdifficulty/Direction) |


:::

:::group{name=tick}

```zenscript
// UndeadArmy.tick()

myUndeadArmy.tick();
```

:::


## Properties

|       Name        |                                         Type                                          | Has Getter | Has Setter |
|-------------------|---------------------------------------------------------------------------------------|------------|------------|
| areEntitiesLoaded | boolean                                                                               | true       | false      |
| boss              | [Entity](/vanilla/api/entity/Entity)                                                  | true       | false      |
| components        | **invalid**                                                                           | true       | false      |
| currentWave       | int                                                                                   | true       | false      |
| direction         | [Direction](/mods/sdmcrtplus/integration/majruszsdifficulty/Direction)                | true       | false      |
| hasFinished       | boolean                                                                               | true       | false      |
| isLastWave        | boolean                                                                               | true       | false      |
| level             | [ServerLevel](/vanilla/api/world/ServerLevel)                                         | true       | false      |
| mobsLeft          | stdlib.List&lt;[MobInfo](/mods/sdmcrtplus/integration/majruszsdifficulty/MobInfo)&gt; | true       | false      |
| participants      | stdlib.List&lt;[ServerPlayer](/vanilla/api/entity/type/player/ServerPlayer)&gt;       | true       | false      |
| phase             | **invalid**                                                                           | true       | false      |
| positionToAttack  | [BlockPos](/vanilla/api/util/math/BlockPos)                                           | true       | false      |


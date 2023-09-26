# IRaiderManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IRaiderManager;
```


## Methods

:::group{name=addRaiderSpawnPoint}

```zenscript
IRaiderManager.addRaiderSpawnPoint(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=areSpiesEnabled}

Return Type: boolean

```zenscript
// IRaiderManager.areSpiesEnabled() as boolean

myIRaiderManager.areSpiesEnabled();
```

:::

:::group{name=calculateRaiderAmount}

Return Type: int

```zenscript
IRaiderManager.calculateRaiderAmount(var1 as int) as int
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=calculateSpawnLocation}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IRaiderManager.calculateSpawnLocation() as BlockPos

myIRaiderManager.calculateSpawnLocation();
```

:::

:::group{name=canHaveRaiderEvents}

Return Type: boolean

```zenscript
// IRaiderManager.canHaveRaiderEvents() as boolean

myIRaiderManager.canHaveRaiderEvents();
```

:::

:::group{name=canRaid}

Return Type: boolean

```zenscript
// IRaiderManager.canRaid() as boolean

myIRaiderManager.canRaid();
```

:::

:::group{name=getColonyRaidLevel}

Return Type: int

```zenscript
// IRaiderManager.getColonyRaidLevel() as int

myIRaiderManager.getColonyRaidLevel();
```

:::

:::group{name=getLastSpawnPoints}

Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// IRaiderManager.getLastSpawnPoints() as stdlib.List<BlockPos>

myIRaiderManager.getLastSpawnPoints();
```

:::

:::group{name=getLostCitizen}

Return Type: int

```zenscript
// IRaiderManager.getLostCitizen() as int

myIRaiderManager.getLostCitizen();
```

:::

:::group{name=getNightsSinceLastRaid}

Return Type: int

```zenscript
// IRaiderManager.getNightsSinceLastRaid() as int

myIRaiderManager.getNightsSinceLastRaid();
```

:::

:::group{name=getRaidDifficultyModifier}

Return Type: double

```zenscript
// IRaiderManager.getRaidDifficultyModifier() as double

myIRaiderManager.getRaidDifficultyModifier();
```

:::

:::group{name=getRandomBuilding}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IRaiderManager.getRandomBuilding() as BlockPos

myIRaiderManager.getRandomBuilding();
```

:::

:::group{name=isRaided}

Return Type: boolean

```zenscript
// IRaiderManager.isRaided() as boolean

myIRaiderManager.isRaided();
```

:::

:::group{name=onLostCitizen}

```zenscript
IRaiderManager.onLostCitizen(var1 as ICitizenData)
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [ICitizenData](/mods/sdmcrtplus/integration/minecolonies/api/colony/ICitizenData) |


:::

:::group{name=onNightFall}

```zenscript
// IRaiderManager.onNightFall()

myIRaiderManager.onNightFall();
```

:::

:::group{name=raiderEvent}

```zenscript
// IRaiderManager.raiderEvent()

myIRaiderManager.raiderEvent();
```

:::

:::group{name=raiderEvent}

```zenscript
IRaiderManager.raiderEvent(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=read}

```zenscript
IRaiderManager.read(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=setCanHaveRaiderEvents}

```zenscript
IRaiderManager.setCanHaveRaiderEvents(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setNightsSinceLastRaid}

```zenscript
IRaiderManager.setNightsSinceLastRaid(var1 as int)
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=setRaidNextNight}

```zenscript
IRaiderManager.setRaidNextNight(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setRaidNextNight}

```zenscript
IRaiderManager.setRaidNextNight(var1 as boolean, var2 as string)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |
| var2      | string  |


:::

:::group{name=setSpiesEnabled}

```zenscript
IRaiderManager.setSpiesEnabled(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=willRaidTonight}

Return Type: boolean

```zenscript
// IRaiderManager.willRaidTonight() as boolean

myIRaiderManager.willRaidTonight();
```

:::

:::group{name=write}

```zenscript
IRaiderManager.write(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::



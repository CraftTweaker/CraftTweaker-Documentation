# StatsCounter

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.entity.type.player.StatsCounter;
```


## Methods

:::group{name=add}

```zenscript
StatsCounter.add(rl as ResourceLocation, value as int)
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| rl        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |
| value     | int                                                        |


:::

:::group{name=getAnimalsBred}

Return Type: int

```zenscript
// StatsCounter.getAnimalsBred() as int

myStatsCounter.getAnimalsBred();
```

:::

:::group{name=getBlocksMined}

Return Type: int

```zenscript
StatsCounter.getBlocksMined(block as Block) as int
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| block     | [Block](/vanilla/api/block/Block) |


:::

:::group{name=getCrouchDistance}

Return Type: int

```zenscript
// StatsCounter.getCrouchDistance() as int

myStatsCounter.getCrouchDistance();
```

:::

:::group{name=getDamageAbsorbed}

Return Type: int

```zenscript
// StatsCounter.getDamageAbsorbed() as int

myStatsCounter.getDamageAbsorbed();
```

:::

:::group{name=getDamageBlocked_by_shield}

Return Type: int

```zenscript
// StatsCounter.getDamageBlocked_by_shield() as int

myStatsCounter.getDamageBlocked_by_shield();
```

:::

:::group{name=getDamageDealt}

Return Type: int

```zenscript
// StatsCounter.getDamageDealt() as int

myStatsCounter.getDamageDealt();
```

:::

:::group{name=getDamageDealt_absorbed}

Return Type: int

```zenscript
// StatsCounter.getDamageDealt_absorbed() as int

myStatsCounter.getDamageDealt_absorbed();
```

:::

:::group{name=getDamageDealt_resisted}

Return Type: int

```zenscript
// StatsCounter.getDamageDealt_resisted() as int

myStatsCounter.getDamageDealt_resisted();
```

:::

:::group{name=getDamageResisted}

Return Type: int

```zenscript
// StatsCounter.getDamageResisted() as int

myStatsCounter.getDamageResisted();
```

:::

:::group{name=getDamageTaken}

Return Type: int

```zenscript
// StatsCounter.getDamageTaken() as int

myStatsCounter.getDamageTaken();
```

:::

:::group{name=getDeaths}

Return Type: int

```zenscript
// StatsCounter.getDeaths() as int

myStatsCounter.getDeaths();
```

:::

:::group{name=getFishCaught}

Return Type: int

```zenscript
// StatsCounter.getFishCaught() as int

myStatsCounter.getFishCaught();
```

:::

:::group{name=getItemsBroken}

Return Type: int

```zenscript
StatsCounter.getItemsBroken(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getItemsCrafted}

Return Type: int

```zenscript
StatsCounter.getItemsCrafted(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getItemsDropped}

Return Type: int

```zenscript
StatsCounter.getItemsDropped(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getItemsPickedUp}

Return Type: int

```zenscript
StatsCounter.getItemsPickedUp(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getItemsUsed}

Return Type: int

```zenscript
StatsCounter.getItemsUsed(item as IItemStack) as int
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=getJumps}

Return Type: int

```zenscript
// StatsCounter.getJumps() as int

myStatsCounter.getJumps();
```

:::

:::group{name=getKilled}

Return Type: int

```zenscript
StatsCounter.getKilled(entity as EntityType) as int
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| entity    | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=getKilledBy}

Return Type: int

```zenscript
StatsCounter.getKilledBy(entity as EntityType) as int
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| entity    | [EntityType](/vanilla/api/entity/EntityType) |


:::

:::group{name=getMobKills}

Return Type: int

```zenscript
// StatsCounter.getMobKills() as int

myStatsCounter.getMobKills();
```

:::

:::group{name=getPlayTime}

Return Type: int

```zenscript
// StatsCounter.getPlayTime() as int

myStatsCounter.getPlayTime();
```

:::

:::group{name=getPlayerKills}

Return Type: int

```zenscript
// StatsCounter.getPlayerKills() as int

myStatsCounter.getPlayerKills();
```

:::

:::group{name=getSprintDistance}

Return Type: int

```zenscript
// StatsCounter.getSprintDistance() as int

myStatsCounter.getSprintDistance();
```

:::

:::group{name=getStatValue}

Return Type: int

```zenscript
StatsCounter.getStatValue(rl as ResourceLocation) as int
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| rl        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getSwimDistance}

Return Type: int

```zenscript
// StatsCounter.getSwimDistance() as int

myStatsCounter.getSwimDistance();
```

:::

:::group{name=getTimeCrouchTime}

Return Type: int

```zenscript
// StatsCounter.getTimeCrouchTime() as int

myStatsCounter.getTimeCrouchTime();
```

:::

:::group{name=getTimeSinceDeath}

Return Type: int

```zenscript
// StatsCounter.getTimeSinceDeath() as int

myStatsCounter.getTimeSinceDeath();
```

:::

:::group{name=getTimeSinceRest}

Return Type: int

```zenscript
// StatsCounter.getTimeSinceRest() as int

myStatsCounter.getTimeSinceRest();
```

:::

:::group{name=getValue}

Return Type: int

```zenscript
StatsCounter.getValue(stat as ResourceLocation) as int
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| stat      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getWalkDistance}

Return Type: int

```zenscript
// StatsCounter.getWalkDistance() as int

myStatsCounter.getWalkDistance();
```

:::



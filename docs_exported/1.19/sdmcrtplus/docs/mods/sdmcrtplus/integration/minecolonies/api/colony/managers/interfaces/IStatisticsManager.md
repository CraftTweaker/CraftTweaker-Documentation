# IStatisticsManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.managers.interfaces.IStatisticsManager;
```


## Methods

:::group{name=getStatTotal}

Return Type: int

```zenscript
IStatisticsManager.getStatTotal(var1 as string) as int
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=getStatTypes}

Return Type: Set&lt;string&gt;

```zenscript
// IStatisticsManager.getStatTypes() as Set<string>

myIStatisticsManager.getStatTypes();
```

:::

:::group{name=getStatsInPeriod}

Return Type: int

```zenscript
IStatisticsManager.getStatsInPeriod(var1 as string, var2 as int, var3 as int) as int
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | int    |
| var3      | int    |


:::

:::group{name=increment}

```zenscript
IStatisticsManager.increment(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=incrementBy}

```zenscript
IStatisticsManager.incrementBy(var1 as string, var2 as int)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |
| var2      | int    |


:::

:::group{name=readFromNBT}

```zenscript
IStatisticsManager.readFromNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::

:::group{name=writeToNBT}

```zenscript
IStatisticsManager.writeToNBT(var1 as CompoundTag)
```

| Parameter |                      Type                       |
|-----------|-------------------------------------------------|
| var1      | [CompoundTag](/mods/sdmcrtplus/nbt/CompoundTag) |


:::



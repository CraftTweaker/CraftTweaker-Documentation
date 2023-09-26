# BossStats

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.boss.BossStats;
```


## Extending Record

BossStats extends Record. That means all methods available in Record are also available in BossStats

## Methods

:::group{name=effects}

Return Type: stdlib.List

```zenscript
// BossStats.effects() as stdlib.List

myBossStats.effects();
```

:::

:::group{name=enchLevels}

Return Type: int[]

```zenscript
// BossStats.enchLevels() as int[]

myBossStats.enchLevels();
```

:::

:::group{name=enchantChance}

Return Type: float

```zenscript
// BossStats.enchantChance() as float

myBossStats.enchantChance();
```

:::

:::group{name=modifiers}

Return Type: stdlib.List

```zenscript
// BossStats.modifiers() as stdlib.List

myBossStats.modifiers();
```

:::



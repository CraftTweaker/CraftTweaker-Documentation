# Rank

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.permissions.Rank;
```


## Constructors


```zenscript
new Rank(id as int?, name as string, isSubscriber as bool?, isInitial as bool?, isColonyManager as bool?, isHostile as bool?) as Rank
```
|    Parameter    |  Type  |
|-----------------|--------|
| id              | int?   |
| name            | string |
| isSubscriber    | bool?  |
| isInitial       | bool?  |
| isColonyManager | bool?  |
| isHostile       | bool?  |



## Methods

:::group{name=addPermission}

Return Type: boolean

```zenscript
Rank.addPermission(action as Action) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| action    | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |


:::

:::group{name=compareTo}

Return Type: int

```zenscript
Rank.compareTo(rank2 as Rank) as int
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| rank2     | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::

:::group{name=getId}

Return Type: int

```zenscript
// Rank.getId() as int

myRank.getId();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// Rank.getName() as string

myRank.getName();
```

:::

:::group{name=getPermissions}

Return Type: long

```zenscript
// Rank.getPermissions() as long

myRank.getPermissions();
```

:::

:::group{name=isColonyManager}

Return Type: boolean

```zenscript
// Rank.isColonyManager() as boolean

myRank.isColonyManager();
```

:::

:::group{name=isHostile}

Return Type: boolean

```zenscript
// Rank.isHostile() as boolean

myRank.isHostile();
```

:::

:::group{name=isInitial}

Return Type: boolean

```zenscript
// Rank.isInitial() as boolean

myRank.isInitial();
```

:::

:::group{name=isInitial}

Return Type: boolean

```zenscript
Rank.isInitial(action as Action) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| action    | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |


:::

:::group{name=isSubscriber}

Return Type: boolean

```zenscript
// Rank.isSubscriber() as boolean

myRank.isSubscriber();
```

:::

:::group{name=setColonyManager}

```zenscript
Rank.setColonyManager(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setHostile}

```zenscript
Rank.setHostile(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::

:::group{name=setSubscriber}

```zenscript
Rank.setSubscriber(var1 as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| var1      | boolean |


:::



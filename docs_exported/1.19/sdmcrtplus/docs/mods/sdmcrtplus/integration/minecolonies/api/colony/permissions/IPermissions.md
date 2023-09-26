# IPermissions

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.permissions.IPermissions;
```


## Methods

:::group{name=addPlayer}

Return Type: boolean

```zenscript
IPermissions.addPlayer(var1 as invalid, var2 as Rank) as boolean
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| var1      | **invalid**                                                                   |
| var2      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::

:::group{name=addPlayer}

Return Type: boolean

```zenscript
IPermissions.addPlayer(var1 as string, var2 as Rank, var3 as Level) as boolean
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| var1      | string                                                                        |
| var2      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |
| var3      | [Level](/vanilla/api/world/Level)                                             |


:::

:::group{name=addPlayer}

Return Type: boolean

```zenscript
IPermissions.addPlayer(var1 as string, var2 as string, var3 as Rank) as boolean
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| var1      | string                                                                        |
| var2      | string                                                                        |
| var3      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::

:::group{name=addRank}

```zenscript
IPermissions.addRank(var1 as string)
```

| Parameter |  Type  |
|-----------|--------|
| var1      | string |


:::

:::group{name=alterPermission}

Return Type: boolean

```zenscript
IPermissions.alterPermission(var1 as Rank, var2 as Rank, var3 as Action, var4 as boolean) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var2      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var3      | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |
| var4      | boolean                                                                           |


:::

:::group{name=canAlterPermission}

Return Type: boolean

```zenscript
IPermissions.canAlterPermission(var1 as Rank, var2 as Rank, var3 as Action) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var2      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var3      | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |


:::

:::group{name=getFilteredPlayers}

Return Type: Set&lt;[ColonyPlayer](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/ColonyPlayer)&gt;

```zenscript
IPermissions.getFilteredPlayers(var1 as Predicate<Rank>) as Set<ColonyPlayer>
```

| Parameter |                                                                  Type                                                                   |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| var1      | [Predicate](/mods/sdmcrtplus/utils/core/Predicate)&lt;[Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)&gt; |


:::

:::group{name=getOwner}



Returns: UUID  
Return Type: **invalid**

```zenscript
// IPermissions.getOwner() as invalid

myIPermissions.getOwner();
```

:::

:::group{name=getOwnerEntry}



Returns: Map.Entry<UUID, {$link ColonyPlayer}>  
Return Type: **invalid**?

```zenscript
// IPermissions.getOwnerEntry() as invalid?

myIPermissions.getOwnerEntry();
```

:::

:::group{name=getOwnerName}

Return Type: string

```zenscript
// IPermissions.getOwnerName() as string

myIPermissions.getOwnerName();
```

:::

:::group{name=getPlayers}



Returns: Map<UUID, {$link ColonyPlayer}>  
Return Type: **invalid**

```zenscript
// IPermissions.getPlayers() as invalid

myIPermissions.getPlayers();
```

:::

:::group{name=getPlayersByRank}

Return Type: Set&lt;[ColonyPlayer](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/ColonyPlayer)&gt;

```zenscript
IPermissions.getPlayersByRank(var1 as Rank) as Set<ColonyPlayer>
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::

:::group{name=getPlayersByRank}

Return Type: Set&lt;[ColonyPlayer](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/ColonyPlayer)&gt;

```zenscript
IPermissions.getPlayersByRank(var1 as Set<Rank>) as Set<ColonyPlayer>
```

| Parameter |                                           Type                                           |
|-----------|------------------------------------------------------------------------------------------|
| var1      | Set&lt;[Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)&gt; |


:::

:::group{name=getRank}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
IPermissions.getRank(var1 as int) as Rank
```

| Parameter | Type |
|-----------|------|
| var1      | int  |


:::

:::group{name=getRank}



Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
IPermissions.getRank(var1 as invalid) as Rank
```

| Parameter |    Type     | Description |
|-----------|-------------|-------------|
| var1      | **invalid** | UUID        |


:::

:::group{name=getRank}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
IPermissions.getRank(var1 as Player) as Rank
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=getRankFriend}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// IPermissions.getRankFriend() as Rank

myIPermissions.getRankFriend();
```

:::

:::group{name=getRankHostile}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// IPermissions.getRankHostile() as Rank

myIPermissions.getRankHostile();
```

:::

:::group{name=getRankNeutral}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// IPermissions.getRankNeutral() as Rank

myIPermissions.getRankNeutral();
```

:::

:::group{name=getRankOfficer}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// IPermissions.getRankOfficer() as Rank

myIPermissions.getRankOfficer();
```

:::

:::group{name=getRankOwner}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)

```zenscript
// IPermissions.getRankOwner() as Rank

myIPermissions.getRankOwner();
```

:::

:::group{name=getRanks}

Return Type: [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)[int?]

```zenscript
// IPermissions.getRanks() as Rank[int?]

myIPermissions.getRanks();
```

:::

:::group{name=hasPermission}

Return Type: boolean

```zenscript
IPermissions.hasPermission(var1 as Player, var2 as Action) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player)                                  |
| var2      | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |


:::

:::group{name=hasPermission}

Return Type: boolean

```zenscript
IPermissions.hasPermission(var1 as Rank, var2 as Action) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var2      | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |


:::

:::group{name=isColonyMember}

Return Type: boolean

```zenscript
IPermissions.isColonyMember(var1 as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=isSubscriber}

Return Type: boolean

```zenscript
IPermissions.isSubscriber(var1 as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=removePlayer}



Return Type: boolean

```zenscript
IPermissions.removePlayer(var1 as invalid) as boolean
```

| Parameter |    Type     | Description |
|-----------|-------------|-------------|
| var1      | **invalid** | UUID        |


:::

:::group{name=removeRank}

```zenscript
IPermissions.removeRank(var1 as Rank)
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |


:::

:::group{name=restoreOwnerIfNull}

```zenscript
// IPermissions.restoreOwnerIfNull()

myIPermissions.restoreOwnerIfNull();
```

:::

:::group{name=setOwner}

Return Type: boolean

```zenscript
IPermissions.setOwner(var1 as Player) as boolean
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| var1      | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=setOwnerAbandoned}

```zenscript
// IPermissions.setOwnerAbandoned()

myIPermissions.setOwnerAbandoned();
```

:::

:::group{name=setPermission}

Return Type: boolean

```zenscript
IPermissions.setPermission(var1 as Rank, var2 as Action, var3 as boolean) as boolean
```

| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| var1      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank)     |
| var2      | [Action](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Action) |
| var3      | boolean                                                                           |


:::

:::group{name=setPlayerRank}



Return Type: boolean

```zenscript
IPermissions.setPlayerRank(var1 as invalid, var2 as Rank, var3 as Level) as boolean
```

| Parameter |                                     Type                                      | Description |
|-----------|-------------------------------------------------------------------------------|-------------|
| var1      | **invalid**                                                                   | UUID        |
| var2      | [Rank](/mods/sdmcrtplus/integration/minecolonies/api/colony/permissions/Rank) |             |
| var3      | [Level](/vanilla/api/world/Level)                                             |             |


:::



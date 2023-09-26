# TeamBase

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.TeamBase;
```


## Methods

:::group{name=addMessage}

```zenscript
TeamBase.addMessage(message as TeamMessage)
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| message   | [TeamMessage](/mods/sdmcrtplus/integration/ftbteams/TeamMessage) |


:::

:::group{name=getColor}

Return Type: int

```zenscript
// TeamBase.getColor() as int

myTeamBase.getColor();
```

:::

:::group{name=getColoredName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// TeamBase.getColoredName() as Component

myTeamBase.getColoredName();
```

:::

:::group{name=getDescription}

Return Type: string

```zenscript
// TeamBase.getDescription() as string

myTeamBase.getDescription();
```

:::

:::group{name=getMaxMessageHistorySize}

Return Type: int

```zenscript
// TeamBase.getMaxMessageHistorySize() as int

myTeamBase.getMaxMessageHistorySize();
```

:::

:::group{name=getMembers}

Return Type: stdlib.List&lt;string&gt;

```zenscript
// TeamBase.getMembers() as stdlib.List<string>

myTeamBase.getMembers();
```

:::

:::group{name=getMessage}

Return Type: stdlib.List&lt;[TeamMessage](/mods/sdmcrtplus/integration/ftbteams/TeamMessage)&gt;

```zenscript
// TeamBase.getMessage() as stdlib.List<TeamMessage>

myTeamBase.getMessage();
```

:::

:::group{name=getName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// TeamBase.getName() as Component

myTeamBase.getName();
```

:::

:::group{name=getStringID}

Return Type: string

```zenscript
// TeamBase.getStringID() as string

myTeamBase.getStringID();
```

:::

:::group{name=getUUID}

Return Type: string

```zenscript
// TeamBase.getUUID() as string

myTeamBase.getUUID();
```

:::

:::group{name=isAlly}

Return Type: boolean

```zenscript
TeamBase.isAlly(uuid as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=isFreeToJoin}

Return Type: boolean

```zenscript
// TeamBase.isFreeToJoin() as boolean

myTeamBase.isFreeToJoin();
```

:::

:::group{name=isInvited}

Return Type: boolean

```zenscript
TeamBase.isInvited(uuid as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=isMember}

Return Type: boolean

```zenscript
TeamBase.isMember(uuid as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::

:::group{name=isOfficer}

Return Type: boolean

```zenscript
TeamBase.isOfficer(uuid as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| uuid      | string |


:::



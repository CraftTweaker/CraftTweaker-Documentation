# TeamMessage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbteams.TeamMessage;
```


## Constructors


```zenscript
new TeamMessage(uuid as string, date as long, text as Component) as TeamMessage
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| uuid      | string                                   |
| date      | long                                     |
| text      | [Component](/vanilla/api/text/Component) |



## Methods

:::group{name=getDate}

Return Type: long

```zenscript
TeamMessage.getDate(teamMessage as invalid) as long
```

|  Parameter  |    Type     |
|-------------|-------------|
| teamMessage | **invalid** |


:::

:::group{name=getSender}

Return Type: string

```zenscript
TeamMessage.getSender(teamMessage as invalid) as string
```

|  Parameter  |    Type     |
|-------------|-------------|
| teamMessage | **invalid** |


:::

:::group{name=getText}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
TeamMessage.getText(teamMessage as invalid) as Component
```

|  Parameter  |    Type     |
|-------------|-------------|
| teamMessage | **invalid** |


:::



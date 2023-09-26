# FTBUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.FTBUtils;
```


## Static Methods

:::group{name=getData}

Return Type: [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData)

```zenscript
FTBUtils.getData(player as Player) as TeamData
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| player    | [Player](/vanilla/api/entity/type/player/Player) |


:::

:::group{name=getQuestFile}

Return Type: [QuestFile](/mods/sdmcrtplus/integration/ftbquest/QuestFile)

```zenscript
FTBUtils.getQuestFile(isClient as boolean) as QuestFile
```

| Parameter |  Type   |
|-----------|---------|
| isClient  | boolean |


:::

:::group{name=parseQuestCodeString}

Return Type: long

```zenscript
FTBUtils.parseQuestCodeString(id as string) as long
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=parseTaskCodeString}

Return Type: long

```zenscript
FTBUtils.parseTaskCodeString(id as string) as long
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::


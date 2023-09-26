# QuestObject

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.ftbquest.QuestObject;
```


## Extending QuestObjectBase

QuestObject extends [QuestObjectBase](/mods/sdmcrtplus/integration/ftbquest/QuestObjectBase). That means all methods available in [QuestObjectBase](/mods/sdmcrtplus/integration/ftbquest/QuestObjectBase) are also available in QuestObject

## Methods

:::group{name=isCompletedRaw}

Return Type: boolean

```zenscript
QuestObject.isCompletedRaw(teamData as TeamData) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| teamData  | [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData) |


:::

:::group{name=isVisible}

Return Type: boolean

```zenscript
QuestObject.isVisible(teamData as TeamData) as boolean
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| teamData  | [TeamData](/mods/sdmcrtplus/integration/ftbquest/TeamData) |


:::



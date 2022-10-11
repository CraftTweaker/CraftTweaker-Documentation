# ScoreContents

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.ScoreContents;
```


## Implemented Interfaces
ScoreContents implements the following interfaces. That means all methods defined in these interfaces are also available in ScoreContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Methods

:::group{name=getName}

Return Type: string

```zenscript
// ScoreContents.getName() as string

myScoreContents.getName();
```

:::

:::group{name=getObjective}

Return Type: string

```zenscript
// ScoreContents.getObjective() as string

myScoreContents.getObjective();
```

:::


## Properties

|   Name    |  Type  | Has Getter | Has Setter |
|-----------|--------|------------|------------|
| name      | string | true       | false      |
| objective | string | true       | false      |


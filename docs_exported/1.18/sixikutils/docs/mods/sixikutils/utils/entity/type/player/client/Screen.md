# Screen

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.crafttweakerutils.api.client.Screen;
```


## Methods

:::group{name=getGame}

Return Type: **invalid**

```zenscript
// Screen.getGame() as invalid

myScreen.getGame();
```

:::

:::group{name=getNarrationMessage}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Screen.getNarrationMessage() as Component

myScreen.getNarrationMessage();
```

:::

:::group{name=getTitle}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// Screen.getTitle() as Component

myScreen.getTitle();
```

:::


## Properties

|       Name       |                   Type                   | Has Getter | Has Setter |
|------------------|------------------------------------------|------------|------------|
| game             | **invalid**                              | true       | false      |
| narrationMessage | [Component](/vanilla/api/text/Component) | true       | false      |
| title            | [Component](/vanilla/api/text/Component) | true       | false      |


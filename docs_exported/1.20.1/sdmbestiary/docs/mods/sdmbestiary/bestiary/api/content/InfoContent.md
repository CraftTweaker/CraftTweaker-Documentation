# InfoContent

The main window that contains all the interface elements

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.InfoContent;
```


## Constructors


```zenscript
new InfoContent() as InfoContent
new InfoContent();
```

```zenscript
new InfoContent(consumer as Consumer<InfoContent>) as InfoContent
```
| Parameter |                                       Type                                        |
|-----------|-----------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent)&gt; |



## Methods

:::group{name=addContent}

A method that adds different widgets to the information window.

Return Type: [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent)

```zenscript
InfoContent.addContent(content as IInfoContent) as InfoContent
```

| Parameter |                                Type                                 |              Description              |
|-----------|---------------------------------------------------------------------|---------------------------------------|
| content   | [IInfoContent](/mods/sdmbestiary/bestiary/api/content/IInfoContent) | - Buttons, Fields, Tables, Fills, etc |


:::

:::group{name=getWeight}

Return Type: int

```zenscript
// InfoContent.getWeight() as int

myInfoContent.getWeight();
```

:::


## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| space  | int  | true       | true       |
| weight | int  | true       | true       |


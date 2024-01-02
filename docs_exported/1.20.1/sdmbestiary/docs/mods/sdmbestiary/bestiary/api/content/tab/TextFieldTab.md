# TextFieldTab

A text element. It has no functional other than how to add a string.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.tab.TextFieldTab;
```


## Implemented Interfaces
TextFieldTab implements the following interfaces. That means all methods defined in these interfaces are also available in TextFieldTab

- [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)

## Constructors


```zenscript
new TextFieldTab(consumer as Consumer<TextFieldTab>) as TextFieldTab
```
| Parameter |                                          Type                                           |
|-----------|-----------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[TextFieldTab](/mods/sdmbestiary/bestiary/api/content/tab/TextFieldTab)&gt; |



## Methods

:::group{name=addInfoContent}

Return Type: [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)

```zenscript
TextFieldTab.addInfoContent(content as InfoContent) as IInfoTabContent
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::


## Properties

| Name |                   Type                   | Has Getter | Has Setter |
|------|------------------------------------------|------------|------------|
| text | [Component](/vanilla/api/text/Component) | true       | true       |


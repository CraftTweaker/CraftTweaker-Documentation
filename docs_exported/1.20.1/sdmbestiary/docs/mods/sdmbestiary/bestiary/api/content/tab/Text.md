# TextTab

A button that can be fully customized on.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.tab.TextTab;
```


## Implemented Interfaces
TextTab implements the following interfaces. That means all methods defined in these interfaces are also available in TextTab

- [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)

## Constructors


```zenscript
new TextTab(consumer as Consumer<TextTab>) as TextTab
```
| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| consumer  | Consumer&lt;[TextTab](/mods/sdmbestiary/bestiary/api/content/tab/Text)&gt; |



```zenscript
new TextTab(component as Component, id as string) as TextTab
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |
| id        | string                                   |



## Methods

:::group{name=setIcon}

Return Type: [TextTab](/mods/sdmbestiary/bestiary/api/content/tab/Text)

```zenscript
TextTab.setIcon(icon as Icon) as TextTab
```

| Parameter |                  Type                   |
|-----------|-----------------------------------------|
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon) |


:::


## Properties

|   Name    |                               Type                                | Has Getter | Has Setter |                             Description                             |
|-----------|-------------------------------------------------------------------|------------|------------|---------------------------------------------------------------------|
| component | [Component](/vanilla/api/text/Component)                          | true       | true       |                                                                     |
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) | true       | true       |                                                                     |
| group     | [Group](/mods/sdmbestiary/bestiary/api/content/tab/Group)         | true       | true       |                                                                     |
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon)                           | true       | true       |                                                                     |
| id        | string                                                            | true       | true       | The ID is needed to create links to tabs through different widgets. |


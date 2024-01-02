# IInfoTabContent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.IInfoTabContent;
```


## Methods

:::group{name=addInfoContent}

Return Type: [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)

```zenscript
IInfoTabContent.addInfoContent(content as InfoContent) as IInfoTabContent
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=getComponent}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// IInfoTabContent.getComponent() as Component

myIInfoTabContent.getComponent();
```

:::

:::group{name=getContents}

Return Type: stdlib.List&lt;[IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)&gt;

```zenscript
// IInfoTabContent.getContents() as stdlib.List<IInfoTabContent>

myIInfoTabContent.getContents();
```

:::

:::group{name=getGroup}

Return Type: [Group](/mods/sdmbestiary/bestiary/api/content/tab/Group)

```zenscript
// IInfoTabContent.getGroup() as Group

myIInfoTabContent.getGroup();
```

:::

:::group{name=getID}

Return Type: string

```zenscript
// IInfoTabContent.getID() as string

myIInfoTabContent.getID();
```

:::

:::group{name=getIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
// IInfoTabContent.getIcon() as Icon

myIInfoTabContent.getIcon();
```

:::

:::group{name=getInfoContent}

Return Type: [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent)

```zenscript
// IInfoTabContent.getInfoContent() as InfoContent

myIInfoTabContent.getInfoContent();
```

:::

:::group{name=setComponent}

```zenscript
IInfoTabContent.setComponent(component as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |


:::



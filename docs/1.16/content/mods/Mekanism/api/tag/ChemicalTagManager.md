# ChemicalTagManager&LT;CHEMICAL : Chemical<CHEMICAL>&GT;

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.tag.ChemicalTagManager;
```

## Implemented Interfaces

ChemicalTagManager implements the following interfaces. That means all methods defined in these
interfaces are also available in ChemicalTagManager

- [TagManager](/vanilla/api/tags/TagManager)&lt;CHEMICAL&gt;

## Methods

:::group{name=exists}

Return Type: boolean

```zenscript
ChemicalTagManager.exists(location as MCResourceLocation) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |

:::

:::group{name=exists}

Return Type: boolean

```zenscript
ChemicalTagManager.exists(name as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getAllTags}

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
// ChemicalTagManager.getAllTags() as stdlib.List<MCTag<T>>

myChemicalTagManager.getAllTags();
```

:::

:::group{name=getAllTagsFor}

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
ChemicalTagManager.getAllTagsFor(element as T) as stdlib.List<MCTag<T>>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| element | T | No Description Provided |

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
ChemicalTagManager.getTag(location as MCResourceLocation) as MCTag<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
ChemicalTagManager.getTag(name as string) as MCTag<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getTagFolder}

Return Type: string

```zenscript
// ChemicalTagManager.getTagFolder() as string

myChemicalTagManager.getTagFolder();
```

:::

## Operators

:::group{name=CONTAINS}

```zenscript
name as string in myChemicalTagManager
```

:::

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| all | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true | false | No Description Provided |
| tagType | string | true | false | No Description Provided |


# InfuseTypeTagManager

This class was added by a mod with mod-id `mekanism`. So you need to have this mod installed if you
want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an
Array), so better be safe than sorry and add the import at the very top of the file.

```zenscript
import mods.mekanism.api.tag.InfuseTypeTagManager;
```

## Extending ChemicalTagManager&lt;InfuseType&gt;

InfuseTypeTagManager extends [ChemicalTagManager](/mods/Mekanism/api/tag/ChemicalTagManager)
&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt;. That means all methods available
in [ChemicalTagManager](/mods/Mekanism/api/tag/ChemicalTagManager)
&lt;[InfuseType](/mods/Mekanism/api/chemical/InfuseType)&gt; are also available in
InfuseTypeTagManager

## Methods

:::group{name=exists}

Return Type: boolean

```zenscript
InfuseTypeTagManager.exists(location as MCResourceLocation) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |

:::

:::group{name=exists}

Return Type: boolean

```zenscript
InfuseTypeTagManager.exists(name as string) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

:::group{name=getAllTags}

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
// InfuseTypeTagManager.getAllTags() as stdlib.List<MCTag<T>>

myInfuseTypeTagManager.getAllTags();
```

:::

:::group{name=getAllTagsFor}

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
InfuseTypeTagManager.getAllTagsFor(element as T) as stdlib.List<MCTag<T>>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| element | T | No Description Provided |

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
InfuseTypeTagManager.getTag(location as MCResourceLocation) as MCTag<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| location | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
InfuseTypeTagManager.getTag(name as string) as MCTag<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | No Description Provided |

:::

## Operators

:::group{name=CONTAINS}

```zenscript
name as string in myInfuseTypeTagManager
```

:::

## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| all | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true | false | No Description Provided |


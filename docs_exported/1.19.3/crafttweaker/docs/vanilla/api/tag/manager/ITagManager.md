# ITagManager&LT;T : MCTag&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.manager.ITagManager;
```


## Implemented Interfaces
ITagManager implements the following interfaces. That means all methods defined in these interfaces are also available in ITagManager

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)
- stdlib.Iterable&lt;T&gt;
- Comparable&lt;[ITagManager](/vanilla/api/tag/manager/ITagManager)&gt;

## Methods

:::group{name=addId}

Adds the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) to the given tag.

```zenscript
// ITagManager.addId(to as T, values as ResourceLocation[])

<tagmanager:items>.addId(<tag:items:minecraft:wool>, <resource:minecraft:diamond>);
```

| Parameter |                             Type                             |               Description                |
|-----------|--------------------------------------------------------------|------------------------------------------|
| to        | T                                                            | The tag to add to.                       |
| values    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to add. |


:::

:::group{name=clear}

Clears all values of the given tag.

```zenscript
// ITagManager.clear(from as T)

<tagmanager:items>.clear(<tag:items:minecraft:wool>);
```

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| from      | T    | The tag to clear. |


:::

:::group{name=exists}

Checks if a tag with the given id exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// ITagManager.exists(id as ResourceLocation) as boolean

<tagmanager:items>.exists(<resource:minecraft:wool>);
```

| Parameter |                            Type                            |         Description         |
|-----------|------------------------------------------------------------|-----------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The id of the tag to check. |


:::

:::group{name=exists}

Checks if a tag with the given id exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// ITagManager.exists(id as string) as boolean

<tagmanager:items>.exists("minecraft:wool");
```

| Parameter |  Type  |         Description         |
|-----------|--------|-----------------------------|
| id        | string | The id of the tag to check. |


:::

:::group{name=exists}

Checks if the given tag exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// ITagManager.exists(tag as T) as boolean

<tagmanager:items>.exists(<tag:items:minecraft:wool>);
```

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| tag       | T    | The tag to check. |


:::

:::group{name=getTagsFor}

Ges the tags that contain the given element.

Returns: The tags that contain the given elements.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
ITagManager.getTagsFor(element as ResourceLocation) as stdlib.List<T>
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| element   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=idElements}

Gets the [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.

Returns: A List of [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// ITagManager.idElements(of as T) as stdlib.List<ResourceLocation>

<tagmanager:items>.idElements(<tag:items:minecraft:wool>);
```

| Parameter | Type |           Description           |
|-----------|------|---------------------------------|
| of        | T    | The tag to get the elements of. |


:::

:::group{name=removeId}

Removes the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) from the given tag.

```zenscript
// ITagManager.removeId(from as T, values as ResourceLocation[])

<tagmanager:items>.removeId(<tag:items:minecraft:wool>, <resource:minecraft:diamond>);
```

| Parameter |                             Type                             |                 Description                 |
|-----------|--------------------------------------------------------------|---------------------------------------------|
| from      | T                                                            | The tag to remove from.                     |
| values    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to remove. |


:::

:::group{name=tag}

Gets a tag with the given id.

Returns: A tag with the given id.  
Return Type: T

```zenscript
// ITagManager.tag(id as ResourceLocation) as T

<tagmanager:items>.tag(<resource:minecraft:wool>);
```

| Parameter |                            Type                            |    Description     |
|-----------|------------------------------------------------------------|--------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The id of the tag. |


:::

:::group{name=tag}

Gets a tag with the given id.

Returns: A tag with the given id.  
Return Type: T

```zenscript
// ITagManager.tag(id as string) as T

<tagmanager:items>.tag("minecraft:wool");
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| id        | string | The id of the tag. |


:::

:::group{name=tagFolder}

Gets the tagFolder of this manager.

 The tag folder is usually the folder on disk without the `tags/` prefix.

 Examples:
 <ul>
 <li>`tags/items` turns into `items`</li>
 <li>`tags/potion` turns into `potion`</li>
 <li>`tags/worldgen/biome` turns into `worldgen/biome`</li>
 </ul>

Returns: The tag folder of this manager.  
Return Type: string

```zenscript
// ITagManager.tagFolder() as string

<tagmanager:items>.tagFolder();
```

:::

:::group{name=tagKeys}

Gets the keys of the tags that this manager knows about.

Returns: A List of keys of the tags that this manager knows about.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// ITagManager.tagKeys() as stdlib.List<ResourceLocation>

<tagmanager:items>.tagKeys();
```

:::

:::group{name=tagMap}

Gets a map of id to tag that this manager knows about.

Returns: a map of id to tag.  
Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// ITagManager.tagMap() as T[ResourceLocation]

<tagmanager:items>.tagMap();
```

:::

:::group{name=tags}

Ges the tags that this manager knows about.

Returns: The tags that this manager knows about.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
// ITagManager.tags() as stdlib.List<T>

<tagmanager:items>.tags();
```

:::


## Operators

:::group{name=CONTAINS}

Checks if a tag with the given id exists and is registered.

```zenscript
id as string in myITagManager
"minecraft:wool" in <tagmanager:items>
```

:::


## Properties

|   Name    |                                     Type                                      | Has Getter | Has Setter |                                                                                                                                                                       Description                                                                                                                                                                        |
|-----------|-------------------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tagFolder | string                                                                        | true       | false      | Gets the tagFolder of this manager. <br />  <br />  The tag folder is usually the folder on disk without the `tags/` prefix. <br />  <br />  Examples: <br />  <ul> <br />  <li>`tags/items` turns into `items`</li> <br />  <li>`tags/potion` turns into `potion`</li> <br />  <li>`tags/worldgen/biome` turns into `worldgen/biome`</li> <br />  </ul> |
| tagKeys   | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true       | false      | Gets the keys of the tags that this manager knows about.                                                                                                                                                                                                                                                                                                 |
| tagMap    | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]                 | true       | false      | Gets a map of id to tag that this manager knows about.                                                                                                                                                                                                                                                                                                   |
| tags      | stdlib.List&lt;T&gt;                                                          | true       | false      | Ges the tags that this manager knows about.                                                                                                                                                                                                                                                                                                              |


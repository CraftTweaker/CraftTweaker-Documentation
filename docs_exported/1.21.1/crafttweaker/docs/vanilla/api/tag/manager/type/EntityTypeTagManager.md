# EntityTypeTagManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.manager.type.EntityTypeTagManager;
```


## Extending KnownTagManager&lt;EntityType<Entity>&gt;

EntityTypeTagManager extends [KnownTagManager](/vanilla/api/tag/manager/type/KnownTagManager)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt;. That means all methods available in [KnownTagManager](/vanilla/api/tag/manager/type/KnownTagManager)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt; are also available in EntityTypeTagManager

## Methods

:::group{name=addElements}

```zenscript
EntityTypeTagManager.addElements(to as KnownTag<T>, values as T[])
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| to        | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt; |
| values    | T[]                                                 |


:::

:::group{name=elements}

Gets the elements of the given tag.

Returns: The list of elements in the tag.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
// EntityTypeTagManager.elements(of as KnownTag<T>) as stdlib.List<T>

myEntityTypeTagManager.elements(<tag:item:minecraft:dirt>);
```

| Parameter |                        Type                         |           Description           |
|-----------|-----------------------------------------------------|---------------------------------|
| of        | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt; | The tag to get the elements of. |


:::

:::group{name=exists}

Checks if a tag with the given id exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// EntityTypeTagManager.exists(id as ResourceLocation) as boolean

myEntityTypeTagManager.exists(<resource:minecraft:wool>);
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
// EntityTypeTagManager.exists(id as string) as boolean

myEntityTypeTagManager.exists("minecraft:wool");
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
// EntityTypeTagManager.exists(tag as T) as boolean

myEntityTypeTagManager.exists(<tag:item:minecraft:wool>);
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
EntityTypeTagManager.getTagsFor(element as ResourceLocation) as stdlib.List<T>
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| element   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=getTagsFor}

Return Type: stdlib.List&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;&gt;

```zenscript
EntityTypeTagManager.getTagsFor(element as T) as stdlib.List<KnownTag<T>>
```

| Parameter | Type |
|-----------|------|
| element   | T    |


:::

:::group{name=idElements}

Gets the [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.

Returns: A List of [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// EntityTypeTagManager.idElements(of as T) as stdlib.List<ResourceLocation>

myEntityTypeTagManager.idElements(<tag:item:minecraft:wool>);
```

| Parameter | Type |           Description           |
|-----------|------|---------------------------------|
| of        | T    | The tag to get the elements of. |


:::

:::group{name=removeElements}

```zenscript
EntityTypeTagManager.removeElements(from as KnownTag<T>, values as T[])
```

| Parameter |                        Type                         |
|-----------|-----------------------------------------------------|
| from      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt; |
| values    | T[]                                                 |


:::

:::group{name=removeId}

```zenscript
EntityTypeTagManager.removeId(from as KnownTag<T>, values as ResourceLocation[])
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| from      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;          |
| values    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] |


:::

:::group{name=tag}

Return Type: [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;

```zenscript
EntityTypeTagManager.tag(id as ResourceLocation) as KnownTag<T>
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=tag}

Return Type: [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;

```zenscript
EntityTypeTagManager.tag(id as string) as KnownTag<T>
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


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
// EntityTypeTagManager.tagFolder() as string

myEntityTypeTagManager.tagFolder();
```

:::

:::group{name=tagMap}

Return Type: [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// EntityTypeTagManager.tagMap() as KnownTag<T>[ResourceLocation]

myEntityTypeTagManager.tagMap();
```

:::

:::group{name=tags}

Ges the tags that this manager knows about.

Returns: The tags that this manager knows about.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
// EntityTypeTagManager.tags() as stdlib.List<T>

myEntityTypeTagManager.tags();
```

:::


## Operators

:::group{name=CONTAINS}

Checks if a tag with the given id exists and is registered.

```zenscript
id as string in myEntityTypeTagManager
"minecraft:wool" in myEntityTypeTagManager
```

:::


## Properties

|   Name    |                                                      Type                                                       | Has Getter | Has Setter |                                                                                                                                                                       Description                                                                                                                                                                        |
|-----------|-----------------------------------------------------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tagFolder | string                                                                                                          | true       | false      | Gets the tagFolder of this manager. <br />  <br />  The tag folder is usually the folder on disk without the `tags/` prefix. <br />  <br />  Examples: <br />  <ul> <br />  <li>`tags/items` turns into `items`</li> <br />  <li>`tags/potion` turns into `potion`</li> <br />  <li>`tags/worldgen/biome` turns into `worldgen/biome`</li> <br />  </ul> |
| tagMap    | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |                                                                                                                                                                                                                                                                                                                                                          |
| tags      | stdlib.List&lt;T&gt;                                                                                            | true       | false      | Ges the tags that this manager knows about.                                                                                                                                                                                                                                                                                                              |


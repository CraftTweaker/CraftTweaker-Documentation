# MCTag

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## Implemented Interfaces
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)
- Comparable&lt;[MCTag](/vanilla/api/tag/MCTag)&gt;

## Methods

:::group{name=add}

Adds the given tags to this tag.

```zenscript
// MCTag.add(tags as MCTag[])

<tag:items:minecraft:wool>.add(<tag:items:minecraft:wool>);
```

| Parameter |               Type                |   Description    |
|-----------|-----------------------------------|------------------|
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to add. |


:::

:::group{name=addId}

Adds the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) to this tag.

```zenscript
// MCTag.addId(elements as ResourceLocation[])

<tag:items:minecraft:wool>.addId(<resource:minecraft:diamond>);
```

| Parameter |                             Type                             |               Description                |
|-----------|--------------------------------------------------------------|------------------------------------------|
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to add. |


:::

:::group{name=clear}

Removes all elements in this tag.

```zenscript
// MCTag.clear()

<tag:items:minecraft:wool>.clear();
```

:::

:::group{name=contains}

Checks if this tag contains an element with the given id

Returns: true if it contains the element, false otherwise.  
Return Type: boolean

```zenscript
// MCTag.contains(id as ResourceLocation) as boolean

<tag:items:minecraft:wool>.contains(<resource:minecraft:white_wool>);
```

| Parameter |                            Type                            |           Description           |
|-----------|------------------------------------------------------------|---------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The ID of the element to check. |


:::

:::group{name=equals}

Checks if this tag equals the other tag.

Returns: true if the tags are equal, false otherwise.  
Return Type: boolean

```zenscript
// MCTag.equals(other as MCTag) as boolean

<tag:items:minecraft:wool>.equals(<tag:items:minecraft:wool>);
```

| Parameter |              Type               |        Description        |
|-----------|---------------------------------|---------------------------|
| other     | [MCTag](/vanilla/api/tag/MCTag) | The tag to check against. |


:::

:::group{name=exists}

Checks if this tag exists.

Returns: true if this tag exists, false otherwise.  
Return Type: boolean

```zenscript
// MCTag.exists() as boolean

<tag:items:minecraft:wool>.exists();
```

:::

:::group{name=id}

Gets the id of this tag.

Returns: The id of this tag.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// MCTag.id() as ResourceLocation

<tag:items:minecraft:wool>.id();
```

:::

:::group{name=idElements}

Gets the id's of the elements in this tag.

Returns: The id's elements in this tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// MCTag.idElements() as stdlib.List<ResourceLocation>

<tag:items:minecraft:wool>.idElements();
```

:::

:::group{name=remove}

Removes the given tags from this tag.

```zenscript
// MCTag.remove(tags as MCTag[])

<tag:items:minecraft:wool>.remove(<tag:items:minecraft:wool>);
```

| Parameter |               Type                |     Description     |
|-----------|-----------------------------------|---------------------|
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to remove. |


:::

:::group{name=removeId}

Removes the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) from this tag.

```zenscript
// MCTag.removeId(elements as ResourceLocation[])

<tag:items:minecraft:wool>.removeId(<resource:minecraft:diamond>);
```

| Parameter |                             Type                             |                 Description                 |
|-----------|--------------------------------------------------------------|---------------------------------------------|
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to remove. |


:::


## Operators

:::group{name=CONTAINS}

Checks if this tag contains an element with the given id

```zenscript
id as ResourceLocation in myMCTag
<resource:minecraft:white_wool> in <tag:items:minecraft:wool>
```

:::

:::group{name=EQUALS}

Checks if this tag equals the other tag.

```zenscript
myMCTag == other as MCTag
<tag:items:minecraft:wool> == <tag:items:minecraft:wool>
```

:::


## Properties

|    Name    |                                     Type                                      | Has Getter | Has Setter |                Description                 |
|------------|-------------------------------------------------------------------------------|------------|------------|--------------------------------------------|
| exists     | boolean                                                                       | true       | false      | Checks if this tag exists.                 |
| id         | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                    | true       | false      | Gets the id of this tag.                   |
| idElements | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true       | false      | Gets the id's of the elements in this tag. |


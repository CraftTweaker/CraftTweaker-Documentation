# UnknownTagManager

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.manager.type.UnknownTagManager;
```


## Interfacce Implementate
UnknownTagManager implements the following interfaces. That means all methods defined in these interfaces are also available in UnknownTagManager

- [ITagManager](/vanilla/api/tag/manager/ITagManager)&lt;[UnknownTag](/vanilla/api/tag/type/UnknownTag)&gt;

## Metodi

:::group{name=addId}

```zenscript
UnknownTagManager.addId(to as UnknownTag, values as ResourceLocation[])
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| to        | [UnknownTag](/vanilla/api/tag/type/UnknownTag)               |
| values    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] |


:::

:::group{name=exists}

Checks if a tag with the given id exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// UnknownTagManager.exists(id as ResourceLocation) as boolean

myUnknownTagManager.exists(<resource:minecraft:wool>);
```

| Parametro | Tipo                                                       | Descrizione                 |
| --------- | ---------------------------------------------------------- | --------------------------- |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The id of the tag to check. |


:::

:::group{name=exists}

Checks if a tag with the given id exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// UnknownTagManager.exists(id as string) as boolean

myUnknownTagManager.exists("minecraft:wool");
```

| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| id        | string | The id of the tag to check. |


:::

:::group{name=exists}

Checks if the given tag exists and is registered.

Returns: true if it exists, false otherwise.  
Return Type: boolean

```zenscript
// UnknownTagManager.exists(tag as T) as boolean

myUnknownTagManager.exists(<tag:items:minecraft:wool>);
```

| Parametro | Tipo | Descrizione       |
| --------- | ---- | ----------------- |
| tag       | T    | The tag to check. |


:::

:::group{name=getTagsFor}

Ges the tags that contain the given element.

Returns: The tags that contain the given elements.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
UnknownTagManager.getTagsFor(element as ResourceLocation) as stdlib.List<T>
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| element   | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=idElements}

Gets the [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.

Returns: A List of [ResourceLocation](/vanilla/api/resource/ResourceLocation) ids of the elements in the given tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// UnknownTagManager.idElements(of as T) as stdlib.List<ResourceLocation>

myUnknownTagManager.idElements(<tag:items:minecraft:wool>);
```

| Parametro | Tipo | Descrizione                     |
| --------- | ---- | ------------------------------- |
| of        | T    | The tag to get the elements of. |


:::

:::group{name=removeId}

```zenscript
UnknownTagManager.removeId(from as UnknownTag, values as ResourceLocation[])
```

| Parametro | Tipo                                                         |
| --------- | ------------------------------------------------------------ |
| from      | [UnknownTag](/vanilla/api/tag/type/UnknownTag)               |
| values    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] |


:::

:::group{name=tag}

Return Type: [UnknownTag](/vanilla/api/tag/type/UnknownTag)

```zenscript
UnknownTagManager.tag(id as ResourceLocation) as UnknownTag
```

| Parametro | Tipo                                                       |
| --------- | ---------------------------------------------------------- |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=tag}

Return Type: [UnknownTag](/vanilla/api/tag/type/UnknownTag)

```zenscript
UnknownTagManager.tag(id as string) as UnknownTag
```

| Parametro | Tipo   |
| --------- | ------ |
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
// UnknownTagManager.tagFolder() as string

myUnknownTagManager.tagFolder();
```

:::

:::group{name=tagMap}

Return Type: [UnknownTag](/vanilla/api/tag/type/UnknownTag)[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// UnknownTagManager.tagMap() as UnknownTag[ResourceLocation]

myUnknownTagManager.tagMap();
```

:::

:::group{name=tags}

Ges the tags that this manager knows about.

Returns: The tags that this manager knows about.  
Return Type: stdlib.List&lt;T&gt;

```zenscript
// UnknownTagManager.tags() as stdlib.List<T>

myUnknownTagManager.tags();
```

:::


## Operators

:::group{name=CONTAINS}

Checks if a tag with the given id exists and is registered.

```zenscript
id as string in myUnknownTagManager
"minecraft:wool" in myUnknownTagManager
```

:::


## Proprietà

| Nome      | Tipo                                                                                                       | Ha Getter | Ha Setter | Descrizione                                                                                                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tagFolder | string                                                                                                     | sì        | no        | Gets the tagFolder of this manager. <br />  <br />  The tag folder is usually the folder on disk without the `tags/` prefix. <br />  <br />  Examples: <br />  <ul> <br />  <li>`tags/items` turns into `items`</li> <br />  <li>`tags/potion` turns into `potion`</li> <br />  <li>`tags/worldgen/biome` turns into `worldgen/biome`</li> <br />  </ul> |
| tagMap    | [UnknownTag](/vanilla/api/tag/type/UnknownTag)[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        |                                                                                                                                                                                                                      |
| tags      | stdlib.List&lt;T&gt;                                                                           | sì        | no        | Ges the tags that this manager knows about.                                                                                                                                                                          |


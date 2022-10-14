# ITagManager&LT;T : Object&GT;

TagManagers are used to handle the different types of Tags within the game. They can be retrieved directly with the ITagManager BEP, and are also used indirectly when creating a tag with the Tag BEP.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.ITagManager;
```


## Implemented Interfaces
ITagManager implements the following interfaces. That means all methods defined in these interfaces are also available in ITagManager

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Methoden

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether this tag already exists  
Return Type: boolean

```zenscript
ITagManager.exists(location as ResourceLocation) as boolean
```

| Parameter | Type                                                       | Beschreibung                       |
| --------- | ---------------------------------------------------------- | ---------------------------------- |
| standort  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The resource location to check for |


:::

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether or not this tag already exists  
Return Type: boolean

```zenscript
ITagManager.exists(name as string) as boolean
```

| Parameter | Type   | Beschreibung                       |
| --------- | ------ | ---------------------------------- |
| name      | string | The resource location to check for |


:::

:::group{name=getAllTags}

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt;

```zenscript
// ITagManager.getAllTags() as stdlib.List<MCTag<T>>

myITagManager.getAllTags();
```

:::

:::group{name=getAllTagsFor}

Retrieves all tags contain the provided element

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt;

```zenscript
ITagManager.getAllTagsFor(element as T) as stdlib.List<MCTag<T>>
```

| Parameter | Type | Beschreibung                              |
| --------- | ---- | ----------------------------------------- |
| element   | T    | The element whose tags should be returned |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;

```zenscript
ITagManager.getTag(location as ResourceLocation) as MCTag<T>
```

| Parameter | Type                                                       | Beschreibung                     |
| --------- | ---------------------------------------------------------- | -------------------------------- |
| standort  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The Resource location of the tag |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;

```zenscript
ITagManager.getTag(name as string) as MCTag<T>
```

| Parameter | Type   | Beschreibung                     |
| --------- | ------ | -------------------------------- |
| name      | string | The Resource location of the tag |


:::

:::group{name=getTagFolder}

Get the tag type. In a Bracket call, this will used to determine which ITagManager to use.

 `<tag:{tag_type`:tag_location:tag_name>} <br> `<tagManager:{tag_type`>}

Return Type: string

```zenscript
// ITagManager.getTagFolder() as string

myITagManager.getTagFolder();
```

:::


## Operatoren

:::group{name=CONTAINS}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myITagManager
```

:::


## Properties

| Name    | Type                                                                                | Has Getter | Has Setter | Beschreibung                                                                                                                                                                                                                |
| ------- | ----------------------------------------------------------------------------------- | ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| all     | stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt; | true       | false      | Retrieves a list of all tags currently registered.                                                                                                                                                                          |
| tagType | string                                                                              | true       | false      | Get the tag type. In a Bracket call, this will used to determine which ITagManager to use. <br />   <br />  `<tag:{tag_type`:tag_location:tag_name>} <br> <br />  `<tagManager:{tag_type`>} |


# TagManager&LT;T : Object&GT;

TagManagers are used to handle the different types of Tags within the game. They can be retrieved directly with the TagManager BEP, and are also used indirectly when creating a tag with the Tag BEP.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.TagManager;
```


## Implemented Interfaces
TagManager implements the following interfaces. That means all methods defined in these interfaces are also available in TagManager

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether or not this tag already exists  
Return Type: boolean

```zenscript
TagManager.exists(location as MCResourceLocation) as boolean
```

| Параметр       | Тип                                                                      | Описание                           |
| -------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| местоположение | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | The resource location to check for |


:::

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether or not this tag already exists  
Return Type: boolean

```zenscript
TagManager.exists(name as string) as boolean
```

| Параметр | Тип    | Описание                           |
| -------- | ------ | ---------------------------------- |
| name     | string | The resource location to check for |


:::

:::group{name=getAllTags}

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
// TagManager.getAllTags() as stdlib.List<MCTag<T>>

myTagManager.getAllTags();
```

:::

:::group{name=getAllTagsFor}

Retrieves all tags contain the provided element

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
TagManager.getAllTagsFor(element as T) as stdlib.List<MCTag<T>>
```

| Параметр | Тип | Описание                                  |
| -------- | --- | ----------------------------------------- |
| element  | T   | The element whose tags should be returned |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManager.getTag(location as MCResourceLocation) as MCTag<T>
```

| Параметр       | Тип                                                                      | Описание                         |
| -------------- | ------------------------------------------------------------------------ | -------------------------------- |
| местоположение | [Расположение MCResource-ресурсов](/vanilla/api/util/MCResourceLocation) | The Resource location of the tag |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManager.getTag(name as string) as MCTag<T>
```

| Параметр | Тип    | Описание                         |
| -------- | ------ | -------------------------------- |
| name     | string | The Resource location of the tag |


:::

:::group{name=getTagFolder}

Get the tag type. In a Bracket call, this will used to determine which TagManager to use.

 `<tag:{tag_type`:tag_location:tag_name>} <br> `<tagManager:{tag_type`>}

Return Type: string

```zenscript
// TagManager.getTagFolder() as string

myTagManager.getTagFolder();
```

:::


## Операторы

:::group{name=CONTAINS}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myTagManager
```

:::


## Свойства

| Название | Тип                                                                                  | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------ | ------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| all      | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true         | false        | Retrieves a list of all tags currently registered.                                                                                                                                                                         |
| tagType  | string                                                                               | true         | false        | Get the tag type. In a Bracket call, this will used to determine which TagManager to use. <br />   <br />  `<tag:{tag_type`:tag_location:tag_name>} <br> <br />  `<tagManager:{tag_type`>} |


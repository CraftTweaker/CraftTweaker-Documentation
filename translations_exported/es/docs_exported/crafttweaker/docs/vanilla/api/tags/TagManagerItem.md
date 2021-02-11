# TagManagerItem

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.TagManagerItem;
```


## Implemented Interfaces
TagManagerItem implements the following interfaces. That means all methods defined in these interfaces are also available in TagManagerItem

- [TagManager](/vanilla/api/tags/TagManager)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt;

## Methods

### exists

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerItem.exists(location as MCResourceLocation) as boolean
```

| Parameter | Type                                                         | Description                        |
| --------- | ------------------------------------------------------------ | ---------------------------------- |
| ubicación | [Ubicación MCResource](/vanilla/api/util/MCResourceLocation) | The resource location to check for |


Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerItem.exists(name as string) as boolean
```

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| name      | string | The resource location to check for |


### getAllTags

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
TagManagerItem.getAllTags() as stdlib.List<MCTag<T>>
myTagManagerItem.getAllTags();
```

### getTag

Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerItem.getTag(location as MCResourceLocation) as MCTag<T>
```

| Parameter | Type                                                         | Description                      |
| --------- | ------------------------------------------------------------ | -------------------------------- |
| ubicación | [Ubicación MCResource](/vanilla/api/util/MCResourceLocation) | The Resource location of the tag |


Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerItem.getTag(name as string) as MCTag<T>
```

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| name      | string | The Resource location of the tag |



## Operators

### CONTAINS

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myTagManagerItem
```




## Properties

| Name | Type                                                                                 | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------------------------------ | ---------- | ---------- |
| all  | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true       | false      |


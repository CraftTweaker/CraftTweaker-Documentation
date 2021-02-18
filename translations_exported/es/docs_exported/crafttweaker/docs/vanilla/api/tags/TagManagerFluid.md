# TagManagerFluid

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.TagManagerFluid;
```


## Implemented Interfaces
TagManagerFluid implements the following interfaces. That means all methods defined in these interfaces are also available in TagManagerFluid

- [TagManager](/vanilla/api/tags/TagManager)&lt;[MCFluid](/vanilla/api/fluid/MCFluid)&gt;

## Methods

### exists

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerFluid.exists(location as MCResourceLocation) as boolean
```

| Parameter | Type                                                         | Description                        |
| --------- | ------------------------------------------------------------ | ---------------------------------- |
| ubicación | [Ubicación MCResource](/vanilla/api/util/MCResourceLocation) | The resource location to check for |


Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Return Type: boolean

```zenscript
TagManagerFluid.exists(name as string) as boolean
```

| Parameter | Type   | Description                        |
| --------- | ------ | ---------------------------------- |
| name      | string | The resource location to check for |


### getAllTags

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt;

```zenscript
TagManagerFluid.getAllTags() as stdlib.List<MCTag<T>>
myTagManagerFluid.getAllTags();
```

### getTag

Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerFluid.getTag(location as MCResourceLocation) as MCTag<T>
```

| Parameter | Type                                                         | Description                      |
| --------- | ------------------------------------------------------------ | -------------------------------- |
| ubicación | [Ubicación MCResource](/vanilla/api/util/MCResourceLocation) | The Resource location of the tag |


Retrieves a tag by its name. Will also be called by the BEP. <p> Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
TagManagerFluid.getTag(name as string) as MCTag<T>
```

| Parameter | Type   | Description                      |
| --------- | ------ | -------------------------------- |
| name      | string | The Resource location of the tag |



## Operators

### CONTAINS

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myTagManagerFluid
```




## Properties

| Name | Type                                                                                 | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------------------------------ | ---------- | ---------- |
| all  | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | true       | false      |


# MCTag&LT;T : Object&GT;

A reference to a Tag object. Note that this tag may not exist in the game already, such as when you create new tags. See the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;#exists() Method on whether or not this tag already exists. <p> A tag will be created as soon as you add

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## Implemented Interfaces
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Casters

| Result type                                                               | Is Implicit |
| ------------------------------------------------------------------------- | ----------- |
| [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt; | true        |
| string                                                                    | true        |

## Methods

### add

Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<T>) as void
```

| Parameter | Type                             | Description                         |
| --------- | -------------------------------- | ----------------------------------- |
| items     | stdlib.List&lt;T&gt; | The items to add. Provided as list. |


Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
MCTag.add(items as T[]) as void
<tag:items:forge:gems>.add(<item:minecraft:bedrock>);
<tag:items:forge:gems>.add(<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>);
<tag:items:forge:gems>.add([<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>]);
```

| Parameter | Type | Description                                 |
| --------- | ---- | ------------------------------------------- |
| items     | T[]  | The items to add. Can be one or more items. |


### asTagWithAmount

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTag.asTagWithAmount() as MCTagWithAmount<T>
<tag:items:forge:gems>.asTagWithAmount();
```

### contains

Return Type: boolean

```zenscript
MCTag.contains(element as T) as boolean
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| element   | T    | No Description Provided |


### exists

Return Type: boolean

```zenscript
MCTag.exists() as boolean
<tag:items:forge:gems>.exists();
```

### getElements

Return Type: stdlib.List&lt;T&gt;

```zenscript
MCTag.getElements() as stdlib.List<T>
<tag:items:forge:gems>.getElements();
```

### getId

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCTag.getId() as MCResourceLocation
<tag:items:forge:gems>.getId();
```

### getManager

Return Type: [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt;

```zenscript
MCTag.getManager() as TagManager<T>
<tag:items:forge:gems>.getManager();
```

### remove

Return Type: void

```zenscript
MCTag.remove(items as stdlib.List<T>) as void
```

| Parameter | Type                             | Description             |
| --------- | -------------------------------- | ----------------------- |
| items     | stdlib.List&lt;T&gt; | No Description Provided |


Return Type: void

```zenscript
MCTag.remove(items as T[]) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| items     | T[]  | No Description Provided |


### withAmount

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTag.withAmount(amount as int) as MCTagWithAmount<T>
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |



## Operators

### CONTAINS

```zenscript
element as T in myMCTag
```



### EQUALS

```zenscript
myMCTag == other as MCTag<T>
```



### MUL

```zenscript
myMCTag * amount as int
```




## Properties

| Name     | Type                                                                  | Has Getter | Has Setter |
| -------- | --------------------------------------------------------------------- | ---------- | ---------- |
| elements | stdlib.List&lt;T&gt;                                      | true       | false      |
| exists   | boolean                                                               | true       | false      |
| id       | [format@@0 MCRessourceLocation](/vanilla/api/util/MCResourceLocation) | true       | false      |
| manager  | [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt;       | true       | false      |


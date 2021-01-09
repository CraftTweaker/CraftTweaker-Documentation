# MCTag&LT;T : Object&GT;

A reference to a Tag object. Note that this tag may not exist in the game already, such as when you create new tags. See the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;#exists() Method on whether or not this tag already exists. <p> A tag will be created as soon as you add

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## Interfacce Implementate
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | true      |

## Methods

### add

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<T>) as void
```
| Parameter | Type                             | Description             |
| --------- | -------------------------------- | ----------------------- |
| items     | stdlib.List&lt;T&gt; | No Description Provided |

Return Type: void

```zenscript
MCTag.add(items as T[]) as void
```
| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| items     | T[]  | No Description Provided |

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
myMCTag.exists();
```
### getElements

Return Type: stdlib.List&lt;T&gt;

```zenscript
MCTag.getElements() as stdlib.List<T>
myMCTag.getElements();
```
### getId

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCTag.getId() as MCResourceLocation
myMCTag.getId();
```
### getManager

Return Type: [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt;

```zenscript
MCTag.getManager() as TagManager<T>
myMCTag.getManager();
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


## Operators

### CONTAINS

```zenscript
element as T in myMCTag
```


### EQUALS

```zenscript
myMCTag == other as MCTag<T>
```



## Properties

| Name     | Type                                                            | Ha Getter | Ha Setter |
| -------- | --------------------------------------------------------------- | --------- | --------- |
| elements | stdlib.List&lt;T&gt;                                | true      | false     |
| exists   | boolean                                                         | true      | false     |
| id       | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)      | true      | false     |
| manager  | [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt; | true      | false     |


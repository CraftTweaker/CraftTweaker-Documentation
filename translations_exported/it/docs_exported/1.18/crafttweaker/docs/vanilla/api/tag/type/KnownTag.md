# KnownTag&LT;T : Object&GT;

A known tag is a tag whose element is known and has been registered as Taggable.

 Known tags let you use the actual element to interact with the tag instead of using the registry key of the element

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.type.KnownTag;
```


## Interfacce Implementate
KnownTag implements the following interfaces. That means all methods defined in these interfaces are also available in KnownTag

- [MCTag](/vanilla/api/tag/MCTag)
- stdlib.Iterable&lt;T&gt;

## Caster

| Result Type                                                                                                       | Implicito |
| ----------------------------------------------------------------------------------------------------------------- | --------- |
| [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;&gt; | sì        |
| string                                                                                                            | sì        |

## Metodi

:::group{name=add}

```zenscript
KnownTag.add(elements as T[])
```

| Parametro | Tipo |
| --------- | ---- |
| elements  | T[]  |


:::

:::group{name=add}

Adds the given tags to this tag.

```zenscript
// KnownTag.add(tags as MCTag[])

myKnownTag.add(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                              | Descrizione      |
| --------- | --------------------------------- | ---------------- |
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to add. |


:::

:::group{name=addId}

Adds the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) to this tag.

```zenscript
// KnownTag.addId(elements as ResourceLocation[])

myKnownTag.addId(<resource:minecraft:diamond>);
```

| Parametro | Tipo                                                         | Descrizione                              |
| --------- | ------------------------------------------------------------ | ---------------------------------------- |
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to add. |


:::

:::group{name=asTagWithAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;&gt;

```zenscript
// KnownTag.asTagWithAmount() as Many<KnownTag<T>>

myKnownTag.asTagWithAmount();
```

:::

:::group{name=clear}

Removes all elements in this tag.

```zenscript
// KnownTag.clear()

myKnownTag.clear();
```

:::

:::group{name=contains}

Return Type: boolean

```zenscript
KnownTag.contains(element as T) as boolean
```

| Parametro | Tipo |
| --------- | ---- |
| element   | T    |


:::

:::group{name=contains}

Checks if this tag contains an element with the given id

Returns: true if it contains the element, false otherwise.  
Return Type: boolean

```zenscript
// KnownTag.contains(id as ResourceLocation) as boolean

myKnownTag.contains(<resource:minecraft:white_wool>);
```

| Parametro | Tipo                                                       | Descrizione                     |
| --------- | ---------------------------------------------------------- | ------------------------------- |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The ID of the element to check. |


:::

:::group{name=elements}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// KnownTag.elements() as stdlib.List<T>

myKnownTag.elements();
```

:::

:::group{name=equals}

Checks if this tag equals the other tag.

Returns: true if the tags are equal, false otherwise.  
Return Type: boolean

```zenscript
// KnownTag.equals(other as MCTag) as boolean

myKnownTag.equals(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                            | Descrizione               |
| --------- | ------------------------------- | ------------------------- |
| other     | [MCTag](/vanilla/api/tag/MCTag) | The tag to check against. |


:::

:::group{name=exists}

Checks if this tag exists.

Returns: true if this tag exists, false otherwise.  
Return Type: boolean

```zenscript
// KnownTag.exists() as boolean

myKnownTag.exists();
```

:::

:::group{name=id}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// KnownTag.id() as ResourceLocation

myKnownTag.id();
```

:::

:::group{name=idElements}

Gets the id's of the elements in this tag.

Returns: The id's elements in this tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// KnownTag.idElements() as stdlib.List<ResourceLocation>

myKnownTag.idElements();
```

:::

:::group{name=manager}

Return Type: [KnownTagManager](/vanilla/api/tag/manager/type/KnownTagManager)&lt;T&gt;

```zenscript
// KnownTag.manager() as KnownTagManager<T>

myKnownTag.manager();
```

:::

:::group{name=remove}

```zenscript
KnownTag.remove(elements as T[])
```

| Parametro | Tipo |
| --------- | ---- |
| elements  | T[]  |


:::

:::group{name=remove}

Removes the given tags from this tag.

```zenscript
// KnownTag.remove(tags as MCTag[])

myKnownTag.remove(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                              | Descrizione         |
| --------- | --------------------------------- | ------------------- |
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to remove. |


:::

:::group{name=removeId}

Removes the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) from this tag.

```zenscript
// KnownTag.removeId(elements as ResourceLocation[])

myKnownTag.removeId(<resource:minecraft:diamond>);
```

| Parametro | Tipo                                                         | Descrizione                                 |
| --------- | ------------------------------------------------------------ | ------------------------------------------- |
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to remove. |


:::

:::group{name=withAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;T&gt;&gt;

```zenscript
KnownTag.withAmount(amount as int) as Many<KnownTag<T>>
```

| Parametro | Tipo |
| --------- | ---- |
| amount    | int  |


:::


## Operators

:::group{name=CONTAINS}

Checks if this tag contains an element with the given id

```zenscript
id as ResourceLocation in myKnownTag
<resource:minecraft:white_wool> in myKnownTag
```

:::

:::group{name=EQUALS}

Checks if this tag equals the other tag.

```zenscript
myKnownTag == other as MCTag
myKnownTag == <tag:items:minecraft:wool>
```

:::

:::group{name=MUL}

```zenscript
myKnownTag * amount as int
```

:::


## Proprietà

| Nome       | Tipo                                                                                      | Ha Getter | Ha Setter | Descrizione                                |
| ---------- | ----------------------------------------------------------------------------------------- | --------- | --------- | ------------------------------------------ |
| elements   | stdlib.List&lt;T&gt;                                                          | sì        | no        |                                            |
| exists     | boolean                                                                                   | sì        | no        | Checks if this tag exists.                 |
| id         | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                | sì        | no        |                                            |
| idElements | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | sì        | no        | Gets the id's of the elements in this tag. |
| manager    | [KnownTagManager](/vanilla/api/tag/manager/type/KnownTagManager)&lt;T&gt;     | sì        | no        |                                            |


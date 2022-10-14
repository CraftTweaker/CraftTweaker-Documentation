# UnknownTag

An unknown tag is a tag whose element is not known or has not been registered as Taggable.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.type.UnknownTag;
```


## Interfacce Implementate
UnknownTag implements the following interfaces. That means all methods defined in these interfaces are also available in UnknownTag

- [MCTag](/vanilla/api/tag/MCTag)

## Caster

| Result Type                                                                                      | Implicito |
| ------------------------------------------------------------------------------------------------ | --------- |
| [Many](/vanilla/api/util/Many)&lt;[UnknownTag](/vanilla/api/tag/type/UnknownTag)&gt; | sì        |
| string                                                                                           | sì        |

## Metodi

:::group{name=add}

Adds the given tags to this tag.

```zenscript
// UnknownTag.add(tags as MCTag[])

myUnknownTag.add(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                              | Descrizione      |
| --------- | --------------------------------- | ---------------- |
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to add. |


:::

:::group{name=addId}

Adds the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) to this tag.

```zenscript
// UnknownTag.addId(elements as ResourceLocation[])

myUnknownTag.addId(<resource:minecraft:diamond>);
```

| Parametro | Tipo                                                         | Descrizione                              |
| --------- | ------------------------------------------------------------ | ---------------------------------------- |
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to add. |


:::

:::group{name=asTagWithAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[UnknownTag](/vanilla/api/tag/type/UnknownTag)&gt;

```zenscript
// UnknownTag.asTagWithAmount() as Many<UnknownTag>

myUnknownTag.asTagWithAmount();
```

:::

:::group{name=clear}

Removes all elements in this tag.

```zenscript
// UnknownTag.clear()

myUnknownTag.clear();
```

:::

:::group{name=contains}

Checks if this tag contains an element with the given id

Returns: true if it contains the element, false otherwise.  
Return Type: boolean

```zenscript
// UnknownTag.contains(id as ResourceLocation) as boolean

myUnknownTag.contains(<resource:minecraft:white_wool>);
```

| Parametro | Tipo                                                       | Descrizione                     |
| --------- | ---------------------------------------------------------- | ------------------------------- |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The ID of the element to check. |


:::

:::group{name=equals}

Checks if this tag equals the other tag.

Returns: true if the tags are equal, false otherwise.  
Return Type: boolean

```zenscript
// UnknownTag.equals(other as MCTag) as boolean

myUnknownTag.equals(<tag:items:minecraft:wool>);
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
// UnknownTag.exists() as boolean

myUnknownTag.exists();
```

:::

:::group{name=id}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// UnknownTag.id() as ResourceLocation

myUnknownTag.id();
```

:::

:::group{name=idElements}

Gets the id's of the elements in this tag.

Returns: The id's elements in this tag.  
Return Type: stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// UnknownTag.idElements() as stdlib.List<ResourceLocation>

myUnknownTag.idElements();
```

:::

:::group{name=manager}

Return Type: [UnknownTagManager](/vanilla/api/tag/manager/type/UnknownTagManager)

```zenscript
// UnknownTag.manager() as UnknownTagManager

myUnknownTag.manager();
```

:::

:::group{name=remove}

Removes the given tags from this tag.

```zenscript
// UnknownTag.remove(tags as MCTag[])

myUnknownTag.remove(<tag:items:minecraft:wool>);
```

| Parametro | Tipo                              | Descrizione         |
| --------- | --------------------------------- | ------------------- |
| tags      | [MCTag](/vanilla/api/tag/MCTag)[] | The tags to remove. |


:::

:::group{name=removeId}

Removes the elements that correspond to the given [ResourceLocation](/vanilla/api/resource/ResourceLocation) from this tag.

```zenscript
// UnknownTag.removeId(elements as ResourceLocation[])

myUnknownTag.removeId(<resource:minecraft:diamond>);
```

| Parametro | Tipo                                                         | Descrizione                                 |
| --------- | ------------------------------------------------------------ | ------------------------------------------- |
| elements  | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[] | The registry key of the elements to remove. |


:::

:::group{name=withAmount}

Return Type: [Many](/vanilla/api/util/Many)&lt;[UnknownTag](/vanilla/api/tag/type/UnknownTag)&gt;

```zenscript
UnknownTag.withAmount(amount as int) as Many<UnknownTag>
```

| Parametro | Tipo |
| --------- | ---- |
| amount    | int  |


:::


## Operators

:::group{name=CONTAINS}

Checks if this tag contains an element with the given id

```zenscript
id as ResourceLocation in myUnknownTag
<resource:minecraft:white_wool> in myUnknownTag
```

:::

:::group{name=EQUALS}

Checks if this tag equals the other tag.

```zenscript
myUnknownTag == other as MCTag
myUnknownTag == <tag:items:minecraft:wool>
```

:::

:::group{name=MUL}

```zenscript
myUnknownTag * amount as int
```

:::


## Proprietà

| Nome       | Tipo                                                                                      | Ha Getter | Ha Setter | Descrizione                                |
| ---------- | ----------------------------------------------------------------------------------------- | --------- | --------- | ------------------------------------------ |
| exists     | boolean                                                                                   | sì        | no        | Checks if this tag exists.                 |
| id         | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                | sì        | no        |                                            |
| idElements | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | sì        | no        | Gets the id's of the elements in this tag. |
| manager    | [UnknownTagManager](/vanilla/api/tag/manager/type/UnknownTagManager)                      | sì        | no        |                                            |


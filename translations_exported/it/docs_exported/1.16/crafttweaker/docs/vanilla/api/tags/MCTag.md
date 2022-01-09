# MCTag&LT;T : Object&GT;

A reference to a Tag object. Note that this tag may not exist in the game already, such as when you create new tags. See the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;#exists() Method on whether or not this tag already exists.

 A tag will be created as soon as you add

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTag;
```


## Interfacce Implementate
MCTag implements the following interfaces. That means all methods defined in these interfaces are also available in MCTag

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Caster

| Tipo Risultato                                                            | Implicito |
| ------------------------------------------------------------------------- | --------- |
| [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt; | sì        |
| string                                                                    | sì        |

## Metodi

:::group{name=add}

Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
MCTag.add(items as stdlib.List<T>) as void
```

| Parametro | Tipo                             | Descrizione                         |
| --------- | -------------------------------- | ----------------------------------- |
| items     | stdlib.List&lt;T&gt; | The items to add. Provided as list. |


:::

:::group{name=add}

Adds the given items to the tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.add(items as T[]) as void

<tag:items:forge:gems>.add(<item:minecraft:bedrock>);
<tag:items:forge:gems>.add(<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>);
<tag:items:forge:gems>.add([<item:minecraft:iron_ingot>, <item:minecraft:gold_ingot>]);
```

| Parametro | Tipo | Descrizione                                 |
| --------- | ---- | ------------------------------------------- |
| items     | T[]  | The items to add. Can be one or more items. |


:::

:::group{name=add}

Adds the given tag to this tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.add(tag as MCTag<T>) as void

<tag:items:forge:gems>.add(<tag:items:forge:rods>);
```

| Parametro | Tipo                                                  | Descrizione     |
| --------- | ----------------------------------------------------- | --------------- |
| tag       | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | The tag to add. |


:::

:::group{name=addTags}

Adds the given tags to this tag. Creates the tag if it does not exist.

Return Type: void

```zenscript
// MCTag.addTags(tags as stdlib.List<MCTag<T>>) as void

<tag:items:forge:gems>.addTags(<tag:items:forge:rods>);
```

| Parametro | Tipo                                                                                 | Descrizione      |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| tags      | stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;&gt; | The tags to add. |


:::

:::group{name=asTagWithAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
// MCTag.asTagWithAmount() as MCTagWithAmount<T>

<tag:items:forge:gems>.asTagWithAmount();
```

:::

:::group{name=contains}

Return Type: boolean

```zenscript
MCTag.contains(element as T) as boolean
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| element   | T    | No Description Provided |


:::

:::group{name=exists}

Return Type: boolean

```zenscript
// MCTag.exists() as boolean

<tag:items:forge:gems>.exists();
```

:::

:::group{name=getElements}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MCTag.getElements() as stdlib.List<T>

<tag:items:forge:gems>.getElements();
```

:::

:::group{name=getId}

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// MCTag.getId() as MCResourceLocation

<tag:items:forge:gems>.getId();
```

:::

:::group{name=getManager}

Return Type: [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt;

```zenscript
// MCTag.getManager() as TagManager<T>

<tag:items:forge:gems>.getManager();
```

:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(items as stdlib.List<T>) as void
```

| Parametro | Tipo                             | Descrizione             |
| --------- | -------------------------------- | ----------------------- |
| items     | stdlib.List&lt;T&gt; | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(items as T[]) as void
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| items     | T[]  | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
MCTag.remove(tag as MCTag<T>) as void
```

| Parametro | Tipo                                                  | Descrizione             |
| --------- | ----------------------------------------------------- | ----------------------- |
| tag       | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | No Description Provided |


:::

:::group{name=withAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTag.withAmount(amount as int) as MCTagWithAmount<T>
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::


## Operators

:::group{name=CONTAINS}

```zenscript
element as T in myMCTag
```

:::

:::group{name=EQUALS}

```zenscript
myMCTag == other as MCTag<T>
```

:::

:::group{name=MUL}

```zenscript
myMCTag * amount as int
```

:::


## Proprietà

| Nome     | Tipo                                                            | Ha Getter | Ha Setter | Descrizione             |
| -------- | --------------------------------------------------------------- | --------- | --------- | ----------------------- |
| elements | stdlib.List&lt;T&gt;                                | sì        | no        | No Description Provided |
| exists   | boolean                                                         | sì        | no        | No Description Provided |
| id       | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)      | sì        | no        | No Description Provided |
| manager  | [TagManager](/vanilla/api/tags/TagManager)&lt;T&gt; | sì        | no        | No Description Provided |


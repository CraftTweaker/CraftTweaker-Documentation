# TagManagerFluid

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.TagManagerFluid;
```


## Interfacce Implementate
TagManagerFluid implements the following interfaces. That means all methods defined in these interfaces are also available in TagManagerFluid

- [ITagManager](/vanilla/api/tag/ITagManager)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;

## Metodi

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether this tag already exists  
Return Type: boolean

```zenscript
TagManagerFluid.exists(location as ResourceLocation) as boolean
```

| Parametro | Tipo                                                       | Descrizione                        |
| --------- | ---------------------------------------------------------- | ---------------------------------- |
| posizione | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The resource location to check for |


:::

:::group{name=exists}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

Returns: Whether or not this tag already exists  
Return Type: boolean

```zenscript
TagManagerFluid.exists(name as string) as boolean
```

| Parametro | Tipo   | Descrizione                        |
| --------- | ------ | ---------------------------------- |
| nome      | string | The resource location to check for |


:::

:::group{name=getAllTags}

Retrieves a list of all tags currently registered.

Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt;

```zenscript
// TagManagerFluid.getAllTags() as stdlib.List<MCTag<T>>

myTagManagerFluid.getAllTags();
```

:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;

```zenscript
TagManagerFluid.getTag(location as ResourceLocation) as MCTag<T>
```

| Parametro | Tipo                                                       | Descrizione                      |
| --------- | ---------------------------------------------------------- | -------------------------------- |
| posizione | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The Resource location of the tag |


:::

:::group{name=getTag}

Retrieves a tag by its name. Will also be called by the BEP.

 Note that this method does _not_ yet create the tag if it does not exist. Adding something to the object created by this tag will create it for the game.

Returns: A Tag object.  
Return Type: [MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;

```zenscript
TagManagerFluid.getTag(name as string) as MCTag<T>
```

| Parametro | Tipo   | Descrizione                      |
| --------- | ------ | -------------------------------- |
| nome      | string | The Resource location of the tag |


:::


## Operators

:::group{name=CONTAINS}

Checks if a tag already exists. Does the same as calling `.exists` on a tag directly

```zenscript
name as string in myTagManagerFluid
```

:::


## Proprietà

| Nome | Tipo                                                                                | Ha Getter | Ha Setter | Descrizione                                        |
| ---- | ----------------------------------------------------------------------------------- | --------- | --------- | -------------------------------------------------- |
| all  | stdlib.List&lt;[MCTag](/vanilla/api/tag/MCTag)&lt;T&gt;&gt; | sì        | no        | Retrieves a list of all tags currently registered. |


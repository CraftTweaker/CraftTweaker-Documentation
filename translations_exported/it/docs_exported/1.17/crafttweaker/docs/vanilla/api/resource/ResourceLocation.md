# ResourceLocation

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.resource.ResourceLocation;
```


## Interfacce Implementate
ResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in ResourceLocation

- Comparable&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

## Constructors


```zenscript
new ResourceLocation(namespace as string, path as string) as ResourceLocation
```
| Parametro | Tipo   | Descrizione                                                          |
| --------- | ------ | -------------------------------------------------------------------- |
| namespace | string | Usually a ModId                                                      |
| path      | string | May only contain lower-cased alphanumeric values, as well as / and _ |



## Caster

| Tipo Risultato                   | Implicito |
| -------------------------------- | --------- |
| [IData](/vanilla/api/data/IData) | sì        |
| string                           | sì        |

## Metodi

:::group{name=asData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// ResourceLocation.asData() as IData

myResourceLocation.asData();
```

:::

:::group{name=compareTo}

Return Type: int

```zenscript
ResourceLocation.compareTo(other as ResourceLocation) as int
```

| Parametro | Tipo                                                       | Descrizione             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| other     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
ResourceLocation.equals(other as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| other     | Object | No Description Provided |


:::

:::group{name=getNamespace}

Return Type: string

```zenscript
// ResourceLocation.getNamespace() as string

myResourceLocation.getNamespace();
```

:::

:::group{name=getPath}

Return Type: string

```zenscript
// ResourceLocation.getPath() as string

myResourceLocation.getPath();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// ResourceLocation.hashCode() as int

myResourceLocation.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// ResourceLocation.toString() as string

myResourceLocation.toString();
```

:::


## Proprietà

| Nome          | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------ | --------- | --------- | ----------------------- |
| commandString | string | sì        | no        | No Description Provided |
| namespace     | string | sì        | no        | No Description Provided |
| path          | string | sì        | no        | No Description Provided |


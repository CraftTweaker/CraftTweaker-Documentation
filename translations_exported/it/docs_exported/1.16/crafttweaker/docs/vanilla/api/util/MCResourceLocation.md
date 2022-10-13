# MCResourceLocation

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.MCResourceLocation;
```


## Interfacce Implementate
MCResourceLocation implements the following interfaces. That means all methods defined in these interfaces are also available in MCResourceLocation

- Comparable&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt;

## Constructors


```zenscript
new MCResourceLocation(namespace as string, path as string) as MCResourceLocation
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
// MCResourceLocation.asData() as IData

myMCResourceLocation.asData();
```

:::

:::group{name=compareTo}

Return Type: int

```zenscript
MCResourceLocation.compareTo(other as MCResourceLocation) as int
```

| Parametro | Tipo                                                       | Descrizione             |
| --------- | ---------------------------------------------------------- | ----------------------- |
| other     | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCResourceLocation.equals(other as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| other     | Object | No Description Provided |


:::

:::group{name=getNamespace}

Return Type: string

```zenscript
// MCResourceLocation.getNamespace() as string

myMCResourceLocation.getNamespace();
```

:::

:::group{name=getPath}

Return Type: string

```zenscript
// MCResourceLocation.getPath() as string

myMCResourceLocation.getPath();
```

:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCResourceLocation.hashCode() as int

myMCResourceLocation.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCResourceLocation.toString() as string

myMCResourceLocation.toString();
```

:::


## Proprietà

| Nome          | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ------------- | ------ | --------- | --------- | ----------------------- |
| commandString | string | sì        | no        | No Description Provided |
| namespace     | string | sì        | no        | No Description Provided |
| path          | string | sì        | no        | No Description Provided |


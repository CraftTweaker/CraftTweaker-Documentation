# MCTagWithAmount&LT;T : Object&GT;

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTagWithAmount;
```


## Interfacce Implementate
MCTagWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in MCTagWithAmount

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi

:::group{name=getAmount}

Return Type: int

```zenscript
// MCTagWithAmount.getAmount() as int

myMCTagWithAmount.getAmount();
```

:::

:::group{name=getTag}

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
// MCTagWithAmount.getTag() as MCTag<T>

myMCTagWithAmount.getTag();
```

:::

:::group{name=setAmount}

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTagWithAmount.setAmount(amount as int) as MCTagWithAmount<T>
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::


## Proprietà

| Nome   | Tipo                                                  | Ha Getter | Ha Setter | Descrizione             |
| ------ | ----------------------------------------------------- | --------- | --------- | ----------------------- |
| amount | int                                                   | sì        | sì        | No Description Provided |
| tag    | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | sì        | no        | No Description Provided |


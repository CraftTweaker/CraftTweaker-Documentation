# MCTagWithAmount&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tag.MCTagWithAmount;
```


## Implemented Interfaces
MCTagWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in MCTagWithAmount

- [CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods

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

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No Description Provided |


:::


## Properties

| Nombre | Type                                                  | Has Getter | Has Setter | Description             |
| ------ | ----------------------------------------------------- | ---------- | ---------- | ----------------------- |
| amount | int                                                   | true       | true       | No Description Provided |
| tag    | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | true       | false      | No Description Provided |


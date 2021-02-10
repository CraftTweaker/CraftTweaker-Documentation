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

### getAmount

Return Type: int

```zenscript
MCTagWithAmount.getAmount() as int
myMCTagWithAmount.getAmount();
```

### getTag

Return Type: [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;

```zenscript
MCTagWithAmount.getTag() as MCTag<T>
myMCTagWithAmount.getTag();
```

### setAmount

Return Type: [MCTagWithAmount](/vanilla/api/tags/MCTagWithAmount)&lt;T&gt;

```zenscript
MCTagWithAmount.setAmount(amount as int) as MCTagWithAmount<T>
```

| Parameter | Type | Description |
|-----------|------|-------------|
| amount | int | No Description Provided |



## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| amount | int | true | true |
| tag | [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; | true | false |


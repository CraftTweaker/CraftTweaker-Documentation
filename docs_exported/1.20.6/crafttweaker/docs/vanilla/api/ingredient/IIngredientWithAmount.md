# IIngredientWithAmount

Consists of an ingredient and an amount.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.IIngredientWithAmount;
```


## Implemented Interfaces
IIngredientWithAmount implements the following interfaces. That means all methods defined in these interfaces are also available in IIngredientWithAmount

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Casters

|           Result Type            | Is Implicit |
|----------------------------------|-------------|
| [IData](/vanilla/api/data/IData) | true        |

## Methods

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// IIngredientWithAmount.asIData() as IData

myIIngredientWithAmount.asIData();
```

:::

:::group{name=getCommandString}

Returns the BEP to get this thingy

Return Type: string

```zenscript
// IIngredientWithAmount.getCommandString() as string

myIIngredientWithAmount.getCommandString();
```

:::


## Properties

|     Name      |                        Type                        | Has Getter | Has Setter |                Description                |
|---------------|----------------------------------------------------|------------|------------|-------------------------------------------|
| amount        | int                                                | true       | false      | Gets the amount of Items in the ItemStack |
| commandString | string                                             | true       | false      | Returns the BEP to get this thingy        |
| ingredient    | [IIngredient](/vanilla/api/ingredient/IIngredient) | true       | false      | The backing ingredient                    |


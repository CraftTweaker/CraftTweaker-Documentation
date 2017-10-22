# IBlockPattern

An IBlockPattern is an interface that allows for combining several blocks into one object.  
It is comparable to what the [IIngredient](/Vanilla/Variable_Types/IIngredient) Interface is to [IItemStacks](/Vanilla/Items/IItemStack).

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockPattern;`


## Calling an IBlockPattern Object

Technically, each time you call an [IBlock](IBlock) object, you call an IBlockPattern object.  
But there are cases when you explicitly get an IBlockPattern Object as return.  

* OR two [IBlocks](IBlock)

## ZenGetters

| ZenGetter   | What does it do                                | Return Type            |
|-------------|------------------------------------------------|------------------------|
| blocks      | Lists all possible blocks for this object      | List<[IBlock](IBlock)> |
| displayName | Returns the displayNames of the fitting blocks | String                 |

## OR

You can OR two IBlockPattern Objects using the OR `|` Operator

## Matching
You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.
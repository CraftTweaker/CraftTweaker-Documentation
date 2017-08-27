# IBlockPattern

An IBlockPattern is an interface that allows for combining several blocks into one object.  
It is comparable to what the IIngredient Interface is to IItemStacks.


## Calling an IBlockPattern Object

Technically, each time you call an IBlock object, you call an IBlockPattern object.  
But there are cases when you explicitly get an IBlockPattern Object as return.  

* OR two IBlocks

## ZenGetters

| ZenGetter   | What does it do                                | Return Type  |
|-------------|------------------------------------------------|--------------|
| blocks      | Lists all possible blocks for this object      | List<IBlock> |
| displayName | Returns the displayNames of the fitting blocks | String       |

## OR

You can OR two IBlockPattern Objects using the OR `|` Operator

## Matching
You can check if an IBlockPatternObject contains another using the `in` keyword.  
For example, you could check if a Block is in an IBlockPattern.
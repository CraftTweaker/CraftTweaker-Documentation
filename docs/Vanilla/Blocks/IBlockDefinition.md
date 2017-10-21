# IBlockDefinition

The IBlockDefinition objects provide additional information on blocks.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## Calling an IBlockDefinition object

* Using the `definition` ZenGetter on an [IBlock](IBlock) object.

## Calling an IBlockDefinition List

* Using `game.blocks` to get a list of all block definition in the game.

## ZenGetters

| ZenGetter   | What does it do                 | Return Type |
|-------------|---------------------------------|-------------|
| id          | Returns the block ID            | String      |
| displayName | Returns the block's DisplayName | String      |
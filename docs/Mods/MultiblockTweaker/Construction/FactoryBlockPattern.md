# FactoryBlockPattern

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.FactoryBlockPattern;
```
## Information
Used to construct an [`IBlockPattern`](../Interfaces/IBlockPattern.md).

 * **See also:** IBlockPattern

     <p>

     Used for [`Builder#withPattern(IBlockPattern)`](Builder.md#builderwithpatterniblockpattern).

## ZenMethods

### Static Methods
#### FactoryBlockPattern#start()
-> FactoryBlockPattern

Start an empty builder. Equivalent to `FactoryBlockPattern.start(RelativeDirection.RIGHT, RelativeDirection.UP, RelativeDirection.BACK)`

 * **Returns:** An empty builder.

#### FactoryBlockPattern#start(RelativeDirection, RelativeDirection, RelativeDirection)
-> FactoryBlockPattern

Start an empty builder, defining the directions of the aisle, the strings and the characters used when setting aisles. ![](https://raw.githubusercontent.com/eutropius225/MultiblockTweaker/master/src/main/resources/FactoryBuilderDiagram.png)

 * **Parameters:**
   * `charDir` — The position of each character in a string relative to the one before.
   * `stringDir` — The position of each string in an [`#aisle(string...)`](#factoryblockpatternaislestring) call relative to the one before.
   * `aisleDir` — The position of each aisle relative to the one before.
 * **Returns:** The empty builder.

### Instance Methods
#### FactoryBlockPattern#aisleRepeatable(int, int, string...)
-> FactoryBlockPattern

Add a repeatable aisle.

 * **Parameters:**
   * `minRepeat` — How many times this aisle must be repeated at minimum.
   * `maxRepeat` — How many times this aisle can be repeated at maximum.
   * `aisle` — The aisle pattern. [`#aisle(string...)`](#factoryblockpatternaislestring)
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#aisleRepeatable(int, string...)
-> FactoryBlockPattern

Add a repeatable aisle.

 * **Parameters:**
   * `repeats` — How many times this aisle must be repeated.
   * `aisle` — The aisle pattern. [`#aisle(string...)`](#factoryblockpatternaislestring)
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#aisle(string...)
-> FactoryBlockPattern

Add a single aisle.

 * **Parameters:** `aisle` — The aisle pattern. Each unique character in any string must be defined in [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher).
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#setRepeatable(int, int)
-> FactoryBlockPattern

Makes the previous aisle entered be repeatable. [`#aisleRepeatable(int, int, string...)`](#factoryblockpatternaislerepeatableint-int-string).

 * **Parameters:**
   * `minRepeat` — How many times the aisle must be repeated at minimum.
   * `maxRepeat` — How many times the aisle can be repeated at maximum.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#setRepeatable(int)
-> FactoryBlockPattern

Makes the previous aisle entered be repeatable. [`#aisleRepeatable(int, int, string...)`](#factoryblockpatternaislerepeatableint-int-string). Equivalent to `FactoryBlockPattern.setRepeatable(repeatCount, repeatCount)`.

 * **Parameters:** `repeatCount` — How many times the aisle must be repeated, exactly.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#setAmountLimit(string, int, int)
-> FactoryBlockPattern

Set requirements for a given symbol.

 * **Parameters:**
   * `symbol` — The symbol defined in [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher)
   * `minAmount` — How many of the symbol-represented blocks must appear at minimum in a valid multiblock.
   * `maxLimit` — How many of the symbol-represented blocks can appear at maximum in a valid multiblock.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#setAmountAtLeast(string, int)
-> FactoryBlockPattern

Set requirements for a given symbol.

 * **Parameters:**
   * `symbol` — The symbol defined in [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher)
   * `minValue` — How many of the symbol-represented blocks must appear at minimum in a valid multiblock.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#setAmountAtMost(string, int)
-> FactoryBlockPattern

Set requirements for a given symbol.

 * **Parameters:**
   * `symbol` — The symbol defined in [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher)
   * `maxValue` — How many of the symbol-represented blocks can appear at maximum in a valid multiblock.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#where(string, IBlockMatcher)
-> FactoryBlockPattern

Define a symbol. This predicate will be used when checking if the multiblock is valid.

 * **Parameters:**
   * `symbol` — The character that will represent this predicate in [`#aisle(string...)`](#factoryblockpatternaislestring) and the other aisle methods.
   * `blockMatcher` — The predicate to match blocks by.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#whereAnd(string, IBlockMatcher, IBlockMatcher...)
-> FactoryBlockPattern

Define a symbol. All given predicates must be satisfied.

 * **Parameters:**
   * `symbol` — The character that will represent this predicate in [`#aisle(string...)`](#factoryblockpatternaislestring) and the other aisle methods.
   * `first` — The first matcher.
   * `matchers` — The rest of the matchers.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#whereOr(string, IBlockMatcher, IBlockMatcher...)
-> FactoryBlockPattern

Define a symbol. Any of the given predicates may be satisfied.

 * **Parameters:**
   * `symbol` — The character that will represent this predicate in [`#aisle(string...)`](#factoryblockpatternaislestring) and the other aisle methods.
   * `first` — The first matcher.
   * `matchers` — The rest of the matchers.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#where(string, IBlockState)
-> FactoryBlockPattern

Convenience method for [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher), shorthand for `where(symbol, IBlockMatcher.statePredicate(state))`

#### FactoryBlockPattern#where(string, IBlock)
-> FactoryBlockPattern

Convenience method for [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher), shorthand for `where(symbol, IBlockMatcher.blockPredicate(block))`

#### FactoryBlockPattern#where(string, IItemStack)
-> FactoryBlockPattern

Convenience method for [`#where(string, IBlockMatcher)`](#factoryblockpatternwherestring-iblockmatcher), shorthand for `where(symbol, IBlockMatcher.blockPredicate(stack))`

#### FactoryBlockPattern#validateContext(IMatchValidator)
-> FactoryBlockPattern

Define a full match validator, to match the multiblock as a whole.

 * **Parameters:** `validator` — A predicate to test the full match with.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#validateLayer(int, IMatchValidator)
-> FactoryBlockPattern

Define a layer match validator, to match a layer as a whole.

 * **Parameters:**
   * `layerIndex` — The index of the layer this should test.
   * `layerValidator` — A predicate to test the full match with.
 * **Returns:** This builder, for convenience.

#### FactoryBlockPattern#build()
-> IBlockPattern

Create the [`IBlockPattern`](../Interfaces/IBlockPattern.md), for use in multiblock creation. Can be called multiple times.

 * **Returns:** The built [`IBlockPattern`](../Interfaces/IBlockPattern.md).

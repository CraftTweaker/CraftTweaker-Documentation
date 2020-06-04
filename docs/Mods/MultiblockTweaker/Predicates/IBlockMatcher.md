# IBlockMatcher

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zencode
import mods.gregtech.multiblock.IBlockMatcher;
```
It is recommend that you import in any case, for access to the [Static Methods](#Static Methods) and fields.

## Information
IBlockMatcher is used by an [IBlockPattern](./IBlockPattern) to decide whether the placement of a block is valid.

## Calling an IBlockMatcher
There are several methods that return an IBlockMatcher

* Using the static method `IBlockMatcher.controller()`, of which there must be at least one present in an [IBlockPattern](./IBlockPattern).
* Casting an [IBlock](../../../Vanilla/Blocks/IBlock.md) or [IBlockState](../../../Vanilla/Blocks/IBlockState.md) using `as IBlockMatcher`.
* Using one of the [predefined matchers](#Predefined Matchers): `IBlockMatcher.ANY`, `IBlockMatcher.AIR` or `IBlockMatcher.IN_PREVIEW`.
* Using one of the several other static methods of `IBlockMatcher`, detailed [below](#Static Methods).
* Defining your own using [Custom Functions](../../../AdvancedFunctions/Custom_Functions.md) as detailed [below](#Custom Functions).
* Applying boolean operators, `||`, `&&` or `!` on existing `IBlockMatcher`s, as detailed [below](#Instance Methods).

---

## Predefined Matchers

The predefined matchers are:

* IBlockMatcher.ANY - always returns `true`.
* IBlockMatcher.AIR - returns `true` for any blocks that identify themselves as air.
* IBlockMatcher.IN_PREVIEW - returns `true` when the given dimension ID is `2 147 483 647`, or `2^31 - 1`, which is true in the preview.

---

## ZenMethods
### Static Methods
`IBlockMatcher` has several static methods for creating `IBlockMatcher`s. Here's a list:

#### controller
Match the controller, with the given resource location.
 
If there isn't exactly one of these present in an [IBlockPattern](./IBlockPattern), it will be considered invalid.
 
* _param_ **resourceLocation**: `string` - The location, or "Meta Tile Entity ID", of the controller to match.
* _return_: [`IBlockMatcher`](#IBlockMatcher) - An [IBlockMatcher](#IBlockMatcher) that matches the controller.
##### Example:
```zencode
import mods.gregtech.multiblock.IBlockMatcher;

// match the controller of "multiblocktweaker:example_multiblock"
val controller as IBlockMatcher = IBlockMatcher.controller("example_multiblock");
```

#### IBlockMatcher#abilityPartPredicate

Match any block that has one of the given [IMultiblockAbility](./IMultiblockAbility.md)-es.

* _param_ **allowedAbilities**: [`IMultiblockAbility...`](./IMultiblockAbility.md) One or multiple [IMultiblockAbility](./IMultiblockAbility.md)-es to match for.
* _return_: [`IBlockMatcher`](#IBlockMatcher) - An [IBlockMatcher](#IBlockMatcher) that matches any blocks with one of the given [IMultiblockAbility](./IMultiblockAbility.md)-es.
##### Example:
```zencode
import mods.gregtech.multiblock.IBlockMatcher;
import mods.gregtech.multiblock.MultiblockAbility;

// match any energy inputs, or item input/output hatches
val abilities as IBlockMatcher = IBlockMatcher.abilityPartPredicate(MultiblockAbility.INPUT_ENERGY,
                                                                        MultiblockAbility.IMPORT_ITEMS,
                                                                        MultiblockAbility.EXPORT_ITEMS);
```

#### IBlockMatcher#partPredicate

Match any meta tile entity that is an instance of the class,
as defined by `java.lang.Class#isAssignableFrom(java.lang.Class)`,
given the fully qualified class name.
 
If you don't know what that means, this likely isn't for you, and even then, you probably have other options.
 
* _param_ **className**: `string` - A fully qualified class name.
* _return_: [`IBlockMatcher`](#IBlockMatcher) - An [IBlockMatcher](#IBlockMatcher) that returns true when matching a block with a meta tile entity assignable from the given class.
##### Example:
```zencode
import mods.gregtech.multiblock.IBlockMatcher;

// match any meta tile entities that extend, or are, a "MetaTileEntityChest" internally
val part as IBlockMatcher = IBlockMatcher.partPredicate("gregtech.common.metatileentities.storage.MetaTileEntityChest");
```

#### IBlockMatcher#statePredicate

Match any of the given [IBlockState](../../../Vanilla/Blocks/IBlockState.md)s.

When called with a single parameter, it is equivalent to `IBlockState as IBlockMatcher`.

* _param_ **allowedStates**: [`IBlockState...`](../../../Vanilla/Blocks/IBlockState.md) - The list of {@link IBlockState}s to match.
* _return_: [`IBlockMatcher`](#IBlockMatcher) - An [IBlockMatcher](#IBlockMatcher) that returns true for any of the given blockstates.
##### Example:
```zencode
import mods.gregtech.multiblock.IBlockMatcher;

// match any dispensers pointing north or south
val dispenserNS as IBlockMatcher = IBlockMatcher.statePredicate(<blockstate:minecraft:dispenser:facing=north>,
                                                                <blockstate:minecraft:dispenser:facing=south>);

// this
val dispenserN as IBlockMatcher = IBlockMatcher.statePredicate(<blockstate:minecraft:dispenser:facing=north>);
// is equivalent to
val dispenserN as IBlockMatcher = <blockstate:minecraft:dispenser:facing=north> as IBlockMatcher;
```

#### IBlockMatcher#blockPredicate

Match any blockstate with one of the given [IBlock](../../../Vanilla/Blocks/IBlock.md)s or [IItemStack](../../../Vanilla/Items/IItemStack.md)s.

When called with a single parameter, it is equivalent to `IBlock as IBlockMatcher`, or `IItemStack as IBlock as IBlockMatcher`.

* _param_ **blocks**: [`IBlock...`](../../../Vanilla/Blocks/IBlock.md)s or [`IItemStack...`](../../../Vanilla/Items/IItemStack.md) - The list of [IBlock](../../../Vanilla/Blocks/IBlock.md)s or [IItemStack](../../../Vanilla/Items/IItemStack.md)s to match.
* _return_: [`IBlockMatcher`](#IBlockMatcher) - An [IBlockMatcher](#IBlockMatcher) that returns true for any of the given blocks.
##### Example:
```zencode
import mods.gregtech.multiblock.IBlockMatcher;
import crafttweaker.block.IBlock;

// this
val dispenser = IBlockMatcher.blockPredicate(<minecraft:dispenser>, <minecraft:dropper>);
// is equivalent to
val dispenser = IBlockMatcher.blockPredicate(<minecraft:dispenser> as IBlock, <minecraft:dropper> as IBlock);

// this
val dropper = IBlockMatcher.blockPredicate(<minecraft:dropper>);
// is equivalent to
val dropper = <minecraft:dropper> as IBlock as IBlockMatcher;
```

---

### Instance Methods
Since `IBlockMatcher`s are predicates, there are some basic methods included for chaining them.

| ZenMethod                              | Return Type   | Description                                                                  |
|----------------------------------------|---------------|------------------------------------------------------------------------------|
| IBlockMatcher#or(IBlockMatcher)        | IBlockMatcher | an `IBlockMatcher` that returns true if either of those given return `true`. |
| IBlockMatcher#and(IBlockMatcher)       | IBlockMatcher | an `IBlockMatcher` that returns true if both of those given return `true`.   |
| IBlockMatcher#negate()                 | IBlockMatcher | an `IBlockMatcher` that returns true if the one given returns `false`.       |
| IBlockMatcher#test(IBlockWorldState)   | bool          | what the matcher returns when called                                         |

These can also be applied with the operators, `||`, `&&`, `!` and `in` respectively.

---

### Custom Functions
IBlockMatcher is a *functional interface*.
That is, you can define your own [Custom Function](../../../AdvancedFunctions/Custom_Functions.md) as one.

It takes an [IBlockWorldState](./IBlockWorldState.md) and returns a _**bool**ean_.

Note that you may accidentally cause the structure to inevitably fail in the Multiblock Preview shown in JEI.
For that purpose, one may employ `IBlockMatcher.IN_PREVIEW`.


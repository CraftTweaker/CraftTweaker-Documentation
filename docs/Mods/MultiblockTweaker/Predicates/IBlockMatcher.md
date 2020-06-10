# IBlockMatcher

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.IBlockMatcher;
```
## Information
Used by an [`IBlockPattern`](../Interfaces/IBlockPattern.md) to decide whether the placement of a block is valid.

 * **See also:** FactoryBlockPattern

## ZenMethods

### Static Methods
#### IBlockMatcher#controller(string)
-> IBlockMatcher

Match the controller, with the given resource location.

If there isn't exactly one of these present in an [`IBlockPattern`](../Interfaces/IBlockPattern.md), it will be considered invalid.

 * **Parameters:** `resourceLocation` — The location, or "Meta Tile Entity ID", of the controller to match.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that matches the controller.

#### IBlockMatcher#abilityPartPredicate(IMultiblockAbility...)
-> IBlockMatcher

Match any block that has one of the given [`IMultiblockAbility`](../Interfaces/IMultiblockAbility.md)-es.

 * **Parameters:** `allowedAbilities` — One or multiple [`IMultiblockAbility`](../Interfaces/IMultiblockAbility.md)-es to match for.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that matches any blocks with one of the given [`IMultiblockAbility`](../Interfaces/IMultiblockAbility.md)-es.

#### IBlockMatcher#partPredicate(string)
-> IBlockMatcher

Match any meta tile entity that is an instance of the class, as defined by `java.lang.Class#isAssignableFrom(java.lang.Class)`, given the fully qualified class name.

If you don't know what that means, this likely isn't for you, and even then, you probably have other options.

 * **Parameters:** `className` — A fully qualified class name.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that returns true when matching a block with a meta tile entity assignable from the given class.

#### IBlockMatcher#statePredicate(IBlockState...)
-> IBlockMatcher

Match any of the given [`IBlockState`](../../../Vanilla/Blocks/IBlockState.md)s.

When called with a single parameter, it is equivalent to `IBlockState as IBlockMatcher`.

 * **Parameters:** `allowedStates` — The list of [`IBlockState`](../../../Vanilla/Blocks/IBlockState.md)s to match.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that returns true for any of the given blockstates.

#### IBlockMatcher#blockPredicate(IBlock...)
-> IBlockMatcher

Match any blockstate with one of the given [`IBlock`](../../../Vanilla/Blocks/IBlock.md)s.

When called with a single parameter, it is equivalent to `IBlock as IBlockMatcher``

 * **Parameters:** `blocks` — The list of [`IBlock`](../../../Vanilla/Blocks/IBlock.md)s to match.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that returns true for any of the given blocks.

#### IBlockMatcher#blockPredicate(IItemStack...)
-> IBlockMatcher

Match any blockstate with one of the given [`IItemStack`](../../../Vanilla/Items/IItemStack.md)s.

When called with a single parameter, it is equivalent to `IItemStack as IBlock as IBlockMatcher``

 * **Parameters:** `stacks` — The list of [`IItemStack`](../../../Vanilla/Items/IItemStack.md)s to match.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that returns true for any of the given blocks.

#### IBlockMatcher#countMatch(string, IBlockMatcher)
-> IBlockMatcher

An [`IBlockMatcher`](#IBlockMatcher) that counts the number of blocks that end up matching this predicate.

This can be accessed from [`IPatternMatchContext#getInt(string)`](../Interfaces/IPatternMatchContext.md#ipatternmatchcontextgetintstring).

 * **Parameters:**
   * `key` — The key whose value will be incremented when a match occurs.
   * `original` — The [`IBlockMatcher`](#IBlockMatcher) to count matches for.
 * **Returns:** An [`IBlockMatcher`](#IBlockMatcher) that returns true the same as {@param original}, but also counts the matches.

## ZenGetters/ZenSetters
| ZenGetter | ZenSetter | Type |
| --- | --- | --- |
| ANY | ANY | [IBlockMatcher](IBlockMatcher.md) |
| AIR | AIR | [IBlockMatcher](IBlockMatcher.md) |
| IN_PREVIEW | IN_PREVIEW | [IBlockMatcher](IBlockMatcher.md) |

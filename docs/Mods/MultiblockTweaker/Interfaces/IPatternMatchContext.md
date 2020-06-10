# IPatternMatchContext

## Importing the Package

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import mods.gregtech.multiblock.IPatternMatchContext;
```
## Information
The context of a match. Can be obtained from [`IBlockWorldState#getMatchContext()`](/IBlockWorldState.md#iblockworldstategetmatchcontext) or [`IBlockWorldState#getLayerContext()`](/IBlockWorldState.md#iblockworldstategetlayercontext).

## ZenMethods

### Instance Methods
#### IPatternMatchContext#reset()
-> void

Reset the context to its default state.

#### IPatternMatchContext#set(string, string)
-> void

Set a key's value.

 * **Parameters:**
   * `key` — The key whose value should be set.
   * `value` — The value to set it to.

#### IPatternMatchContext#setInt(string, int)
-> void

Set a key's value.

 * **Parameters:**
   * `key` — The key whose value should be set.
   * `value` — The value to set it to.

#### IPatternMatchContext#increment(string, int)
-> void

Increment an integer value.

 * **Parameters:**
   * `key` — The key whose value should be incremented.
   * `value` — The value to increment by.

#### IPatternMatchContext#getOrDefault(string, string)
-> string

Get the string referenced by a key, or the fallback value given.

 * **Parameters:**
   * `key` — The key whose value should be returned
   * `defaultValue` — The value to return if the key is not present.
 * **Returns:** The value referenced by the key, or default value if the key wasn't present.

#### IPatternMatchContext#get(string)
-> string

 * **Returns:** The string referenced by a key.

#### IPatternMatchContext#getInt(string)
-> int

 * **Returns:** The integer referenced by a key, or 0 if it wasn't set before.

#### IPatternMatchContext#getOrPut(string, string)
-> string

Get the string referenced by a key, put the fallback value given if the key was not present.

 * **Parameters:**
   * `key` — The key whose value should be returned
   * `initialValue` — The value to set and return if the key is not present.
 * **Returns:** The value referenced by the key, or initial value if the key wasn't present.

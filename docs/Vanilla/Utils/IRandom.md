# IRandom

The IRandom is a random number generator. The class only be supposed to be used in events, not recipes!

## Importing the package

It might be required for you to [import](/AdvancedFunctions/Import/) the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.

`import crafttweaker.util.IRandom;`

## Getting the IRandom

You only can get it by `random` getter of [IWorld](/Vanilla/World/IWorld/).

## ZenMethods

* `nextInt()` returns the next pseudorandom int, ranging from Integer.MIN_VALUE to Integer.MAX_VALUE
* `nextInt(int bound)` returns the next pseudorandom int, ranging [0, bound)
* `nextInt(int min, int max)` returns the next pseudorandom int, ranging [min, max]
* `nextFloat()` returns the next pseudorandom float, ranging [0.0f, 1.0f)
* `nextDouble()` returns the next pseudorandom double, ranging [0.0, 1.0)
* `nextFloat(float min, float max)` returns the next pseudorandom float, ranging [min, max]
* `nextDouble(double min, double max)` returns the next pseudorandom double, ranging [min, max]
* `nextBoolean()` returns the next pseudorandom boolean
* `String getRandomUUID()` returns a random UUID

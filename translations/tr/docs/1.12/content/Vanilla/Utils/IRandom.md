# IRandom

IRandom is a random number generator. The class can only be used when you have an instance of a World (Such as in an Event handler), it can not be in recipes.

## Importing the package

It might be required for you to [import](/AdvancedFunctions/Import/) the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.

`import crafttweaker.util.IRandom;`

## Getting the IRandom

You can get an instance of IRandom by using an [IWorld](/Vanilla/World/IWorld/) instance.

Once you have an [IWorld](/Vanilla/World/IWorld/) instance, you can simply do:
```zenscript
world.random
```

## ZenMethods

* `nextInt()` returns the next pseudorandom int, ranging from Integer.MIN_VALUE to Integer.MAX_VALUE
* `nextInt(int bound)` returns the next pseudorandom int, ranging from [0, bound)
* `nextInt(int min, int max)` returns the next pseudorandom int, ranging from [min, max]
* `nextFloat()` returns the next pseudorandom float, ranging from [0.0f, 1.0f)
* `nextDouble()` returns the next pseudorandom double, ranging from [0.0, 1.0)
* `nextFloat(float min, float max)` returns the next pseudorandom float, ranging from [min, max]
* `nextDouble(double min, double max)` returns the next pseudorandom double, ranging from [min, max]
* `nextBoolean()` returns the next pseudorandom boolean
* `String getRandomUUID()` returns a random UUID

The ranges above are presented in using the mathematical interval notation, you can read more about it [here](https://en.wikipedia.org/wiki/Interval_(mathematics)#Notations_for_intervals)

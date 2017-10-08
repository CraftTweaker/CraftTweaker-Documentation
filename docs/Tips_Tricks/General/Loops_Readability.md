# Use Loops to make your script look better

## Problem
We all have seen it: Scripts with more than 500 lines where it says 500 times `recipes.remove(item1);recipes.remove(item2),...`  
Not only is this a pain to write, but it is possible that you spend hours debugging a little typo when the only exception you get is `error in recipes.zs: null`

## Solution
My rule of thumb:
When writing the exactly same command more than 10 times, with only 1 Parameter changing, I'll use a loop.

So, instead of always typing out the functions, I declare one array containing all items and iterate through that one.

```
import crafttweaker.item.IIngredient;

val Array = [
	item1,
	item2,
	item3,
	...
] as IIngredient[];


for item in Array{
	recipes.remove(item);
}
```

## Advantages

- Your script becomes (in my opinion) easier to read
- You know exactly where your script screws up
- Last minute changes are really easy as all you need to do is adding or removing the item from the array.

## Disadvantages

- Only works when there's only a few parameters changing
- You could screw up your script without knowing it, by say, casting the array wrong
- One error in the array makes the whole array fail and nothing will be done at all.
- You might receive cryptic error messages because of the array being created the wrong way.
# Optional

`@Optional` can be given to a Method parameter to declare it as being optional.  
Optional Parameters can be omitted when calling the method:

## Example

[CraftTweaker's IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager (Implementation)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)
```
    @Override
    public void remove(IIngredient output, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");
        
        recipesToRemove.add(new ActionFurnaceRemoveRecipe(output, input));
    }
```

Technically, you don't need the `@Optional` in the implementation but you can add it if you want to be sure.
You can now call this method using either one:
```
furnace.remove(output); //Input will be set to null
furnace.remove(output, input);
```

## What values are inserted for omited parameters?

Inserted is either `0`, `false` or `null`, depending on the annotated Type:

Primitives will be `0` (except bool, which will be false, so technically 0 as well)  
All Objects will be `null`


## What parameters can be annotated?
All parameters can be annotated, but you need to remember that annotated parameters need to be at the end, so while this would technically work, method calls would fail:  

```
myMethod(@Optional String name, int number)
```

Calling this method with only an int will always fail!
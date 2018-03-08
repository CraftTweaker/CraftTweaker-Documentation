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
### Using only the annotation
Inserted is either `0`, `false` or `null`, depending on the annotated Type:

Primitives will be `0` (except bool, which will be false, so technically 0 as well)  
All Objects will be `null`

### Using annotation members

| Member      | Type            | Default value    |
|-------------|-----------------|------------------|
| value       | String          | `""`             |
| methodClass | java.lang.Class | `Optional.class` |
| methodName  | String          | `"getValue"`     |

The Optional annotation also supports default values.  
If you want to provide a default value, you can do that by giving the `value` member a String representing the parameter.  

If you only want a default primitive, then you are set.
```
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI.logError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: 
This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. If no such method is found, will error and insert null.

```
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value.getDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## What parameters can be annotated?
All parameters can be annotated, but you need to remember that annotated parameters need to be at the end, so while this would technically work, method calls would fail:  

```
myMethod(@Optional String name, int number)
```

Calling this method with only an int will always fail!
# 可选

`@Optional` can be given to a Method parameter to declare it as being optional.  
Optional Parameters can be omitted when calling the method:

## Beispiel

[CraftTweaker 的 IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethod
    void remove(IIngredient output, @Optional IIngredient input);
```

[MCFurnaceManager (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @Override
    public void remove(IIngredient output, @Optional IIngredient input) {
        if(output == null)
            throw new IllegalArgumentException("output cannot be null");

        recipesToRemove.add(new ActionFurnaceRemoveRecipe(output, input));
    }
```

技术上，在实现中你不需要 `@Optional`，但如果你确定的话你也可以加上它。 你现在可以使用以下任意方式调用这个方法：

```java
furnace.remove(output); //Input will be set to null
furnace.remove(output, input);
```

## 省略的参数被插入了什么值？

### 仅使用注解

根据注解类型，被插入的是 `0`, `false` 或 `null`

Primitives will be `0` (except bool, which will be false, so technically 0 as well)  
All Objects will be `null`

### 使用注解成员

| 成员          | 类型              | Standardwert     |
| ----------- | --------------- | ---------------- |
| value       | string          | `""`             |
| methodClass | java.lang.Class | `Optional.class` |
| methodName  | string          | `"getValue"`     |

The Optional annotation also supports default values.  
If you want to provide a default value, you can do that by giving the `value` member a String representing the parameter.

如果你只想要基本类型，则你已设置。

```java
@ZenMethod
public static void print(@Optional("heyho") String value) {
    CraftTweakerAPI.logError(value);
}


@ZenMethod
public static void print3(@Optional("1") int value) {
    CraftTweakerAPI.logError(String.valueOf(value));
}
```

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. 如果找不到对应方法，将报错并插入 null。

```java
@ZenMethod
public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
    print(value.getDisplayName());
}


public static IItemStack getFromString(String value) {
    return BracketHandlerItem.getItem(value, 0);
}
```

## 什么参数可以被注解？

所有的参数都可以被注解，但你需要记住注解的参数需要在末尾，因此技术上虽然可行，但调用方法将会失败：

```java
myMethod(@Optional String name, int number)
```

只使用一个 int 参数调用此方法时将始终失败！
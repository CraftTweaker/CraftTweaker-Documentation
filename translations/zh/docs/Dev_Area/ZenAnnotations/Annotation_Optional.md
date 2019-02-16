# 可选

`@Optional` 可以被传入一个方法参数以声明它是可选的。  
调用方法时可选参数可被省略：

## 例子

[CraftTweaker 的 IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

        @ZenMethod
        void remove(IIngredient output, @Optional IIngredient input);
    

[MCFurnaceManager (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

        @Override
        public void remove(IIngredient output, @Optional IIngredient input) {
            if(output == null)
                throw new IllegalArgumentException("output cannot be null");
    
            recipesToRemove.add(new ActionFurnaceRemoveRecipe(output, input));
        }
    

技术上，在实现中你不需要 `@Optional`，但如果你确定的话你也可以加上它。 你现在可以使用以下任意方式调用这个方法：

    furnace.remove(output); //Input will be set to null
    furnace.remove(output, input);
    

## 省略的参数被插入了什么值？

### 仅使用注解

根据注解类型，被插入的是 `0`, `false` 或 `null`

基本类型会是 `0` (除了布尔值，它会是 false，所以技术上 0 是最好的)  
所有的对象都会是 `null`。

### 使用注解成员

| 成员          | 类型              | 默认值              |
| ----------- | --------------- | ---------------- |
| value       | String          | `""`             |
| methodClass | java.lang.Class | `Optional.class` |
| methodName  | String          | `"getValue"`     |

The Optional annotation also supports default values.  
If you want to provide a default value, you can do that by giving the `value` member a String representing the parameter.

If you only want a default primitive, then you are set.

    @ZenMethod
    public static void print(@Optional("heyho") String value) {
        CraftTweakerAPI.logError(value);
    }
    
    
    @ZenMethod
    public static void print3(@Optional("1") int value) {
        CraftTweakerAPI.logError(String.valueOf(value));
    }
    

If you want a default object or a default primitive that is not a compiletime constant (all annotation members need to be compiletime constants!), you can set the other two members: This will replace the parameter with a call to the given (static) method `methodClass.methodName(value)`. If no such method is found, will error and insert null.

    @ZenMethod
    public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
        print(value.getDisplayName());
    }
    
    
    public static IItemStack getFromString(String value) {
        return BracketHandlerItem.getItem(value, 0);
    }
    

## What parameters can be annotated?

All parameters can be annotated, but you need to remember that annotated parameters need to be at the end, so while this would technically work, method calls would fail:

    myMethod(@Optional String name, int number)
    

Calling this method with only an int will always fail!
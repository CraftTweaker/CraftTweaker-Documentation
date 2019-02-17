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

可选参数也支持默认值。  
如果您想提供默认值，您可以通过传入 `value` 成员代表参数的字符串来实现这一点。

如果您只想要基本类型，则您已设置。

    @ZenMethod
    public static void print(@Optional("heyho") String value) {
        CraftTweakerAPI.logError(value);
    }
    
    
    @ZenMethod
    public static void print3(@Optional("1") int value) {
        CraftTweakerAPI.logError(String.valueOf(value));
    }
    

如果您想要一个不是编译时实例的默认对象或默认基本类型（所有注解成员都需要编译时实例！），你可以设置其他两个成员：这会调用传入的（静态）方法 `methodClass.methodName(value)` 以替换参数。 如果找不到对应方法，将报错并插入 null。

    @ZenMethod
    public static void print2(@Optional(value = "minecraft:iron_ingot", methodClass = Optionals.class, methodName = "getFromString") IItemStack value) {
        print(value.getDisplayName());
    }
    
    
    public static IItemStack getFromString(String value) {
        return BracketHandlerItem.getItem(value, 0);
    }
    

## 什么参数可以被注解？

所有的参数都可以被注解，但你需要记住注解的参数需要在末尾，因此技术上虽然可行，但调用方法将会失败：

    myMethod(@Optional String name, int number)
    

只使用一个 int 参数调用此方法时将始终失败！
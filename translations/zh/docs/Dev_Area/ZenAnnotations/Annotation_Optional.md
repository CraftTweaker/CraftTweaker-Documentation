# 可选

`@Optional` 可以被传入一个方法参数以声明它是可选的。  
调用方法时可选参数可被省略：

## 例子

[CraftTweaker 的 IFurnaceManager](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/recipes/IFurnaceManager.java):

```java
    @ZenMethody
    无效移除(IIngredient output, @Optional IIngredient 输入);
```

[MCFurnaceManager (实现)](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-MC1120-Main/src/main/java/crafttweaker/mc1120/furnace/MCFurnaceManager.java)

```java
    @override
    公开无效移除(IIngredient 输出, @Optional IIngredient inputt) v.
        if(output == null)
            抛弃新的 IllegalArgumentException("output not be null");

        食谱图删除 dd(新 ActionFurnaceRemoveRecipe(output, input));
}
```

技术上，在实现中你不需要 `@Optional`，但如果你确定的话你也可以加上它。 你现在可以使用以下任意方式调用这个方法：

```java
failace.remove(输出); ///Input 将设置为 null
furnace.remove(输出, 输入);
```

## 省略的参数被插入了什么值？

### 仅使用注解

根据注解类型，被插入的是 `0`, `false` 或 `null`

基本类型会是 `0` (除了布尔值，它会是 false，所以技术上 0 是最好的)  
所有的对象都会是 `null`。

### 使用注解成员

| 成员    | 类型              | 默认值              |
| ----- | --------------- | ---------------- |
| value | string          | `""`             |
| 方法类   | java.lang.Class | `Optional.class` |
| 方法名称  | 字符串             | `"getValue"`     |

可选参数也支持默认值。  
如果你想提供默认值，你可以通过传入 `value` 成员代表参数的字符串来实现这一点。

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

如果你想要一个不是编译时实例的默认对象或默认基本类型（所有注解成员都需要编译时实例！），你可以设置其他两个成员：这会调用传入的（静态）方法 `methodClass.methodName(value)` 以替换参数。 如果找不到对应方法，将报错并插入 null。

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
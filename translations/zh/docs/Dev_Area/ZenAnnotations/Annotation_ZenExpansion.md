# ZenExpansion

像 [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) 一样，用于注解在ZS中能被使用的类。  
不同的是，ZenExpansions 是用于扩展已经存在的 ZenClass 的功能。

## 例子

    @ZenExpansion("crafttweaker.item.IItemStack")
    @ZenRegister
    public class Expansion {
        @ZenMethod
        public static void print(IItemStack stack) {
            CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
        }
    }
    

这将是人们能够这样做

    <minecraft:iron_ingot>.print();
    

由于这是一个扩展，第一个参数是 Class 实例！  
这个参数将在 ZS 中无效。

## 什么类可以被注解 || 额外信息

- 所有方法都需要以一个表示扩展 Class 实例的参数开始。 此外，在扩展中的所有方法都必须是静态的（... 和公开的）。
- 你可以注解所有的 Java 类
- 你必须给注解传入一个 String 值（如 `crafttweaker.item.IItemStack`） 此 String 值必须表示已存在的 ZenClass 类名。
- 在定义一个 ZenExpansion 类后，你仍然需要注册它。 建议您使用 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) 来注册它。
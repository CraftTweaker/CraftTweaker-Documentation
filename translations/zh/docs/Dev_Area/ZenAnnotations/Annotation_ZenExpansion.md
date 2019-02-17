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
- You can annotate all Java Classes
- You must give the annotation a String value (e.g. `crafttweaker.item.IItemStack`). This String value must represent an already existing ZenClass' name.
- After declaring a class a ZenExpansion, you still need to register it. It is recommended that you use [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) for that.
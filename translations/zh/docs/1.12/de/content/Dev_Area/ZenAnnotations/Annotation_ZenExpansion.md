# ZenExpansion

A ZenExpansion is, like [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), used to annotate a Class that should be accessible from within ZS.  
Unlike ZenClasses however, ZenExpansions are used to expand the functionality of already existing ZenClasses.

## Beispiel

```java
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("STACKKKKK: " + stack.getDisplayName());
    }
}
```

这将是人们能够这样做

```zenscript
<minecraft:iron_ingot>.print();
```

Since this is an expansion the first parameter is the class' instance!  
This parameter will not be available in ZS.

## 什么类可以被注解 || 额外信息

- 所有方法都需要以一个表示扩展 Class 实例的参数开始。 Also, all Methods inside the expansion must be static (... and public).
- 你可以注解所有的 Java 类
- 你必须给注解传入一个 String 值（如 `crafttweaker.item.IItemStack`） 此 String 值必须表示已存在的 ZenClass 类名。
- 在定义一个 ZenExpansion 类后，你仍然需要注册它。 建议你使用 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)。
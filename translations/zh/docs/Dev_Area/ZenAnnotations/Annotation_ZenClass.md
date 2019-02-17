# ZenClass

ZenClass 是暴露给 ZenScript 的 Java 类。

## 例子

[Crafttweaker 的 IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

    @ZenClass("crafttweaker.item.IItemStack")
    @ZenRegister
    public interface IItemStack extends IIngredient {
        //Cut out to keep the page short
    }
    

实际实现不需要注解。

## 什么类可以被注解 || 额外信息

- 你可以注解所有的 Java 类。
- 你应该给注解传入一个 String 值（如 `crafttweaker.item.IItemStack`）。 这将是这个类里的 ZS 内部名称。
- 在定义一个 ZenClass 类后，你仍然需要注册它。 建议您使用 [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) 注册它。
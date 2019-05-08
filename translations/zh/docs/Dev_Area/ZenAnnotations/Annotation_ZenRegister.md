# ZenRegister

ZenRegister 注解用于注册一个带有 [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) 或 [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) 的类。  
这是在 ZenScript 中注册类的首选方式。

## 例子

[Crafttweaker 的 IIngredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

    @ZenClass("crafttweaker.item.IIngredient")
    @ZenRegister
    public interface IIngredient {
        ...
    }
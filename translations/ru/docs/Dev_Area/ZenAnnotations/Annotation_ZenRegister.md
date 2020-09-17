# ZenRegister

Аннотация ZenRegister используется для регистрации класса, который также имеет [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) или [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) аннотацию.  
Это предпочтительный способ регистрации классов в ZenScript.

## Пример

[IIngredient из CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
public interface IIngredient {
    ...
}
```
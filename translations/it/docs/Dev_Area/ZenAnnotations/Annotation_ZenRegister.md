# ZenRegister

L'annotazione ZenRegister viene utilizzata per registrare una classe che ha anche l'annotazione [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) o [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) .  
Questo è il modo preferito per registrare le classi in ZenScript.

## Esempio

[IIngrediente Di Crafttweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
public interface IIngredient {
...
}
```
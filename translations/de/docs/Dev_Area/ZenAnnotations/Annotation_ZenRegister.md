# ZenRegister

Die ZenRegister Anmerkung wird verwendet, um eine Klasse zu registrieren, die entweder die [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) oder die [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) Anmerkung hat.  
Dies ist die bevorzugte Möglichkeit, Klassen in ZenScript zu registrieren.

## Beispiel

[CraftTweakers Igredient](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
public interface IIngredient {
...
}
```
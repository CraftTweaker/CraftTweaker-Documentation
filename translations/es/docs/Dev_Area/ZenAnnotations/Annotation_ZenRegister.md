# ZenRegister

La Annotación ZenRegister se utiliza para registrar una clase que también tiene la [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) o la [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) anotación.  
Esta es la forma preferida de registrar Clases en ZenScript.

## Ejemplo

[IIngrediente de CraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
public interface IIngredient {
...
}
```
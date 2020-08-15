# Enregistrement Zen

L'annotation ZenRegister est utilisée pour enregistrer une classe qui a aussi soit l'annotation [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) ou [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) .  
C'est la façon préférée d'enregistrer des classes dans ZenScript.

## Exemple

[Ingrédient de FraftTweaker](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
interface publique IIngredient {
...
}
```
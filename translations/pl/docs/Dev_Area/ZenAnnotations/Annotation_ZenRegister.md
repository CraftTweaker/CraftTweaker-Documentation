# Rejestracja Zenregister

Adnotacja ZenRegister jest używana do rejestracji klasy, która ma również adnotację [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/) lub [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/) .  
Jest to preferowany sposób rejestracji klas w ZenScript.

## Przykład

[Składnik CraftTweakera](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IIngredient.java)

```java
@ZenClass("crafttweaker.item.IIngredient")
@ZenRegister
publiczny interfejs IIngredient {
...
}
```
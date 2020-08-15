# ZenClass

Une classe ZenClass est une classe java qui a été exposée à ZenScript.

## Exemple

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
interface publique IItemStack étend IIngredient {
    //Découpez pour garder la page courte
}
```

La mise en œuvre réelle n'a pas besoin d'être annotée.

## Quelles classes peuvent être annotées || Informations supplémentaires

- Vous pouvez annoter toutes les classes Java
- Vous devriez donner à l'annotation une valeur String (par exemple `crafttweaker.item.IItemStack`). Ce sera le nom interne ZS de la classe.
- Après avoir déclaré une classe à ZenClass, vous devez encore l'enregistrer. Il est recommandé d'utiliser [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) pour cela
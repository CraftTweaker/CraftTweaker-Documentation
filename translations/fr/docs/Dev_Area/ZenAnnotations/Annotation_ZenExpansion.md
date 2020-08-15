# Expansion de Zen

Une extension Zen est, comme [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), utilisée pour annoter une classe qui devrait être accessible depuis ZS.  
Contrairement aux ZenClasses cependant, les ZenExpansions sont utilisées pour étendre la fonctionnalité des ZenClasses déjà existantes.

## Exemple

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKK : " + stack.getDisplayName());
    }
}
```

Cela permettrait aux gens de faire

```zenscript
<minecraft:iron_ingot>.print();
```

Puisqu'il s'agit d'une extension, le premier paramètre est l'instance de la classe !  
Ce paramètre ne sera pas disponible en ZS.

## Quelles classes peuvent être annotées || Informations supplémentaires

- Toutes les méthodes doivent commencer par un paramètre qui représente l'instance de la classe étendue. Aussi, toutes les méthodes à l'intérieur de l'expansion doivent être statiques (... et public).
- Vous pouvez annoter toutes les classes Java
- Vous devez donner à l'annotation une valeur String (par exemple `crafttweaker.item.IItemStack`). Cette valeur de chaîne de caractères doit représenter un nom de classe Zen déjà existant.
- Après avoir déclaré une classe ZenExpansion, vous devez toujours l'enregistrer. Il est recommandé d'utiliser [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) pour cela.
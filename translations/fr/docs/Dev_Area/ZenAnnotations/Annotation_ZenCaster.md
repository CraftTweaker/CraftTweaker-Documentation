# ZenCaster

Un ZenCaster désigne une méthode qui peut être appelée en utilisant le jeton `comme jeton de` .  
ZenCasters peut être utilisé pour convertir un type en un autre (par exemple [Chaînes à IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Exemple

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKKKKK: " + pile. etDisplayName());
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(stack IItemStack) {
        return stack. etOres().get(0);
    }
}
```

Si quelqu'un appelait ceci, il obtiendrait un oreDictEntry:

```zenscript
val oreDict = <minecraft:iron_ingot> comme IOreDictEntry;
```

## Quelles méthodes peuvent être annotées || Informations supplémentaires

- Vous pouvez annoter toutes les méthodes non statiques (à moins que dans une ZenExpansion, car elles ne contiennent que des statiques)
- Les méthodes annotées ont besoin d'un paramètre lorsque dans une [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), aucune si elles sont dans une [classe Zen](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Ne comptez pas sur ZenCasters dans [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), ils ne fonctionnent de manière fiable que dans [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).
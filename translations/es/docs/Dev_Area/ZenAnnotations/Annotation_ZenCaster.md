# ZenCaster

Un ZenCaster denota un método que puede ser llamado usando el token `como` .  
ZenCasters puede ser usado para convertir un tipo en otro (por ejemplo, [Strings to IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Ejemplo

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKKKK: " + pila. etDisplayName());
    }

    @ZenCaster
    estático público IOreDictEntry asOreDict(ItemStack stack) {
        return stack. etOres().get(0);
    }
}
```

Si alguien lo llamara ahora, obtendría un oreDictEntry:

```zenscript
val oreDict = <minecraft:iron_ingot> como IOreDictEntry;
```

## Qué métodos se pueden anotar || Información adicional

- Puede anotar todos los métodos no estáticos (a menos que en una ZenExpansion, ya que sólo consisten en estáticas)
- Los Métodos anotados necesitan un parámetro cuando están en una [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), ninguno si están en una [Clase Zen](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- No confíe en ZenCasters en [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), solo funcionan de forma fiable en [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).
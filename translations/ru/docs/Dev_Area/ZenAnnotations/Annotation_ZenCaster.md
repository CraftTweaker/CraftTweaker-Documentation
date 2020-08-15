# ZenCaster

ZenCaster обозначает метод, который можно вызвать с помощью `в качестве токена` .  
ZenCasters может использоваться для преобразования одного типа в другой (например, [Строки в IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Пример

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKKKKK: " + стек. etDisplayName());
    }

    @ZenCaster
    public static IOreDictEntry asOreDict(IItemStack stack) {
        return stack. etOres().get(0);
    }
}
```

Если кто-то теперь вызовет это, они получат oreDictEntry:

```zenscript
val oreDict = <minecraft:iron_ingot> как IOreDictEntry;
```

## Какие методы могут быть аннотированы || Дополнительная информация

- Вы можете нотировать все нестатические методы (за исключением ZenExpansion, поскольку они состоят только из статиков)
- Аннотированные методы требуют одного параметра, когда они находятся в [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), ни один из них, если они находятся в [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Не доверяйте ZenCasters в [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), они работают надежно только в [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).
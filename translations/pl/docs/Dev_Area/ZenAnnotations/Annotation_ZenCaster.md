# ZenCaster

ZenCaster oznacza metodę, która może być wywołana za pomocą tokenu `jako` .  
ZenCasters może być użyty do konwersji jednego typu na inny (np. [ciągi na IData](https://github.com/jaredlll08/CraftTweaker/blob/30793645d58adeed12dfff50f31206a63a50d8de/CraftTweaker2-API/src/main/java/crafttweaker/zenscript/expand/ExpandString.java#L30-L33)).

## Przykład

```java
@ZenExpansion("crafttweaker.itemem. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKKK: " + stack. etDisplayName());
    }

    @ZenCaster
    publiczny statyczny IOreDictEntry asOreDict(IItemStack stack) {
        return stack. etOres().get(0);
    }
}
```

Gdyby ktoś to zadzwonił, dostałby rekord rekordu:

```zenscript
[PLACEHOLDER] val oreDict = <minecraft:iron_ingot> as IOreDictEntry;
```

## Jakie metody mogą być opatrzone || Dodatkowe informacje

- Możesz adnotować wszystkie metody niestatyczne (chyba że w ZenExpansion, ponieważ składają się tylko ze statycznych)
- Annotated Methods need one parameter when in a [ZenExpansion](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/), no if they are in the [ZenClass](/Dev_Area/ZenAnnotations/Annotation_ZenClass/).
- Nie polegaj na ZenCasters w [ZenClasses](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), działają one niezawodnie tylko w [ZenExpansions](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/).
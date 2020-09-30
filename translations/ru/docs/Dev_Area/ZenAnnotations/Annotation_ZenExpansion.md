# ZenExpansion

ZenExpansion, как и [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/), используется, чтобы пометить класс как доступный из ZS.  
В отличие от ZenClass, ZenExpansion используется, чтобы расширить функционал существующих классов.

## Пример

```java
@ZenExpansion("crafttweaker.item.IItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI.logInfo("СТОПКА: " + stack.getDisplayName());
    }
}
```

Это позволит делать так:

```zenscript
<minecraft:iron_ingot>.print();
```

Since this is an expansion the first parameter is the class' instance!  
This parameter will not be available in ZS.

## Какие классы должны быть помечены || Дополнительная информация

- All Methods need to begin with a parameter that represents the expanded class' instance. Also, all Methods inside the expansion must be static (... and public).
- You can annotate all Java Classes
- You must give the annotation a String value (e.g. `crafttweaker.item.IItemStack`). This String value must represent an already existing ZenClass' name.
- After declaring a class a ZenExpansion, you still need to register it. Рекомендуется, чтобы вы использовали для этого [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/).
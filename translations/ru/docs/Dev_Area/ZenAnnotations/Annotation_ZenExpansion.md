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

Поскольку это расширение является первым параметром экземпляра класса!  
Этот параметр не будет доступен в ZS.

## Какие классы должны быть помечены || Дополнительная информация

- Все методы должны начинаться с параметра, представляющего экземпляр расширенного класса. Кроме того, все методы внутри расширения должны быть статичными (... и публичная).
- Вы можете аннотировать все классы Java
- Вы должны дать аннотацию значения строки (например, `crafttweaker.item.IItemStack`). Это значение должно представлять уже существующее имя ZenClass'.
- После объявления класса ZenExpansion, вам все равно нужно зарегистрировать его. Рекомендуется, чтобы вы использовали для этого [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/).
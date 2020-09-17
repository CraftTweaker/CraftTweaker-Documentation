# ZenExpansion

Eine ZenExpansion wird wie [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)verwendet, um eine Klasse zu kommentieren, die innerhalb von ZS zugänglich sein soll.  
Im Gegensatz zu ZenClasses werden jedoch ZenExpansions verwendet, um die Funktionalität bereits bestehender Zenklassen zu erweitern.

## Beispiel

```java
@ZenExpansion("crafttweaker.item. ItemStack")
@ZenRegister
public class Expansion {
    @ZenMethod
    public static void print(IItemStack stack) {
        CraftTweakerAPI. ogInfo("STACKKK: " + stack.getDisplayName());
    }
}
```

Dies würde den Menschen erlauben zu tun

```zenscript
<minecraft:iron_ingot>.print();
```

Da dies eine Erweiterung ist, ist der erste Parameter die Instanz der Klasse!  
Dieser Parameter wird in ZS nicht verfügbar sein.

## Welche Klassen können kommentiert werden || Zusätzliche Informationen

- Alle Methoden müssen mit einem Parameter beginnen, der die erweiterte Klasseninstanz darstellt. Außerdem müssen alle Methoden innerhalb der Erweiterung statisch sein (... und öffentlich).
- Sie können alle Java-Klassen kommentieren
- Sie müssen der Anmerkung einen String-Wert geben (z.B. `crafttweaker.item.IItemStack`). Dieser String-Wert muss einen bereits existierenden Namen der ZenClass repräsentieren.
- Nachdem Sie eine Klasse zur ZenExpansion erklärt haben, müssen Sie sie noch registrieren. Es wird empfohlen, [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) dafür zu verwenden.
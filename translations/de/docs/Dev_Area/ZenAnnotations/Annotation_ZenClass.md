# ZenClass

Eine ZenClass ist eine Java-Klasse, die ZenScript ausgesetzt wurde.

## Beispiel

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
public interface IItemStack extends IIngredient {
    //Cut out um die Seite kurz zu halten
}
```

Die tatsächliche Umsetzung muss nicht kommentiert werden.

## Welche Klassen können kommentiert werden || Zusätzliche Informationen

- Sie können alle Java-Klassen kommentieren
- Sie sollten der Anmerkung einen String-Wert geben (z.B. `crafttweaker.item.IItemStack`). Dies wird der interne ZS-Name für die Klasse sein.
- Nachdem Sie eine Klasse zu einem ZenClass erklärt haben, müssen Sie sie trotzdem registrieren. Es wird empfohlen, dass Sie [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) dafür verwenden
# Hochofen

Das HighOven Paket erlaubt das Hinzufügen/Entfernen von Kraftstoffen, Wärmerezepten und die Mischung von Rezepten zum Hochofen.

## Dieses Paket importieren

Importiere das Paket mit

```zenscript
importieren mods.tcomplement.highoven.HighOven;
```

## Treibstoffe

Sie können Kraftstoffe hinzufügen und entfernen, die vom Hochofen akzeptiert werden.

### Brennstoffe entfernen

```zenscript
// HighOven.removeFuel(IIngredient Brennstoff);
HighOven.removeFuel(<minecraft:coal:1>);
```

### Treibstoffe hinzufügen

```zenscript
// HighOven.addFuel(IIngredient Brennstoff, Integrierte Zeit);
HighOven.addFuel(<minecraft:hay_block>, 3600, 5);
```

+ `Treibstoff` ist der hinzuzufügende Brennstoff (unterstützt Transformatoren, NBT und Flüssigkeitsbehälter)
+ `mal` ist, wie lange der Treibstoff dauert, in Sekunden
+ `Rate` ist die Temperaturerhöhung des hohen Ofens, wenn dieser Treibstoff verwendet wird, in Grad pro Sekunde

## Schmelzende Überschreibungen

Sie können schmelzende Overrides für den Hochöfen hinzufügen und entfernen. Schmelzen überschreibt, gut, überschreiben das Standard-Schmelzverhalten im Hochofen. Gegenstände verhalten sich normalerweise wie im Schmelztiegel, Überschreibungen können die Ausgangsflüssigkeit und die Schmelztemperatur neu definieren (nur für den Hochofen).

### Überschreibungen entfernen

```zenscript
// HighOven.removeMeltingOverride(ILiquidStack-Ausgabe, @Optional IItemStack Eingang)
HighOven.removeMeltingOverride(<liquid:iron>);
```

### Überschreibungen hinzufügen

Das ist interessanter. Überschreibungen geben ein neues Verhalten für Items im Hochofenbereich an

```zenscript
// HighOven.addMeltingOverride(ILiquidStack Output, IIngredient Input, @Optional int temp)
HighOven.addMeltingOverride(<liquid:steel> * 144, <ore:ingotIron>, 2567);
```

+ `Ausgabe` der Flüssigkeit und der zu produzierenden Menge
+ `Eingabe` des IIngredient zum Schmelzen. Unterstützt Transformatoren, Ordikt usw.
+ `Temperatur` (Optional) die Mindesttemperatur für das Schmelzen im Hochofen, in Kelvin. Falls nicht definiert, überlasse die Berechnung dem Hochofen,

## Hitzerezepte

Wärmerezepte verwandeln eine Flüssigkeit in eine andere im Hochofentank, sofern die Temperatur des Hochofens hoch genug ist.

### Entfernen von Wärmerezepten

```zenscript
// HighOven.removeHeatRecipe(ILiquidStack-Ausgabe, @Optionale ILiquidStack-Eingang);
HighOven.removeHeatRecipe(<liquid:steam>);
```

+ `Ausgabe` ist die Ausgabe für die Rezepte deaktiviert werden sollen
+ `Eingabe` ist optional die Eingabe um Rezepte zu filtern. Wenn nicht angegeben (oder `null`) werden alle Rezepte, die die gelieferte Ausgabe erzeugen, deaktiviert. Ansonsten ist nur das Rezept mit der angegebenen Eingabe deaktiviert.

*HINWEIS*: diese Methode deaktiviert **nicht** Wärmerezepte, die von ModTweaker mit der nächsten Methode hinzugefügt wurden.

### Wärmerezepte hinzufügen

```zenscript
// HighOven.addHeatRecipe(ILiquidStack output, ILiquidStack input, int temp);
HighOven.addHeatRecipe(<liquid:iron> * 144, <liquid:lava> * 1000, 1450);
```

+ `gibt` die zu prüfende Flüssigkeit aus und in welcher Menge
+ `Geben Sie` die zu verzehrende Flüssigkeit ein und in welcher Menge, um die Ausgangsmenge zu produzieren
+ `Temperatur` die minimale hohe Ofentemperatur, in Kelvin.

*Notiz*: die tatsächliche Rate der Wärmerezepte skaliert mit übermäßiger Temperatur

## Mix Rezepte

Mix-Rezepte erlauben eine Art Alchemie oder Legierung. Wenn ein Stapel im Hochofen, wenn er die richtige Flüssigkeit *und* die richtigen Oxidatoren erzeugt, Reduktionsmittel und Reinigungsmittel sind in ihren dedizierten Slots, dann wird eine andere Flüssigkeit produziert.

Da diese Rezepte kompliziert sind, verwendet das Hinzufügen oder Verfeinern bestehender Rezepte eine spezielle Zen-Klasse.

### Entferne Mixrezepte

Dies ist der einfache Teil für Mischrezepte

```zenscript
// HighOven.removeMixRecipe(ILiquidStack-Ausgabe, @Optionale ILiquidStack-Eingabe);
HighOven.removeMixRecipe(<liquid:steel>); // jedes stahlproduzierende Mixrezept deaktivieren
```

Die Argumente sind die gleichen wie `removeHeatRecipe()` und die Übereinstimmung funktioniert auf die gleiche Weise. Ähnlich wie `removeHeatRecipe()`wird diese Methode keine Rezepte entfernen, die von ModTweaker hinzugefügt wurden.

### Mischrezepte hinzufügen

Um ein Mixrezept hinzuzufügen, müssen Sie einen `MixRecipeBuilder` verwenden. Du erhältst eine mit

```zenscript
import mods.tcomplements.highoven.MixRecipeBuilder;

// HighOven.newMixRecipe(ILiquidStack-Ausgabe, ILiquidStack-Eingabe, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `Ausgabe` ist die zu produzierende Flüssigkeit und Menge
+ `Eingabe` ist die zu verzehrende Flüssigkeit und Menge
+ `Temperatur` ist die minimale Temperatur des hohen Ofens, damit das Rezept funktioniert, in Kelvin

Wenn Sie einen `MixRecipeBuilder`haben, sollten Sie ihm Oxidierer, Reduzierer und Reinigungsmittel hinzufügen und ihn dann registrieren.

```zenscript
builder.addOxidizer(<minecraft:redstone>, 95);
builder.addReducer(<minecraft:glowstone>, 5);
builder.addPurifier(<ore:dustCoal>, 50);
builder.addPurifier(<minecraft:nether_star>, 0);
builder.register();
```

Eine detaillierte Dokumentation dessen, was Sie mit einem `MixRecipeBuilder`tun können, finden Sie in der Dokumentation.

NOTE*: Once you have used a `MixRecipeBuilder`, you can keep modifying it and re-using it. Es ermöglicht das Hinzufügen von Rezeptvarianten.

**WARNUNG**: Wenn kein Element die Eingangsflüssigkeit erzeugt, wenn es in der Schmelze schmilzt, dann ist das Rezept in JEI nicht sichtbar.

### Mischrezept anpassen

Um bestehende Mischrezepte zu ändern (**einschließlich** von ModTweaker hinzugefügt), können Sie einen `MixRecipeManager` verwenden:

```zenscript
import mods.tcomplement.highoven.MixRecipeManager;

// HighOven.manageMixRecipe(ILiquidStack Output, ILiquidStack Input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

Wie üblich, wenn die Eingabe nicht angegeben wird (oder `Null`angibt), führt dies zu einem Platzhalterverhalten, bei dem alle Eingaben akzeptiert werden.

Sobald Sie einen `MixRecipeManager` haben, der ein bestimmtes Set von Mixrezept repräsentiert, Sie können verhindern, dass bestimmte Oxydizer/Reduzierer/Reinigungsmittel zu diesen Rezepten hinzugefügt werden *oder* versuchen neue Additive hinzuzufügen. Umzüge haben bei Ergänzungen Priorität.

```zenscript
manager.removeOxidizer(<minecraft:redstone>);
manager.addPurifier(<minecraft:dirt>, 25);
```

Manchmal ist das Verhalten etwas übertrieben. Wenn Sie einen Additiv deaktivieren, wird jeder Additiv, der das Deaktivieren erlauben würde, abgebrochen. Zum Beispiel, wenn du ein paar Elemente mit einem einzigen `OreDictEintrag`hinzufügst, dann versuchen Sie, einen bestimmten `IItemStack`zu entfernen, was verhindert, dass der Eintrag hinzugefügt wird.

Dies liegt daran, dass `OreDictEntry` unverändert hinzugefügt wird und nicht in einzelne Elemente konvertiert wird. Die einzige Möglichkeit, den `Artikel-Stack` zu deaktivieren, ist zu verhindern, dass der gesamte Eintrag registriert wird, andernfalls würde der Eintrag das Element erlauben.

Wenn du wirklich einen Oredict Eintrag hinzufügen möchtest, außer einigen Elementen, Sie müssen dies manuell tun, indem Sie den `OreDictEntry` Inhalt iterieren und dann bestimmte Elemente entfernen (oder indem Sie sie nicht zuerst hinzufügen).
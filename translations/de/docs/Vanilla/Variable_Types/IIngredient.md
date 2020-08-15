# IIngredient

Ein IIngredient ist ein Zutat für Rezepte.  
Dies könnte [ein Element sein](/Vanilla/Items/IItemStack/), [ein Erzwörterbucheintrag](/Vanilla/OreDict/IOreDictEntry/), [eine Flüssigkeit](/Vanilla/Liquids/ILiquidStack/) und vieles mehr.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.item.Igredient;`

## Importieren des IIngredient-Pakets

Usually, you won't need this, but in some cases recipes won't work until you [import](/AdvancedFunctions/Import/) the IIngredient package.  
You can do this using the following import:

```zenscript
import crafttweaker.item.IIngredient;
```

## Funktionen

Was können wir also damit tun?

### Befehlszeichenkette

Der Befehlsstring ist, wie Sie dieses Element in ZS aufrufen möchten.  
Dies kann ein Klammerhandler oder ähnliches sein.

```zenscript
val item = <minecraft:iron_ingot>;

//druckt "<minecraft:iron_ingot>"
print(item.commandString);
```

### Markierung

Du kannst einen IIngredient markieren, damit du ihn später in [Handwerksfunktionen verwenden kannst.](/Vanilla/Recipes/Crafting/Recipe_Functions/). Sie können die Markierung auch früher anwenden.

```zenscript
//Markiert die Auswahl mit der String Picky
//item.marked(name) <-- Name ist ein String!
val markedPick = <minecraft:diamond_pickaxe>.marked("Picky");

//druckt "Picky"
print(markedPick.mark);
```

### Betrag

Wenn Sie mehr als eines eines bestimmten Elements verwenden möchten, können Sie einen Betrag auf einen IIngredienten setzen.  
Dies ist so einfach wie das Multiplizieren des Ingredienten mit einem Integer.  
Der Betrag abzufragen ist ebenfalls möglich.

```zenscript
val multipleApples = <minecraft:apple> * 3;

//druckt 3
print(multipleApples.amount);
```

### ODER-ing ein Ingredient

Manchmal willst du entweder IIngredient X oder Y wollen, aber willst du nicht ein Rezept für jede Möglichkeit erstellen? Deshalb gibt es die OR-Methode für Ingredients:

```zenscript
val item1 = <minecraft:apple>;
val item2 = <minecraft:carrot>;

val either = item1 | item2;
val either 2 = item1.or(item2);
```

### Mögliche Gegenstände oder Flüssigkeiten erhalten

Manchmal repräsentiert ein IIngredient mehr als ein Element, zum Beispiel wenn Sie einen [OreDictEntry](/Vanilla/OreDict/IOreDictEntry/) verwenden oder wenn Sie zwei Zutaten mit OreDictEntry oder OreDictEntry mit OreDictEntry oder OreDictEntry mit OreDictEntry verwenden.  
Mit der ersten Funktion können Sie alle möglichen Elemente für diesen Igredient als Liste erhalten<[IItemStack](/Vanilla/Items/IItemStack/)> Liste erhalten.  
Die zweite Funktion erfüllt die gleiche Funktion wie die erste Funktion, gibt aber einen [IItemStack](/Vanilla/Items/IItemStack/)[] statt einer Liste zurück. Gleiches gilt für Flüssigkeiten in der dritten Funktion, nur sie liefern einen [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Liste.

```zenscript
//Gibt eine IItemStack Liste
//Mögliche Gegenstände: Alle Eisenbarren und der Goldbarren von MC
val itemsIngredient = <ore:ingotIron> | <minecraft:gold_ingot>;


//Gibt eine ILiquidStack Liste zurück|
//Mögliche Flüssigkeiten: Lava und Wasser
val liquidsIngredient = <liquid:lava> | <liquid:water>;


für Artikel in ItemsIngredient. tems{
    //Druckt jeden möglichen Anzeigenamen
    print(item. isplayName);
}

für Element in itemsIngredient.itemArray{
    //Druckt jeden möglichen Anzeigenamen
    print(item. isplayName);
}

für flüssige Substanzen. iquids{
    //Druckt jeden möglichen Anzeigenamen der Flüssigkeiten
    print(liquid. isplayName);
}

für flüssig in <minecraft:water_bucket>.liquids {
    //Druckt die enthaltene Flüssigkeit, d.h. Wasser.
    //Kann aber nicht für jedes Element funktionieren.
    print(liquid.displayName);
}
```

### Beim Herstellen eines Ingredienten transformieren

Manchmal soll ein Gegenstand nicht beim Herstellen konsumiert werden, sondern stattdessen beschädigt oder einen ganz anderen Gegenstand zurückgegeben werden.  
Dafür stehen Transformatoren zur Verfügung.

```zenscript
<br /><br />val item = <minecraft:apple>;

//Item won't be consumed and will stay in the grid
transformedItem = item.reuse();

//Item won't be consumed and the whole stack will be given back to you (does /give).
transformedItem = item.giveBack();

//Item wird verbraucht, aber der angegebene Stack wird dir übergeben (der Handwerksplatz wird gelöscht!).
transformedItem = Element. iveBack(<minecraft:potato>);

//Item wird durch das angegebene Element ersetzt, das stattdessen in den Handwerksplatz
transformedItem = Item geht. ransformReplace(<minecraft:potato>);

//beschädigt das Element durch 1
transformedItem = item. ransformDamage();

//beschädigt das Element um den angegebenen Wert
transformedItem = item.transformDamage(3);

//Element wird verbraucht, egal was dabei ist.
transformedItem = item.noReturn();

//Verbraucht mehrere Elemente.
transformedItem = item.transformConsume(3);
```

### Zutatenbedingungen

Manchmal soll deine Zutat einen bestimmten Tag haben oder nur funktionieren, wenn (nicht) beschädigt ist. Diese Bedingungen können deinen Zutaten hinzugefügt werden, indem du Folgendes verwendest:

```zenscript
val item = <minecraft:apple>;

//Item wird nur mit mindestens 1 Punkt Schaden
var conditionedItem = Item akzeptiert. nlyDamaged();

//Item wird nur mit den angegebenen Schadenspunkten
conditionedItem = Item akzeptiert. nlyDamageAtLeast(10);

//Item wird maximal mit den angegebenen Schadenspunkten akzeptiert
conditionedItem = item. nlyDamageAtMost(100);

//Item wird nur akzeptiert, wenn die Schadenspunkte größer oder gleich wie der erste oder kleinere oder gleich wie der zweite Integer sind.
conditionedItem = item.onlyDamageBetween(10,100);

//Item wird nur mit dem angegebenen Tag akzeptiert. Das Element kann mehr/andere Tags als angegeben haben, diese werden bei der Auswahl ignoriert.
//Wenn JEI den Tag im Rezeptbildschirm anzeigen soll, müssen Sie einen Tag mit "withTag(tag)"
conditionedItem = Item hinzufügen. nlyWithTag({display: {Name: "Tomato"}});

//Item wird nur mit dem angegebenen Tag akzeptiert. Das Element kann mehr/andere Tags als angegeben haben, diese werden bei der Auswahl ignoriert.
//Hinweis: Dies kann nicht mit allen Zutaten funktionieren, aber es funktioniert für Items. Pro Seite zu verwenden ist, dass JEI die Tags im Rezept anzeigt!
conditionedItem = item.withTag({display: {name: "Tomato"}});

//Item wird nur akzeptiert, wenn in einem Stapel von mindestens der angegebenen Menge. Meistens in Kombination mit dem Konsum-Transformator.
//Beachten Sie, dass, wenn Sie dies nur hinzufügen, es wird immer noch nur ein Element pro Boot verbraucht.
konditionedItem = item.onlyStack(32);
```

### Passend

Wenn Sie überprüfen möchten, ob ein IItemStack mit Ihrem IIngredient übereinstimmt, können Sie die Match-Methode verwenden. Dies gibt einen Boolean zurück. Wenn der IIngredient eine Flüssigkeit darstellt, wird überprüft, ob der Artikel ein gültiger Behälter für diese Flüssigkeit ist.

```zenscript
print(<ore:ingotIron>.matches(<minecraft:iron_ingot>));
print(<ore:ingotIron>.matchesExact(<minecraft:iron_ingot>));
```

Du kannst auch zwei IIngredient Objects finden, in diesem Fall musst du die ```in``` operator:

```zenscript
val Barren = <minecraft:iron_ingot> | <minecraft:gold_ingot>;
val oreIngot = <ore:ingotIron>;
val ingotGold = <minecraft:gold_ingot>;

//true, da die Barren Ingredient <minecraft:gold_ingot>
Barren ingotGold hat;

//false da <minecraft:iron_ingot> nicht gefunden werden kann in <ore:ingotGold>
oreIngot hat Barren;
```
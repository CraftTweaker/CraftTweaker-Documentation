# OreEintrag

Ein OreEntry ist ein Material wie Gold, Diamant, Kohle, Redstone und so weiter.  
Sie können dies verwenden, um mehrere [OreDictEinträge](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) zu erhalten.

## Methoden

Im Allgemeinen nehmen die Methoden einen String-Parameter, der ein Präfix ist, der verwendet werden soll.  
Zum Beispiel ein OreEintrag für `"Gold"`, aufgerufen mit dem Präfix `"Staub"` wird Gold Staub zurückgeben.  
Für diese Beispiele, wir gehen davon aus, dass dies deklariert wurde:  
Die Kommentare nach den Beispielaufrufen geben an, was die Methodenaufrufe zurückgeben können (außer in der zusätzlichen Kategorie).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Gold");
```

### Eintragseigenschaften abrufen

Sie können diese Eigenschaften erhalten:

```zenscript
oreEntry.energyModifier; //1.0 als double
oreEntry.rarity; //1.0 als double
oreEntry.oreType; //"INGOT" als string
```

### OreName oder OreNameSynonyms erhalten

Der Erzname ist unentbehrlich, wie er registriert wird und was du in einem getOre verwendest, um ihn abzurufen.  
Die Erznamenssynonyme sind Synonyme, die Mods oder Paketautoren registrieren können, um zwei oder mehr OreEinträge zu kombinieren (z. "Aluminium" und "Aluminium"). Die meisten OreEntries werden wahrscheinlich nichts registriert. Der Synonym Getter gibt eine Liste zurück, die alle Synonyme als Strings enthält.

```zenscript
oreEntry.oreName; //"Gold"
oreEntry.oreNameSynonyms; //[]
```

### IOreDictEintrag herunterladen

Gibt einen neuen [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/) mit dem angegebenen Präfix zurück.

```zenscript
oreEntry.getOreDictEntry("staub"); //<ore:dustGold>
```

### Get IItemStack

Gibt einen neuen [IItemStacks](/Vanilla/Items/IItemStack/) zurück, der mit dem angegebenen Präfix übereinstimmt.  
Sie können einen alternativen Fallback-Präfix angeben, der verwendet werden kann, wenn kein passendes Element gefunden wird.

Wenn kein passendes Element gefunden und kein passendes Element mit dem Fallback-Präfix gefunden wurde (falls vorhanden), wird es `null` zurückgeben.

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); //null

//oreEntry.getItemStack(prefix, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Gibt einen neuen [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) zurück, der mit dem angegebenen Präfix übereinstimmt.  
Sie können einen alternativen Fallback-Präfix angeben, der verwendet werden kann, wenn kein passendes Liquid gefunden wird.

Wenn keine passende Flüssigkeit gefunden wird und keine passende Flüssigkeit mit dem Fallback-Präfix gefunden wird (falls vorhanden) wird `null` zurückgegeben.

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); //null

//oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Extra erhalten

Ein Eintrag kann einen extra registrierten Eintrag haben. Ein Extra kann zum Beispiel eine sekundäre Ausgabe sein, wenn ein passendes Erz pulverisiert wird.

Sie können entweder überprüfen, ob ein Eintrag ein Extra, erhalten Sie das Extra (oder `null` wenn nicht vorhanden) oder den Extranamen.  
Sie können auch die gleichen Methoden wie oben verwenden (`getOreDictEntry`, `getLiquidStack` und `getItemStack`).

Es gibt bis zu 3 Extras, die registriert werden können. Um der Einfachheit willen gibt es keine Beispiele für die entsprechenden Methoden, sie werden nur angegeben

```zenscript
//Erstes zusätzliches
oreEntry.hasExtra; //true oder false
oreEntry.extra; //übereinstimmende oreEntry oder null
oreEntry. xtraName; //Name oder Null

//Methoden für das erste Extra
oreEntry. etOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry. etLiquidStackExtra(prefix);
oreEntry.getLiquidStackExtra(prefix, fallback);



//Zweiter Extra
oreEntry.hasSecondExtra; //true or false
oreEntry. econdExtra; //übereinstimmend mit oreEntry oder null
oreEntry.secondExtraName; //Name oder Null

//Methoden für Sekunde extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry. etItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//Third extra
oreEntry.hasThirdExtra; //true or false
oreEntry.thirdExtra; //matching oreEntry or null
oreEntry. hirdExtraName; //der Name oder null

//Methoden für dritte Extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```
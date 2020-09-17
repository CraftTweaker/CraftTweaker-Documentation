# IOreDict

Das Forge OreDictionary ist wie ein riesiges Lexikon, da es viele verschiedene Einträge enthält und jeder Eintrag durch passende Artikel beschrieben wird.  
Wenn über ErzWörterbücher gesprochen wird, beziehen sich die Leute meist auf [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) nicht auf das ganze ErzWörterbuch.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.oredict.IOreDict;`

## Wie man das OreDictionary abruft

You can retrieve the OreDictionary using the [`oreDict` global keyword](/Vanilla/Global_Functions/).

## Methoden

Was kann man also mit dem oreDict tun?

### Einen [IOreDictEintrag erhalten](/Vanilla/OreDict/IOreDictEntry/)

Sie können eine der drei folgenden Möglichkeiten nutzen, um auf ein OreDictEntry zu verweisen, egal ob es bereits existiert oder nicht.  
Wenn der oreDictEintrag noch nicht existiert, wird er erstellt.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Iteration durch alle registrierten [IOreDictEinträge](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//das Eintragsmitglied kann alle registrierten oreDictionary Einträge abrufen!
val allEinträge = oreDict.entries;

für oreDictEintrag in allEntries{
    print(oreDictEntry. ame);
}

//Alternativ können Sie einfach durch oreDict
für den Eintrag in oreDict {
    print(entry.name);
}

```

## Wie man prüft, ob ein Eintrag im Wörterbuch existiert

Sie können `in` verwenden oder `hat` Operator um zu überprüfen, ob ein [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/) bereits existiert:

```zenscript
if (oreDict in "ingotIron") {
    print("ingotIron existiert! );
}

if (oreDict has "ingotIron") {
    print("ingotIron existiert! );
}


//Alternativ die enthaltene Funktion verwenden:
if(oreDict. ontains "ingotIron") {
    print("ingotIron exiss!"); 
}
```
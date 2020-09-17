# IOreDictEintrag

Wenn das [IOreDict](/Vanilla/OreDict/IOreDict/) das Wörterbuch ist, sind die IOreDictEntries die Einträge des Wörterbuchs.  
Sie bestehen aus einem Namen (OreDictionary name) und einer Erklärung (alle passenden Elemente).

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.oredict.IOreDictEntry;`

## Ein solches Objekt wird abgerufen.

There are multiple ways of getting an IOreDictEntry Object: If you refer to an oreDict that does not yet exist, it will be created.

- Verwendung der [IOreDict](/Vanilla/OreDict/IOreDict/) Klasse.
- Verwendung des [Erzhalterhandlers](/Vanilla/Brackets/Bracket_Ore/).
- Mit [IItemDefinition's `ores` getter](/Vanilla/Items/IItemDefinition/).

## ZenGetter

Du kannst diese Getter benutzen, um einige Informationen über das Orden abzurufen:

| name           | Beschreibung                                | Rückgabetyp                              |
| -------------- | ------------------------------------------- | ---------------------------------------- |
| name           | Gibt den oreDict-Namen zurück               | string                                   |
| leer           | Gibt zurück, wenn das oreDict leer ist      | bool                                     |
| erster Artikel | Gibt den ersten der oreDict-Elemente zurück | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethoden

Sie können diese Methoden für ein IOreDictEntry Objekt verwenden:

### Elemente hinzufügen/entfernen

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] Items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Prüft, ob ein IOreDictEintrag ein Element enthält

Sie können überprüfen, ob ein IOreDictEintrag ein Element enthält, das entweder `in` oder `` Stichwörter enthält:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//Während die Verwendung in möglich ist
if(oreDictEnt in <minecraft:iron_ingot>){
    print("Iron is in the oreDict! );
}

//viele bevorzugen die Verwendung hat, da es möglicherweise sinnvoller sein könnte, Grammatik zu verwenden
if(oreDictEnt hat <minecraft:iron_ingot>){
    Drucken ("Eisen ist immer noch im OreDict! );
}
```

### IOreDictEintrag spiegeln

Das Spiegeln eines IOreDictEntry bedeutet, dass alle Elemente im anderen oreDictEntry durch die Elemente im oreDictEntry ersetzt werden, auf denen die Methode ausgeführt wurde:

```zenscript
//Erstelle Eisen und Kupfer äquivalent
val iron = <ore:ingotIron>;
val copper = <ore:ingotCopper>;

//fügt alle Einträge von Eisen bis Kupfer hinzu, so dass Kupfer beides enthält, den Eisen- und Kupfereintrag
Eisen. ddAll(Kupfer); 


//Spiegelt Kupfer zu Eisen, so dass alle Gegenstände aus Eisen durch alle in Kupfer ersetzt werden.
//In diesem Fall bedeutet das für alle oreDictEntries
copper.mirror(Iron);
```

## Ingrediente Implementierung

IOreDictEntry erweitert [IIngredient](/Vanilla/Variable_Types/IIngredient/). Das bedeutet, dass alle Methoden, die für [IIngredient](/Vanilla/Variable_Types/IIngredient/) verfügbar sind, auch für IOreDictEntries verfügbar sind. Es bedeutet auch, dass Sie IOreDictEinträge in IIngrediente Arrays (wie die bei der Herstellung von Rezeptmethoden) setzen können.

### Iterieren durch die Gegenstände eines oreDictEntrys

```zenscript
val iron = <ore:ingotIron>;

für Artikel in Iron.items{
    recipe.remove(item);
}
```
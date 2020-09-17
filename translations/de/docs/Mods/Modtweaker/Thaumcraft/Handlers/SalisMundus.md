# Salis Mundus

Dieses Paket erlaubt es Ihnen, Konvertierungs-Handler für den salis mundus Handler von thaumcraft hinzuzufügen.  
Diese Handler werden aufgerufen, wenn du einen Block in der Welt mit Thaumcraft's salis mundus klickst, um sie auf etwas anderes zu ändern.

Wenn dieses Ergebnis ein Block ist, wird es in der Welt platziert, wenn nicht, wird es als Element entfernt.

## Dieses Paket importieren

To shorten method calls you can [import](/AdvancedFunctions/Import/) the package like so:

```zenscript
importieren mods.thaumcraft.SalisMundus;
```

## Rezepte hinzufügen

Sie können entweder einen [IBlock](/Vanilla/Blocks/IBlock/) oder einen [IOreDictEintrag](/Vanilla/OreDict/IOreDictEntry/)angeben.  
Wenn Sie keine Forschung angeben, wird dieses Rezept immer möglich sein wenn Sie einen Forschungs-String angeben wollen, müssen Sie die Forschung freischalten lassen, damit die Umwandlung in eine Zeichenkette funktioniert.

```zenscript
//mods.thaumcraft.SalisMundus.addSingleConversion(IBlock in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<blockstate:minecraft:dirt>.block, <minecraft:bedrock>);

//mods.thaumcraft.SalisMundus. ddSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
mods.thaumcraft.SalisMundus.addSingleConversion(IOreDictEntry in, IItemStack out, @Optional String research);
SalisMundus.addSingleConversion(<ore:blockIron>, <minecraft:bedrock>);
```

## Rezepte entfernen

Du kannst auch alle Rezepte entfernen, die ein passendes Item zurückgeben.  
Dieser Handler prüft, ob der angegebene Parameter mit dem AusgabeelementStack übereinstimmt, damit Sie auch alle Rezepte mit der Wildcard-Zutat `<*>` entfernen können.

```zenscript
mods.thaumcraft.SalisMundus.removeSingleConversion(IIngredient output);

//Entfernt ALLE registrierten Handler
mods.thaumcraft.SalisMundus.removeSingleConversion(<*>);

//Entfernt nur den Schlüssel-Handler
mods.thaumcraft.SalisMundus.removeSingleConversion(<thaumcraft:crucible>);
```
# JEITweaker

## Beschreibung

Diese Mod fügt JEI zusätzlich Unterstützung für CraftTweaker hinzu. CraftTweaker unterstützte früher JEI nativ, aber aufgrund des 1.14 Rewrites wird die JEI Unterstützung in seinem eigenen Mod herausgezogen.


## Paket
`mods.jei.JEI`

## Item verstecken

Dadurch wird das angegebene Element in JEI ausgeblendet. Das angezeigte Beispiel verdeckt den Schmutzblock im JEI-Menü.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Kategorie verstecken

Dadurch wird die angegebene Kategorie in JEI versteckt. Das angeführte Beispiel wird die Ofenkategorie bei der Suche nach Rezepten in JEI verbergen.

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Die Standardkategorien sind:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Mods können jedoch weitere Kategorien hinzufügen!

## Info hinzufügen

Dies fügt dem Element Informationen hinzu, die beim Betrachten der Nutzungen in JEI!.

Dieses exakte Beispiel fügt dem Diamant-Item 3 Zeilen Informationen hinzu.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] Information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["Dies ist die erste Zei!", "Dies ist die zweite!", "third"]);
```

Der obige Code wird produzieren: ![Commit Box ausgefüllt](https://blamejared.com/docsImages/JEITweakerAddInfo.png)



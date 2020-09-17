# Ores

**Benötigt im `#loader preinit` oder `#loader contenttweaker`**


## Paket
```zenscript
"mods.exnihilocreatio.Ore"
```

## Methoden

- **Stringname** Name der Erzstücke/Stück/Staub/Barren
- **Zeichenkettenfarbe** Farbe des Materials in Hexen.
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** benötigt ein oredict.firstItem oder Fehler aus.
- **Kartenstring[string]** Sprachcode dann Übersetzung.
- **Zeichenfolge oreDict** Der Name des oreDict den du möchtest.

## Addition

```zenscript
mods.exnihilocreatio.Ore. ddRecipe(String,
    String,
    @Optional IItemStack,
    @Optionale Karte<string, String>,
    @Optionale Zeichen);

Mods. xnihilocreatio.Ore.addRecipe("Steine",
    "63452D",
    <ore:stone>. irstItem,
    {
    "de_au": "StoneDownUnder"
    },
    "Stein");
```

## Entfernen

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```
# Artikel-Registry

## Paket
```zenscript
// Importiert ItemRegistry-Methoden in Ihr Skript
importiert mods.terrafirmacraft.ItemRegistrierung;
```

## Artikelgröße registrieren
- Artikelgröße und -gewicht registrieren. Dies ändert wie viel ein Stapel halten kann.
- Größen [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Gewichtet [VERY_LIGHT, LIGHT, MEDIUM, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient Eingabe, Stringgröße, Stringgewicht);
```

## Register Gegenstandswärme
- Registrieren Sie die Wärmekapazität des Gegenstands und wenn dieser Gegenstand verfälscht ist (z. B.: kann in Amboss verwendet werden).
- Die Wärmekapazität bestimmt, wie schnell ein Gegenstand abkühlt oder aufwärmt. Schmiedeeisen ist 0.35.
- Schmelztemperatur bei der die Temperatur des Gegenstands geschmolzen ist. Schmiedeeisen ist 1535 Brilliant White und Bronze 950 Orange. Überprüfen Sie [Heiztemperaturen](/Mods/Terrafirmacraft/HeatingTemperatures) für eine vollständige Referenz
```zenscript
ItemRegistry.registerItemHeat(IIngrediente Eingabe, Float HeatCapacity, float meltTemp, bool vergessen);
```

## Item Metall registrieren
- Registrieren Sie Artikel als Metallstück. Beachten Sie, dass dies automatisch die Heiz- und Schmiedefähigkeit erhöht. Wenn nicht Schmelze falsch ist, wird dieser Gegenstand nicht direkt die Ausgabe tragen (wie Eisenerz benötigt Blüte/Hochofen)
- Registrierte Metallbarren werden nicht automatisch als gültiger Eingang für Werkzeuge registriert (z. B.: Stahlbarren von anderen Mods, die von der RegisterMetalItem-Methode registriert sind, können nicht automatisch zum TFC-Stahl-Spitzhackekopf verwendet werden)
```zenscript
ItemRegistry.registerItemMetal(IIngredienteneingabe, String-Metall, Inteneinheiten, bool canMelt);
```

## Lebensmittel registrieren
- Lebensmittelstatistiken registrieren (Funktioniert nicht bei TFC Lebensmitteln), Dies hat Vorrang vor bestehenden Werten. Die Einstellung Zerfall auf 0 stoppt den Verfall.
```zenscript
ItemRegistry.registerFood(IIngredient Eingang, Ing Hunger, Schwebewasser, Schwebesättigung, Schwebekörner, schwebendes Getreide, schwebendes veg, schwebendes Obst, schwebendes Fleisch, schwebendes Molkerei);
```

## Rüstung registrieren
- Rüstungsstatistik registrieren
```zenscript
ItemRegistry.registerArmor(IIngrediente Eingabe, Float BrechingModifier, Float piercingModifier, Float SlashingModifier);
```

## Brennstoff registrieren
- Registriere ein Item als Brennstoff für Feuergrube, Schmiede oder Blüte
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int brennen Ticks, float temperatur, bool forgeFuel, bool bloomeryFuel);
```

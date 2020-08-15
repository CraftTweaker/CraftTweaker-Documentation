# Gegenstand in Gasumwandlung

Ab Mekanism 9.7.5 ist es jetzt möglich, kundenspezifische Gegenstände für Gasumwandlungen in verschiedenen Maschinen zu haben.

Wenn Sie einen der Werte der eingebauten Konvertierungen ändern möchten, wird empfohlen, dass Sie zuerst die Konvertierung entfernen und sie dann wieder hinzufügen anstatt sie zu überschreiben. Dadurch wird sichergestellt, dass alle Daten wie in 9.7 korrekt entfernt werden. es hat keine spezifizierte Ausgabe/Handhabung dessen, was passiert, wenn ein Artikel zweimal aufgelistet wird.

## Addition

```zenscript
mods.mekanism.GasConversion.register(Igredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Entfernen

```zenscript
mods.mekanism.GasConversion.unregister(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Alle Konversionen werden entfernt

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```
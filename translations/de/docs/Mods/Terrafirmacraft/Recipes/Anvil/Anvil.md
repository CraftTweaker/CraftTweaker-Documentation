# Amboss

## Paket
```zenscript
importieren Sie mods.terrafirmacraft.Amboss;
```

## Addition

```zenscript
Anvil.addRecipe(String RegistryName, IIngredient Input, IItemStack Output, int minTier, String skillType, String... forgeRules);
```
- Eingabe kann nicht gestapelt werden. Anhänge akzeptieren nur einen Artikel pro Slot.
- die Eingabe muss vergessen sein (bitte lesen Sie [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) um die Schmiedefähigkeit zu einem Element zu registrieren).
- Stufen sind 0 = Stein, 1 = Kupfer, 2 = Bronze, 3 = Schmiedeeisen, 4 = Stahl, 5 = Schwarzer Stahl und 6 = Roter /Blauer Stahl.
- Fähigkeitstyp ist die Kategorie der Fähigkeiten, zu der die Schmiede beitragen sollte. Gültige Einträge sind `General`, `Werkzeuge`, `Waffen`, `Rüstung`oder null. Wenn der Fertigkeitstyp `Werkzeuge ist`, `Waffen`, oder `Rüstung` dann wird der Fertigkeitsbonus auf das Item angewendet.
- Ein Rezept muss 1, 2 oder 3 Regeln haben. Regeln bestehen aus einem Typ (`HIT`, `DRAW`, `PUNCH`, `BENDEN`, `UPSET`, oder `SHRINK`), gefolgt von einer Bestellung (`JEDE`, `NOT_LAST`, `LAST`, `SECOND_LAST`, `THIRD_LAST`), getrennt durch einen Unterstrich. Zum Beispiel `HIT_ANY`, `DRAW_SECOND_LAST`und `UPSET_NOT_LAST` sind gültige Regelnamen.

## Entfernen

```zenscript
Anvil.removeRecipe(IItemStack Ausgabe);
Anvil.removeRecipe(String RegistryName);
```
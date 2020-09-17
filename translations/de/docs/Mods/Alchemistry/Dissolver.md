# Dissolver

## Paket
`mods.alchemistry.Dissolver`

## Methoden
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** - Die Eingabe des Rezeptes.
- **boolesche relative Wahrscheinlichkeit** - Wahrscheinlichkeitsberechnung Boolean
- **Int Rollen** - Möglichkeit von Rollen
- **probabilityGroups** - An array of arrays with an double followed by any # of [IItemStack](/Vanilla/Items/IItemStack/)s. The double refers to the probability for its group. Das Doppelte bezieht sich auf die Wahrscheinlichkeit für seine Gruppe.

## Addition
```zenscript
mods.alchemistry.Dissolver.addRecipe(IIngrediente Eingabe, boolean relativeProbability, int rolls, Object[][] probabilityGroups);
mods.alchemistry.Dissolver.addRecipe(<minecraft:dye:9>, falsch, 5,
[[10, <minecraft:stone>], 
 [20, <minecraft:sand>,<minecraft:iron_ore>]]);
```

## Entfernen
```zenscript
mods.alchemistry.Dissolver.removeRecipe(IZutateneingabe);
mods.alchemistry.Dissolver.removeRecipe(<minecraft:ender_pearl>);

mods.alchemistry.Dissolver.removeAllRezept();
```

# Notizen
Um die Entwicklung der Änderung bestehender Dissolver-Rezepte zu erleichtern, gibt es einen Befehl, einfach /dissolver der das Handwerksrezept für den Gegenstand abruft und in die Zwischenablage kopiert

Wenn die relative Wahrscheinlichkeit wahr ist, wird jede Wahrscheinlichkeit anhand der Summe aller Wahrscheinlichkeiten berechnet. In dem obigen Beispiel würde dies bedeuten, dass es eine Chance von 33,3% gibt, Stein pro Rolle und 66. % Chance, einen Sand und ein Eisenerz jede Rolle auszugeben.

Wenn die relative Wahrscheinlichkeit falsch ist, dann sind diese Zahlen absolute Prozentsätze, d.h. eine 10%ige Chance, Stein auszugeben, und eine 20%ige Chance, Sand und Eisenerz auszugeben (unabhängig davon, ob Stein geerntet wurde oder nicht). Gleitkommawahrscheinlichkeiten werden unterstützt, 4,5 würde also 4,5% bedeuten


### Klasse

```zenscript
importieren mods.roots.Ritual;
```

#### Methoden

```zenscript
modifyRitual(
  String-Name, ungültig // der Name des Rituals, dessen Zutaten Sie ändern möchten
  IIngredient[] Eingänge // eine Liste von fünf Zutaten (nicht mehr, nicht weniger)
);
```

* * *

### Beispiele

```zenscript
import mods.roots.Ritual;

// Ändert die Zutaten, die benötigt werden, um das Windwall-Ritual
durchzuführen. odifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```
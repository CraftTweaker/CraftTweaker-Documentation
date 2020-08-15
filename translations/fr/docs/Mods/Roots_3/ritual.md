### Classe

```zenscript
Importer mods.roots.Ritual ;
```

#### Méthodes

```zenscript
void modifyRitual(
  string name, // le nom du rituel dont vous souhaitez modifier les ingrédients
  IIngredient[] entrées // une liste de cinq ingrédients (plus jamais) pas de moins)
);
```

* * *

### Exemples

```zenscript
import mods.roots.Ritual;

// Modifie les ingrédients requis pour effectuer le rituel
du pare-vent. odifyRitual("rituel_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```
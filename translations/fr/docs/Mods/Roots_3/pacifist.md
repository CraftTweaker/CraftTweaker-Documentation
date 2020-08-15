### Classe

```zenscript
Importer mods.roots.Pacifist;
```

#### Méthodes

```zenscript
void addEntity(
  IEntityDefinition entity // l'entité à ajouter à la liste pacifist
);
```

* * *

```zenscript
void removeEntity(
  IEntityDefinition entity // l'entité à supprimer de la liste pacifist
);
```

* * *

### Exemples

```zenscript
import mods.roots.Pacifist;

// Ajoute un enderman en tant que créature pacifiste
Pacifist. ddEntity(<entity:minecraft:enderman>);

// Empêche les vaches de déclencher l'effet pacifisme
Pacifist.removeEntity(<entity:minecraft:cow>);
```
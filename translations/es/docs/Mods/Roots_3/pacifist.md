### Clase

```zenscript
importar mods.roots.► puño;
```

#### Métodos

```zenscript
void addEntity(
  IEntityDefinition entity // la entidad a agregar a la lista de pacifistas
);
```

* * *

```zenscript
void removeEntity(
  entidad IEntityDefinition // la entidad a remover de la lista de pacifistas
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.ATIS;

// Agrega a un enderman como una criatura pacifista
apuñalado. ddEntity(<entity:minecraft:enderman>);

// Evita que las vacas desencadenen el efecto pacifismo
pist.removeEntity(<entity:minecraft:cow>);
```
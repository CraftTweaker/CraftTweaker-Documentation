# IIsBuilder

Denotes anything that is a builder. What did you expect?

This class was added by a mod with mod-id `contenttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## Metodos
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| Parámetro        | Tipo   | Descripción                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | Cadena | The resource path to give this block |




# MCMaterial

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Interfaces implementadas
MCMaterial implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### bloquesMovimiento

Devuelve si este material se considera sólido o no

Tipo de retorno: booleano

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Obtiene el índice de color del bloque. Este es el mismo color utilizado por los mapas de vainilla para representar este bloque.

Tipo de retorno: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### es inflamable

Devuelve si el bloque puede quemar o no.

Tipo de retorno: booleano

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Devuelve si los bloques de estos materiales son líquidos.

Tipo de retorno: booleano

```zenscript
myMCMaterial.isLiquid();
```

### es opaco

Indique si el material es opaco

Tipo de retorno: booleano

```zenscript
myMCMaterial.isOpaque();
```

### es reemplazable

Devuelve si el material puede ser reemplazado por otros bloques cuando se coloca - por ejemplo, nieve, cepas y hierba alta.

Tipo de retorno: booleano

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Devuelve verdadero si el bloque es considerado sólido. Esto es cierto por defecto.

Tipo de retorno: booleano

```zenscript
myMCMaterial.isSolid();
```


## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |


# MCMaterial

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Métodos
### bloquesMovimiento

Devuelve si este material se considera sólido o no

Devuelve booleano

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Obtiene el índice de color del bloque. Este es el mismo color utilizado por los mapas de vainilla para representar este bloque.

Devuelve [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### es inflamable

Devuelve si el bloque puede quemar o no.

Devuelve booleano

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Devuelve si los bloques de estos materiales son líquidos.

Devuelve booleano

```zenscript
myMCMaterial.isLiquid();
```

### es opaco

Indique si el material es opaco

Devuelve booleano

```zenscript
myMCMaterial.isOpaque();
```

### es reemplazable

Devuelve si el material puede ser reemplazado por otros bloques cuando se coloca - por ejemplo, nieve, cepas y hierba alta.

Devuelve booleano

```zenscript
myMCMaterial.isReplaceable();
```

### isSolid

Devuelve verdadero si el bloque es considerado sólido. Esto es cierto por defecto.

Devuelve booleano

```zenscript
myMCMaterial.isSolid();
```

### no es necesario

Devuelve verdadero si el material puede ser recolectado sin una herramienta (o con la herramienta equivocada)

Devuelve booleano

```zenscript
myMCMaterial.isToolNot();
```



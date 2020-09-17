# MCBlock

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.MCBlock
```

## Métodos
### puede aparecer en el bloque

Devuelve booleano

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Devuelve [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Propiedades

| Nombre         | Tipo   | Tiene Obtén | Tiene Setter |
| -------------- | ------ | ----------- | ------------ |
| lootTable      | Cadena | verdad      | falso        |
| translationKey | Cadena | verdad      | falso        |

## Casters

| Tipo de resultado | Es implícito |
| ----------------- | ------------ |
| Cadena            | falso        |


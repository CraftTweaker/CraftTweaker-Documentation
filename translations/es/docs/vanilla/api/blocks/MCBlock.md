# MCBlock

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.block.MCBlock
```

## Métodos
### puede aparecer en el bloque

Returns boolean

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Returns [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Propiedades

| Nombre         | Tipo   | Has Getter | Has Setter |
| -------------- | ------ | ---------- | ---------- |
| lootTable      | Cadena | verdad     | falso      |
| translationKey | Cadena | verdad     | falso      |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| Cadena      | falso       |


# PartDataPiece

Una pieza de datos de pieza puede ser añadida a un [Tipo de pieza](/Mods/ContentTweaker/Materials/Parts/PartType/) para poder añadir algo [MaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) a [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) creado con [Partes](/Mods/ContentTweaker/Materials/Parts/Part/) que son de este [PartType](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.PartDataPiece;`

## Recuperando tal objeto

Puedes obtener una Lista de un [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) DataPieces usando `getData()` en una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/).

Alternativamente, puede registrar una nueva PartDataPiece usando el [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(String name, boolean required)
```

Parámetros:

- Nombre de la cadena: el nuevo nombre de PartDataPiece
- booleano requerido: ¿Está la PartDataPiece obligada a estar presente en un [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) para registrarla?

## Métodos

Puede recuperar la siguiente información de un tipo de PartType:

| Método         | Tipo de devolución |
| -------------- | ------------------ |
| getName()      | cadena             |
| es requerido() | cadena             |
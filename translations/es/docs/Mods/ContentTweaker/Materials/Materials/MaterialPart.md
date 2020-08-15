# Parte del material

Un objeto MaterialPart es, como su nombre sugiere una combinación de un [Material](/Mods/ContentTweaker/Materials/Materials/Material/) y una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/), tal como `equipo de platino`.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.MaterialPart;`

## Recuperando tal objeto

Hay varias maneras de recuperar tal objeto, ya sea como una lista o como un solo objeto.

Objeto único:

- Usando el mandador de bloques de material [](/Mods/ContentTweaker/Materials/Brackets/Bracket_MaterialPart/)
- Usando el método de registro de un [Material](/Mods/ContentTweaker/Materials/Materials/Material/)
- Using a [Part's](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterial Method

Lista:

- Usando el método de registro de [MaterialSystem's](/Mods/ContentTweaker/Materials/MaterialSystem/) registerPartsForMaterial
- Usando el Método registerParts de un [Material](/Mods/ContentTweaker/Materials/Materials/Material/)
- Using a [Part's](/Mods/ContentTweaker/Materials/Parts/Part/) registerToMaterials Method

## Campos

Puedes recuperar la siguiente información de una Partes de Material:

| Método               | Tipo de devolución                                                              |
| -------------------- | ------------------------------------------------------------------------------- |
| getName()            | cadena                                                                          |
| getLocalizedName()   | cadena                                                                          |
| hasEffect()          | boolean                                                                         |
| hasOverlay()         | boolean                                                                         |
| getMaterial()        | [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)                 |
| getPart()            | [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)                             |
| getItemStack()       | [IItemStack](/Vanilla/Items/IItemStack/)                                        |
| getTextureLocation() | cadena                                                                          |
| getCTColor()         | [Color](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                        |
| getColor()           | int                                                                             |
| isColorized()        | boolean                                                                         |
| getData()            | [IMaterialPartData](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) |

También puede configurar la siguiente información de una PartaMaterialPart:

| Método                              | Parámetro                  | Descripción                                                                                                |
| ----------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| setColorizado(colorado)             | booleano coloreado         | Establece si el código de color del elemento es aplicado                                                   |
| setTextureLocation(textureLocation) | textureUbicación de cadena | Establece la ruta de textura del objeto. Por ejemplo, si quieres que un equipo se vea diferente del resto. |
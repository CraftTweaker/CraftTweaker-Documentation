# Sistema de material

El MaterialSystem se utiliza para crear nuevos o recuperar materiales existentes desde dentro de CT.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### Crear

```zenscript
crear un tipo de socio (nombre de identificación, IRegisterMaterialPart registerMaterialPart)
```

Parámetros necesarios:

- Nombre de la cadena: Nombre del tipo de pieza → p. ej. "dense_gear"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) registerMaterialPart → Una función que gestiona cómo se crearán las partes del material.

### Recuperar

```zenscript
getPartType(String name);
```

Parámetros necesarios:

- String name: The part type's name → e.g. "gear" For a list of all available part types check [the part type page](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)

### Crear

A diferencia del tipo de grupo, no puede crear directamente un Material, en su lugar necesita utilizar un MaterialBuilder. Consulta la entrada [MaterialBuilder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) para obtener información sobre qué hacer exactamente con estos.

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Recuperar

```zenscript
getMaterial(String name);
```

Parámetros necesarios:

- Nombre de cadena: Nombre del material → p. ej. "Platino"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### Crear

A diferencia del PartType, no puedes crear directamente una Parte, en su lugar necesitas usar un PartBuilder. Consulta la entrada de [Parte](/Mods/ContentTweaker/Materials/Parts/Part/) para obtener información sobre qué hacer exactamente con estos.

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### Recuperar

```zenscript
getPart(String name);
```

Parámetros necesarios:

- Nombre de cadena: el nombre de la pieza

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### Crear

    createPartDataPiece(String name, boolean required)
    

Parámetros necesarios:

- Nombre de la cadena: el nombre de la pieza de datos
- booleano requerido: ¿Es necesaria la pieza de datos?

## Registrar múltiples MaterialParts

Aunque también puedes hacerlo usando la propia funcionalidad de [Material](/Mods/ContentTweaker/Materials/Materials/Material/) , este método te permite registrar [Partes](/Mods/ContentTweaker/Materials/Parts/Part/) para un Material dado

```zenscript
registerPartsForMaterial(Material material, String[] partNames);
```

Parámetros necesarios:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/) material: El material del que deben estar hechas las partes registradas
- PartNames de la cadena[]: Los nombres de las partes que deben estar registradas → ej. ["enganche", "lingot"]

## Recuperar cosas ya registradas:

Puede utilizar estos métodos para recuperar un mapa usando cadenas como claves y el objeto como valores:

| Nombre del método  | Tipo de devolución                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`Mapa<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Mapa<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Mapa<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Mapa<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("nombre"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]
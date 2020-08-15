# Tipo de pieza

Un PartType puede ser visto como un grupo en el que caben varias piezas, por ejemplo, `artículos`

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.PartType;`

## Recuperando tal objeto

Puede utilizar el [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) para recuperar un objeto de PartType existente o crear uno completamente nuevo.  
Echa un vistazo a la siguiente entrada para aprender a crear un nuevo tipo de grupo.

<details>
    <summary>Se preregistran los siguientes tipos:</summary>
    <ul>
        <li>objeto</li>
        <li>bloque</li>
        <li>mineral</li>
        <li>fluido</li>
        <li>armadura</li>
        <li>minecart</li>
    </ul>
</details>

## Métodos

Puede recuperar la siguiente información de un tipo de PartType:

| Método    | Tipo de devolución |
| --------- | ------------------ |
| getName() | cadena             |

Puede establecer la siguiente información en un Tipo de Part:

| Método                           | Tipo de parámetro                                                             |
| -------------------------------- | ----------------------------------------------------------------------------- |
| setData(IPartDataPiece[] datos); | [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)[] datos |

## Crear un nuevo PartType

Si por cualquier razón necesitas registrar un nuevo PartType, necesitarás saber dos cosas:

- Qué nombre tendrá el nuevo partType
- Cómo se registrarán [MaterialParts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) creados a partir de [Partes](/Mods/ContentTweaker/Materials/Parts/Part/) de este tipo

La primera es simple, es una cadena.  
La segunda es un poco más complicada, es una función que toma una entrada de MaterialParte:

```zenscript
#loader contenttweaker


import mods.contenttweaker.MaterialSystem;

val ourType = MaterialSystem. reatePartType("cool_type", function(materialPart){

});

//Use el nuevo tipo para crear una Parte
val ourPart = mods. ontenttweaker.MaterialSystem.getPartBuilder().setName("cool_part").setPartType(ourType).build();

//Crear un nuevo Material y registrar la parte recién creada.
val ourMaterial = MaterialSystem.getMaterialBuilder().setName("Lawrencium").setColor(15426660).build();
ourMaterial.registerPart(ourPart);

```
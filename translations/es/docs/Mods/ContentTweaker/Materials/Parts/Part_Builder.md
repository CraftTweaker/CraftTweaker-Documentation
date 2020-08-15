# Constructor de partes

Si quieres construir una [Parte](/Mods/ContentTweaker/Materials/Parts/Part/), ¡necesitarás un Constructor de Partes!  
¿No suena tan difícil, ¿verdad?

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.PartBuilder;`

## Recuperando tal objeto

Puedes recuperar un nuevo y claro Constructor usando el paquete [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Establecer las propiedades de la pieza

Puede establecer estas propiedades

| Método                                    | Parámetro                                                       |
| ----------------------------------------- | --------------------------------------------------------------- |
| setHasOverlay(hasOverlay)                 | boolean hasOverlay                                              |
| setName(nombre)                           | nombre de cadena                                                |
| setPartType(partType)                     | [Tipo de pieza](/Mods/ContentTweaker/Materials/Parts/PartType/) |
| setOreDictName(prefix)                    | prefijo de cadena                                               |
| establecer nombres OreDictados (prefijos) | cadena... prefixes                                              |

Todos estos métodos hacen dos cosas: en primer lugar, cambian la Propiedad del constructor, en segundo lugar, devuelven el constructor modificado.  
Puede ver en los scripts de ejemplo abajo lo que esto significa.

## Construir el material en realidad

Antes de poder construir tu material, necesitas construirlo:

```zenscript
pBuilder.build();
```

Esto devuelve un objeto [Parte](/Mods/ContentTweaker/Materials/Parts/Part/).

## Ejemplo de script

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item").setOreDictName(").build();
```

## Información destacada

### Localización de las Partes Materiales

Los elementos que crees con tu nueva parte generalmente se llamarán `contenttweaker.part. artname`  
Si quieres que tu elemento incluya el nombre del material, necesitarás traducirlo, preferiblemente en los archivos de idioma de CoT que se pueden encontrar en `Recursos/contenttweaker/lang`.  
En lugar del nombre del material que escribes `%s`, así que nombrar los engranajes densos que se crean arriba se verían así:

    contenttweaker.part.dense_gear=Dense %s Equipo
    contenttweaker.part.dense_ingot=Dense %s Lingote
    

### Agregando una textura

Los objetos que creas con tu nueva parte te parecerán un poco arriesgados.  
Si quieres que tu parte tenga un icono específico, tendrás que añadir un nombre de partamento `. ng` archivo a `Recursos/contenttweaker/textures/items`.  
Por lo tanto, dar a las densas engranajes una textura requeriría que agregáramos un archivo llamado `gear_dense. ng` a esa carpeta.
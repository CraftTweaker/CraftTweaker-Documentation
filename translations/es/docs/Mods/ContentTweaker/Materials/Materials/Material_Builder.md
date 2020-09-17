# Constructor de material

Si quieres construir un [material](/Mods/ContentTweaker/Materials/Materials/Material/), necesitarás un Constructor de Material  
¿No suena tan difícil, ¿verdad?

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.MaterialBuilder;`

## Recuperando tal objeto

Puedes recuperar un nuevo y claro Constructor usando el paquete [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Establecer las propiedades del material

Puede establecer estas propiedades

| Método                  | Parámetro                                                        |
| ----------------------- | ---------------------------------------------------------------- |
| setName(nombre)         | nombre de cadena                                                 |
| setColor(color)         | color int                                                        |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | hasEfecto booleano                                               |

Todos estos métodos hacen dos cosas: en primer lugar, cambian la Propiedad del constructor, en segundo lugar, devuelven el constructor modificado.  
Puede ver en los scripts de ejemplo abajo lo que esto significa.

## Construir el material en realidad

Antes de poder construir tu material, necesitas construirlo:

```zenscript
mBuilder.build();
```

Devuelve un objeto [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/).

## Ejemplo de script

```zenscript
import mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```
# Fluido

¡Esto te permite añadir fluidos al juego!

## Crear la representación de fluidos

Antes de añadir el fluido, necesita crear una representación de fluidos que le permita establecer las propiedades del fluido que desea añadir.  
Aquí es donde entra la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) en:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Importar el paquete de representación

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.Fluid;`

## Propiedades de Zeng

Para obtener/establecer las propiedades puede utilizar ZenGetters/Setters o los métodos ZenMethods:

```zenscript
//property name: density
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Nombre de Propiedad | Tipo                                                                                     | Requerido | Valor por defecto                | Descripción/Notas                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------- | --------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| unlocalizedName     | cadena                                                                                   | Sí        |                                  | Nombre, debe ser minúsculas                                                             |
| densidad            | int                                                                                      | Nu        | 1000                             | Qué tan rápido se puede caminar en el fluido                                            |
| gaseoso             | boolean                                                                                  | Nu        | falso                            | ¿El líquido es gaseoso (fluye hacia arriba en lugar de hacia abajo)?                    |
| luminosidad         | int                                                                                      | Nu        | 0                                | El nivel de luz emitido por el fluido                                                   |
| temperatura         | int                                                                                      | Nu        | 300                              | Temperatura del fluido                                                                  |
| color               | int                                                                                      | Sí        |                                  | Código de color del fluido                                                              |
| colorear            | boolean                                                                                  | Nu        | verdad                           | ¿Se aplica el código de color del fluido?                                               |
| rareza              | cadena                                                                                   | Nu        | COMÓN                            | Cuán raro es un fluido, determina el color ToolTip ("COMON", "UNCOMON", "RARE", "EPIC") |
| viscosidad          | int                                                                                      | Nu        | 1000                             | Qué tan rápido se dispara el fluido                                                     |
| sonidoFillSound     | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nu        | Itinerario                       | El sonido reproducido cuando el fluido es recogido con un cubo                          |
| sonido vacío        | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Nu        | Construcción de malla            | El sonido reproducido cuando se coloca el fluido                                        |
| vaporizar           | boolean                                                                                  | Nu        | falso                            | ¿Vaporizan cuando se coloca en el asunto?                                               |
| también ubicación   | cadena                                                                                   | Nu        | contenttweaker:fluids/fluid      | La ubicación donde encontrar la textura para el líquido todavía                         |
| ubicacin de flujo   | cadena                                                                                   | Nu        | contenttweaker:fluids/fluid_flow | La posición donde encontrar la textura para el fluido fluido                            |
| material            | [Definición inmaterial](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)   | Nu        | AGUA                             | El material del que está hecho el fluido                                                |

## Registrando el fluido

¡Necesitas llamar a este método para registrar el fluido en el juego!  
¡De lo contrario no pasará nada!  
Después de haber llamado a esta función, no se puede anular el registro del fluido ni cambiar ninguna de sus propiedades!

```zenscript
fluid.register();
```

## Ejemplo de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("F69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Localizar el fluido

Necesitará añadir `fluid.fluidName = Localized Name` a los archivos de idioma respondentes. Alternativamente, puedes usar la función de localización [](/Vanilla/Game/IGame/)de CraftTweaker, ¡aunque se recomienda usar los archivos de idioma!
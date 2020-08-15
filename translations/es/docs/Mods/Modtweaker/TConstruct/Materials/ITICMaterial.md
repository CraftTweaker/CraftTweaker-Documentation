# ITICMaterial

El IMaterial de un Construido de un Tinker (no se debe confundir con [IMaterial del Contenido](/Mods/ContentTweaker/Materials/Materials/Material/)) es de lo que puede estar hecha la herramienta de construcción de un Tinker.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar modtweaker.tconstruct.ITICMaterial;`

## Recuperando tal objeto

Puede recuperar un objeto ITICMaterial usando el controlador de soporte [ITICMaterial](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Campos

Puedes obtener/establecer los siguientes campos:

| ZenGetter                    | Ajuste                       | Devuelve/Tipo de Setter                                                                | Descripción                                                                            |
| ---------------------------- | ---------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| getName                      |                              | cadena                                                                                 | Nombre del material                                                                    |
| definición                   |                              | [Definición inmaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | La definición del material                                                             |
| cabezal de durabilidad       | cabezal de durabilidad       | int                                                                                    | Una Toolhead fabricada con este material tiene esta durabilidad                        |
| miningSpeedHead              | miningSpeedHead              | flotante                                                                               | Una Toolhead fabricada con este material tiene esta velocidad de extracción            |
| Cabeza de ataque             | Cabeza de ataque             | flotante                                                                               | Una Toolhead fabricada con este material tiene este daño de ataque                     |
| harvestLevelHead             | harvestLevelHead             | int                                                                                    | Una Toolhead fabricada con este material tiene este nivel de cosecha                   |
| durabilidad                  | durabilidad                  | int                                                                                    | Una herramienta fabricada con este material tiene esta durabilidad                     |
| manipulador                  | manipulador                  | flotante                                                                               | Una herramienta fabricada con este material tiene este modificador de durabilidad      |
| durabilidad extra            | durabilidad extra            | int                                                                                    | Piezas de herramientas extra fabricadas con este material tienen esta durabilidad base |
| modificador de flecha        | modificador de flecha        | flotante                                                                               | Las flechas hechas con este material tienen este modificador de durabilidad            |
| bonus de flecha              | bonus de flecha              | int                                                                                    | Las flechas hechas con este material tienen esta munición adicional                    |
| fletchingModifier            | fletchingModifier            | flotante                                                                               | Fletchungs hechos con este material tienen este modificador de durabilidad             |
| precisión fletchingprecision | precisión fletchingprecision | flotante                                                                               | Fletchungs hechos con este material proporcionan esta precisión                        |

## Métodos

- coincidencias booleanas(ITICMaterial otro); → devuelve si el material dado es igual a `otro`
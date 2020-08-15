# CTAspectStack

Un CTAspectStack es un [CTAspect](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) combinado con una cantidad que muestra cuántos puntos de aspecto estará hecha la pila.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar thaumcraft.aspect.CTAspectStack;`

## Recuperando tal objeto

Puedes recuperar un objeto CTAspectStack desde el objeto [CTAspectStack Bracket Handler](/Mods/Modtweaker/Thaumcraft/Brackets/Bracket_Aspect/):

```zenscript
val aspect = <aspect:ignis>;
```

## ZenGetters

| Nombre  | Tipo                                                       |
| ------- | ---------------------------------------------------------- |
| monto   | int                                                        |
| interno | [CTAspecto](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspect/) |

## Establecer la cantidad

```zenscript
//Ellos hacen lo mismo, ambos devuelven un nuevo aspecto del val CTAspectStack
= <aspect:ignis> * 10;

val aspect1 = <aspect:ignis>.setAmount(10);
```
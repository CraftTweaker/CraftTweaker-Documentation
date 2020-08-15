# CTAspecto

Un CTAspect es el aspecto subyacente a una [Pila de Aspecto](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), como una [Definición de Item](/Vanilla/Items/IItemDefinition/) subyace a una [Pila de Item](/Vanilla/Items/IItemStack/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar thaumcraft.aspect.CTAspect;`

## Recuperando tal objeto

Puedes recuperar un objeto CTAspect de un objeto [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/):

```zenscript
val aspect = <aspect:ignis>.internal;
```

## ZenGetters y ZenSetters

| Nombre         | isGetter | es Setter | Tipo   |
| -------------- | -------- | --------- | ------ |
| chatColo**u**r | ✔        | ✔         | cadena |
| nombre         | ✔        |           | cadena |
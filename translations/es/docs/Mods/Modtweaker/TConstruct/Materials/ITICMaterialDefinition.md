# Definición ITICMaterial

Un ITICMaterialDefinition es una definición de [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) .  
Puede usar esto para recuperar alguna información sobre el objeto [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/).

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar modtweaker.tconstruct.ITICMaterialDefinition;`

## Recuperando tal objeto

Puede recuperar una Definición ITICMaterialDefinición de un [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `definición` ZenGetter:

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetters

| ZenGetter          | Tipo de devolución | Descripción                    |
| ------------------ | ------------------ | ------------------------------ |
| nombre             | cadena             | Nombre interno del material    |
| nombre de pantalla | cadena             | Nombre localizado del material |
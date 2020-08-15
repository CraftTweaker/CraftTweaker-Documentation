# ITICMaterialDefinition

An ITICMaterialDefinition is an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) definition.  
You can use this to retrieve some information on the [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) object.

## Importando el paquete

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterialDefinition;`

## Recuperando tal objeto

You can retrieve an ITICMaterialDefinition from an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `definition` ZenGetter:

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetters

| ZenGetter   | Tipo de devolución | Descripción                   |
| ----------- | ------------------ | ----------------------------- |
| nombre      | cadena             | The material's internal name  |
| displayName | cadena             | The material's localized name |
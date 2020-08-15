# ITICMaterialDefinition

An ITICMaterialDefinition is an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) definition.  
You can use this to retrieve some information on the [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) object.

## Importation du paquet

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import modtweaker.tconstruct.ITICMaterialDefinition;`

## Récupération d'un tel objet

You can retrieve an ITICMaterialDefinition from an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `definition` ZenGetter:

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetters

| ZenGetter   | Type de retour       | Libellé                       |
| ----------- | -------------------- | ----------------------------- |
| Nom         | chaîne de caractères | The material's internal name  |
| displayName | chaîne de caractères | The material's localized name |
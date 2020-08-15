# ITICMaterialdefinition

Eine ITICMaterialDefinition ist die</a> Definition von ITICMaterial.  
Sie können damit einige Informationen über das [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) Objekt abrufen.</p> 

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren modtweaker.tconstruct.ITICMaterialDefinition;`

## Ein solches Objekt wird abgerufen

Sie können eine ITICMaterialDefinition aus der [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `Definition` ZenGetter abrufen:

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetter

| ZenGetter   | Rückgabetyp | Beschreibung                        |
| ----------- | ----------- | ----------------------------------- |
| name        | string      | Der interne Name des Materials      |
| displayName | string      | Der lokalisierte Name des Materials |
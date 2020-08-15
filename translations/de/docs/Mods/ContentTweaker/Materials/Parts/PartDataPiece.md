# PartDataPiece

Ein Bauteildatenteil kann einem [Bauteiltyp](/Mods/ContentTweaker/Materials/Parts/PartType/) hinzugefügt werden, um einige [Bauteile](/Mods/ContentTweaker/Materials/Materials/MaterialPartData/) zu [Bauteile](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) hinzufügen zu können, die mit [Teilen](/Mods/ContentTweaker/Materials/Parts/Part/) erstellt wurden, die von diesem [Bauteiltyp](/Mods/ContentTweaker/Materials/Parts/PartType/) sind.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.PartDataPiece;`

## Ein solches Objekt wird abgerufen

Sie können eine Liste von [Teilen](/Mods/ContentTweaker/Materials/Parts/Part/) Datenteile mit `getData()` auf einem [Teil](/Mods/ContentTweaker/Materials/Parts/Part/) erhalten.

Alternatively, you can register a new PartDataPiece using the [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
mods.contenttweaker.MaterialSystem.createPartDataPiece(Stringname, Boolean erforderlich)
```

Parameter:

- String-Name: Der Name des neuen PartDataPiece
- boolean benötigt: Muss das PartDataPiece auf einem [Materialteile](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) vorhanden sein, um es zu registrieren?

## ZenMethoden

Sie können die folgenden Informationen von einem PartType abrufen:

| ZenMethode   | Rückgabetyp |
| ------------ | ----------- |
| getName()    | string      |
| isRequired() | string      |
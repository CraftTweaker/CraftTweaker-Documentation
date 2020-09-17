# Materialsystem

Das Materialsystem wird verwendet, um neue Materialien zu erstellen oder vorhandene Materialien aus CT abzurufen.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.MaterialSystem;`

## [IPartType](/Mods/ContentTweaker/Materials/Parts/PartType/)

### Anlegen

```zenscript
createPartType(String Name, IRegisterMaterialPart RegisterMaterialTeil)
```

Erforderliche Parameter:

- Zeichenkettenname: Name des Bauteiltyps → z.B. "dense_getriebe"
- [IRegisterMaterialPart](/Mods/ContentTweaker/Materials/Materials/Functions/IRegisterMaterialPart/) registerMaterialPart → Eine Funktion, die die Erstellung der Materialteile regelt.

### Abrufen

```zenscript
getPartType(String name);
```

Erforderliche Parameter:

- String name: The part type's name → e.g. "gear" For a list of all available part types check [the part type page](/Mods/ContentTweaker/Materials/Parts/PartType/).

## [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)

### Anlegen

Im Gegensatz zum PartType können Sie kein Material direkt erstellen, sondern Sie müssen einen MaterialBuilder verwenden. Prüfen Sie den [MaterialBuilder Eintrag](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) für Informationen darüber, was genau damit zu tun ist.

```zenscript
val MB MaterialSystem.getMaterialBuilder();
MB.setName("Urubuntium");
MB.setColor(0);
MB.setHasEffect(false);
var builtMaterial = MB.build();
```

### Abrufen

```zenscript
getMaterial(String name);
```

Erforderliche Parameter:

- Zeichenkettenname: Der Name des Materials → z.B. "Platinum"

## [IPart](/Mods/ContentTweaker/Materials/Parts/Part/)

### Anlegen

Im Gegensatz zum PartType können Sie kein Ersatzteil direkt erstellen, sondern Sie müssen einen PartBuilder verwenden. Im [Artikeleintrag](/Mods/ContentTweaker/Materials/Parts/Part/) finden Sie Informationen darüber, was genau damit zu tun ist.

```zenscript
val PB = MaterialSystem.getPartBuilder();
```

### Abrufen

```zenscript
getPart(String name);
```

Erforderliche Parameter:

- String-Name: Der Name des Teiles

## [IPartDataPiece](/Mods/ContentTweaker/Materials/Parts/PartDataPiece/)

### Anlegen

    createPartDataPiece(String Name, Boolean erforderlich)
    

Erforderliche Parameter:

- String-Name: Der Name des Datenteils
- boolean benötigt: Ist das Datenteil erforderlich?

## Mehrere Materialteile registrieren

Even though you can also do this using the [Material's](/Mods/ContentTweaker/Materials/Materials/Material/) own functionality, this Method allows you to register [Parts](/Mods/ContentTweaker/Materials/Parts/Part/) for a given Material

```zenscript
registerPartsForMaterial(Material Material, String[] Ersatzteile);
```

Erforderliche Parameter:

- [Material](/Mods/ContentTweaker/Materials/Materials/Material/) Material: Das Material, aus dem die registrierten Teile hergestellt werden sollen
- String[] Teilnamen: Die Namen der zu registrierenden Teile → z.B. ["Getriebe", "ingot"]

## Bereits registrierte Sachen abrufen:

Sie können diese Methoden verwenden, um eine Karte mit Strings als Schlüssel und das Objekt als Werte abzurufen:

| Methodenname       | Rückgabetyp                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| getMaterialParts() | [`Karte<String, IMaterialPart>`](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) |
| getMaterials()     | [`Karte<String, IMaterial>`](/Mods/ContentTweaker/Materials/Materials/Material/)         |
| getParts()         | [`Karte<String, IPart>`](/Mods/ContentTweaker/Materials/Parts/Part/)                     |
| getPartType()      | [`Karte<String, IPartType>`](/Mods/ContentTweaker/Materials/Parts/PartType/)             |

    import mods.contenttweaker.MaterialPart;
    
    val part = MaterialSystem.getMaterialPart("name"); //as MaterialPart
    
    val partMap = MaterialSystem.getMaterialPartsByRegex(".*"); //as MaterialPart[string]
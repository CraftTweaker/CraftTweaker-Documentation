# Material

Ein Material ist das, aus dem ein Gegenstand besteht, zum Beispiel aus Platinum.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`mods.contenttweaker importieren.Material;`

## Ein solches Objekt wird abgerufen

Sie können entweder ein vorhandenes Material mit dem [Materialsystem](/Mods/ContentTweaker/Materials/MaterialSystem/) abrufen oder ein völlig neues mit dem [Materialbauer](/Mods/ContentTweaker/Materials/Materials/Material_Builder/) erstellen

## Felder

Sie können folgende Informationen von einem Material abrufen:

| ZenMethode           | Rückgabetyp | Beschreibung                                            |
| -------------------- | ----------- | ------------------------------------------------------- |
| getName()            | string      | Gibt den Materialnamen zurück                           |
| getColor()           | int         | Gibt die Farbe des Materials zurück                     |
| isHasEffect()        | boolean     | Gibt zurück, wenn das Material den glühenden Effekt hat |
| getUnlocalizedName() | string      | Gibt den unlokalisierten Materialnamen zurück           |

## [Materialteile registrieren](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Sie können entweder Teile mit dem [Bauteil Objekt](/Mods/ContentTweaker/Materials/Parts/Part/) oder mit dem Namenstring registrieren.  
Sie können entweder einen Teil oder mehrere Teile gleichzeitig registrieren.  
Sie haben also insgesamt 4 Möglichkeiten:

```zenscript
registerParts(String[] Teilnamen);
registerParts(ITeil[] Teile);


registerPart(String partName);
registerPart(IPart Teil);
```

Die RegisterErsatzteilmethoden geben ein einziges [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Objekt zurück.  
Die Registerteile Methoden geben eine [Materialteil](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) Liste zurück.
# Hühnervertretung

Die ChickenRepresentation ist eine Vorlage dafür, was dein Huhn tun wird.  
Standardmäßig wird es nur existieren und das Ei als Anfangsparameter anlegen.  
Du kannst dieses Verhalten ändern, um bessere Hühner zu ermöglichen, indem du die angegebenen Eigenschaften änderst.

## Diese Klasse importieren

Möchten Sie die Klasse importieren? Hier geht's:

```zenscript
mods.contenttweaker.Huhn importieren;
```

## Registrierung des Hühners

Nachdem Sie Ihre ChickenRepresentation so eingestellt haben, wie Sie sie wollen, ist es der wichtigste Teil, sie zu registrieren.  
Seien Sie jedoch vorsichtig, da alle Änderungen, die nach der Registrierung an dieser Vorlage vorgenommen werden, immer noch wirksam werden so sollten Sie eine neue Huhn Representation für jedes gewünschte Huhn erstellen.

## Zeneigenschaften

Du kannst den aktuellen Wert der Eigenschaften entweder durch `Objekt ändern oder erhalten. ame = newValue` oder mittels der Methoden `object.setName(newValue);`

Beispiel:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| name             | typ                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------- |
| name             | string                                                                                  |
| layItem          | [IItemStack](/Vanilla/Items/IItemStack/)                                                |
| dropItem         | [IItemStack](/Vanilla/Items/IItemStack/)                                                |
| Hintergrundfarbe | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                              |
| foregroundColor  | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                              |
| texture-Standort | [CTResource-Standort](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawntyp         | string                                                                                  |
| layKoeffizient   | float                                                                                   |
| parentOne        | [CTResource-Standort](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo        | [CTResource-Standort](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
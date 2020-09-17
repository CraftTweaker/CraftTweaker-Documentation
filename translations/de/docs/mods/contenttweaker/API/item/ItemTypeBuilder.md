# ItemTypeBuilder

Bezeichnet einen speziellen Builder, der für den Bau spezieller Gegenstandstypen verwendet wird. Wird in [mods.contenttweaker.item verwendet.ItemTypeBuilder#withType](/mods/contenttweaker/API/item/ItemTypeBuilder/#withtype)

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.item.ItemTypeBuilder
```

## Implementierte Schnittstellen
ItemTypeBuilder implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
neues ItemBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new ItemBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |




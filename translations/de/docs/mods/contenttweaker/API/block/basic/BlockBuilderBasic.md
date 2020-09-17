# BlockBuilderBasic

Dieser Builder erzeugt den Blocktyp, der standardmäßig in [mods.contenttweaker.block.basic verwendet wird. lockBuilderBasic#build](/mods/contenttweaker/API/block/basic/BlockBuilderBasic/#build) Dieser Builder bietet keine speziellen Eigenschaften zum Setzen an, du kannst ihn nur bauen.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.block.basic.BlockBuilderBasic
```

## Implementierte Schnittstellen
BlockBuilderBasic implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
neuer BlockBuilder().withType<ItemBuilderBasic>().build(resourceLocation as String);
new BlockBuilder().withType<ItemBuilderBasic>().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |




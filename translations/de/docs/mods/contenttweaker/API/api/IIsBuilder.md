# IIsBuilder

Bezeichnet alles, was ein Baumeister ist. Was haben Sie erwartet?

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |




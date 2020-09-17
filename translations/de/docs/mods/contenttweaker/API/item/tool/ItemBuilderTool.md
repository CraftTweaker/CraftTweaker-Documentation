# ItemBuilderTool

Ein spezieller Baumeister, mit dem du Items erstellen kannst, die als Werkzeuge verwendet werden können. Du solltest den maximalen Schaden des Gegenstands gesetzt haben, bevor du zu diesem Baumeister wechselst. <p> Hat spezielle Methoden, mit denen du das Minenlevel für mehrere Werkzeugtypen sowie den Angriffsschaden einstellen kannst.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.item.tool.ItemBuilderTool
```

## Implementierte Schnittstellen
ItemBuilderTool implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder)

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build(resourceLocation as String);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |


### ohne Angriffsschaden

Erlaubt es dir, den Angriffsschaden zu setzen, den du erhältst, wenn du diesen Gegenstand hältst

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(attackSchaden als float);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackDamage(2.0f);
```

| Parameter     | Type  | Beschreibung                    |
| ------------- | ----- | ------------------------------- |
| attackSchaden | float | Der zusätzliche Angriffsschaden |


### ohne Angriffsgeschwindigkeit

Erlaubt es dir, den Angriffsgeschwindigkeitsbonus zu setzen, den du beim Halten dieses Gegenstands erhältst.

 Gibt `diesen Builder zurück, der für Methodenketten verwendet wird.`

Rückgabetyp: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(attackSpeed als Doppel);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withAttackSpeed(2.0d);
```

| Parameter   | Type   | Beschreibung                |
| ----------- | ------ | --------------------------- |
| attackSpeed | double | Die Angriffsgeschwindigkeit |


### withDurabilityCostAttack

Erlaubt es dir, den Schaden, den dieser Gegenstand erhält, zu bestimmen, wenn du Feinde triffst. Standardmäßig ist dies `0`

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(durabilityCostAttack as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostAttack(5);
```

| Parameter               | Type | Beschreibung                                            |
| ----------------------- | ---- | ------------------------------------------------------- |
| langlebigkeitCostAttack | int  | Die Schadenspunkte, die dieser Gegenstand erhalten wird |


### withDurabilityCostMining

Erlaubt es dir, den Schaden, den dieser Gegenstand erhält, zu bestimmen, wenn du Blöcke abbaust. Standardmäßig ist dies `0`

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(durabilityCostMining as int);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withDurabilityCostMining(1);
```

| Parameter                 | Type | Beschreibung                                            |
| ------------------------- | ---- | ------------------------------------------------------- |
| langlebiges Kosten-Mining | int  | Die Schadenspunkte, die dieser Gegenstand erhalten wird |


### withToolType

Erlaubt Ihnen, diesem Werkzeug einen Werkzeugtyp hinzuzufügen. Du kannst auch den Typ, das Minenlevel und optional die Minengeschwindigkeit angeben, wenn dieser Typ getroffen wird.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.tool.ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool)

```zenscript
neuer ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(toolType as mods.contenttweaker.item.MCToolType, miningLevel as int, miningSpeed as float);
new ItemBuilder(). ithMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3);
new ItemBuilder().withMaxDamage(150).withType<ItemBuilderTool>().withToolType(<tooltype:shovel>, 3, 2.0f);
```

| Parameter   | Type                                                                            | Beschreibung                                                         | IsOptionale | Standardwert |
| ----------- | ------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------- | ------------ |
| toolType    | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Der Typ des Werkzeugs                                                | false       | `null`       |
| miningLevel | int                                                                             | Die Minenstufe für diesen Werkzeugtyp                                | false       | `null`       |
| miningSpeed | float                                                                           | Wie schnell dieses Werkzeug Blöcke des angegebenen Typs abbauen kann | true        | `1.0`        |




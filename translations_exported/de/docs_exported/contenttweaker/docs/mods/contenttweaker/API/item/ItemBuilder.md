# ItemBuilder

Der Item-Erbauer ist zu... Bauelemente (überraschend!) <p> Sie können verschiedene Eigenschaften einstellen, die das Verhalten und die Möglichkeiten des Gegenstands verändern. Du kannst auch [mods.contenttweaker.item.ItemBuilder#withType](/mods/contenttweaker/API/item/ItemBuilder/#withtype) verwenden, um zu einem spezialisierteren Builder zu wechseln, falls vorhanden ist. <p> Um CoT mitzuteilen, dass das Element ingame erscheinen soll, müssen Sie [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) aufrufen und einen gültigen Ressourcenstandort angeben.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.item.ItemBuilder
```

## Implementierte Schnittstellen
ItemBuilder implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Konstrukteure
Erstellt einen neuen ItemBuilder. Remember that this will _not_ create a new block in the game, you need to call [mods.contenttweaker.item.ItemBuilder#build(String)](/mods/contenttweaker/API/item/ItemBuilder/#build) for that.
```zenscript
neue mods.contenttweaker.item.ItemBuilder();
```

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
new ItemBuilder().build(resourceLocation as String);
new ItemBuilder().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |


### mit ItemGruppe

Erlaubt es dir, die Elementgruppe festzulegen, in der dieses Element erscheinen soll. Standardmäßig landen Elemente in `misc`

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
neues ItemBuilder().withItemGroup(itemGroup as mods.contenttweaker.item.MCItemGroup);
new ItemBuilder().withItemGroup(<itemgroup:misc>);
```

| Parameter  | Type                                                                              | Beschreibung                                             |
| ---------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| itemgruppe | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Die Elementgruppe, in der dieses Element erscheinen soll |


### mit MaxSchaden

Erlaubt dir, den maximalen Schaden für dieses Item zu setzen.<br/> Seien Sie gewarnt, dass dies nicht in Kombination mit [Mods verwendet werden kann. ontenttweaker.item.ItemBuilder#withMaxStackGröße](/mods/contenttweaker/API/item/ItemBuilder/#withmaxstacksize)!

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
neuer ItemBuilder().withMaxDamage(maxDamage as int);
neuer ItemBuilder().withMaxDamage(250);
```

| Parameter | Type | Beschreibung             |
| --------- | ---- | ------------------------ |
| maxDamage | int  | Die maximale Stapelgröße |


### mit MaxStackGröße

Erlaubt Ihnen, die maximale Stapelgröße für dieses Item festzulegen.<br/> Seien Sie gewarnt, dass dies nicht in Kombination mit [Mods verwendet werden kann. ontenttweaker.item.ItemBuilder#withMaxDamage](/mods/contenttweaker/API/item/ItemBuilder/#withmaxdamage)!

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
neuer ItemBuilder().withMaxStackSize(maxStackSize as int);
neuer ItemBuilder().withMaxStackSize(16);
```

| Parameter    | Type | Beschreibung             |
| ------------ | ---- | ------------------------ |
| maxStackSize | int  | Die maximale Stapelgröße |


### ohne Reparatur

Legt fest, dass dieses Item nicht in einem Amboss repariert werden darf Gibt zurück: `Dieser Builder, verwendet für Methodenketten`

Rückgabetyp: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
neuer ItemBuilder().withNoRepair();
```

### ohne Rarität

Erlaubt es dir, die Seltenheit des Elements zu setzen

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.item.ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder)

```zenscript
neuer ItemBuilder().withRarity(Seltenheit als String);
neuer ItemBuilder().withRarity("EPIC");
```

| Parameter  | Type   | Beschreibung   |
| ---------- | ------ | -------------- |
| seltenheit | String | Die Seltenheit |


### withType

Legt den spezifischen Typ dieses Elements fest. Nachdem diese Methode genannt wird, wird der Kontext des Builders zu dem mehr zur Verfügung gestellten Typ-Builder wechseln. Das bedeutet, dass die Methoden dieses Builders nicht mehr verfügbar sein werden also sollten alle Eigenschaften, die Sie setzen möchten, gesetzt werden, bevor Sie diese Methode aufrufen. Gibt `einen Builder mit dem angegebenen Item zurück.`

Rückgabetyp: T

```zenscript
neues ItemBuilder().withType<T>();
new ItemBuilder().withType<mods.contenttweaker.item.tool.ItemBuilderTool>();
```

| Parametername | Grenzen                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.item.ItemTypeBuilder](/mods/contenttweaker/API/item/ItemTypeBuilder) |



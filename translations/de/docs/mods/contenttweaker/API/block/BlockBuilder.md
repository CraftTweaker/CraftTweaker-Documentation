# Blockbauer

Der Blockbauer wird verwendet zu... Bausteine (du hast überhaupt nicht gesehen, dass man kommt, richtig... rechts?).<br> Sobald Sie es erstellt haben, können Sie verschiedene Eigenschaften festlegen, die durch die separaten Methoden skizziert werden. <p> Sie können auch den Blocktyp ändern, um eine spezialisierte Form des Blocks zu erstellen (e. . Treppen oder Blöcke, die auf die gleiche Weise gedreht werden können). Um CoT mitzuteilen, dass der Block ingame erscheinen soll, müssen Sie [mods.contenttweaker.block aufrufen.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) und geben Sie einen gültigen Ressourcenstandort an.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.block.Blockbauer
```

## Implementierte Schnittstellen
BlockBuilder implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)

## Konstrukteure
Erstellt einen neuen BlockBuilder. Remember that this will _not_ create a new block in the game, you need to call [mods.contenttweaker.block.BlockBuilder#build(String)](/mods/contenttweaker/API/block/BlockBuilder/#build) dafür.
```zenscript
neue mods.contenttweaker.block.BlockBuilder(Material als crafttweaker.api.block.material.MCMaterial);
new mods.contenttweaker.block.BlockBuilder();
new mods.contenttweaker.block.BlockBuilder (<blockmaterial:earth>);
```
| Parameter | Type                                                                                 | Beschreibung               | IsOptionale | Standardwert                 |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- | ----------- | ---------------------------- |
| material  | [crafttweaker.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial) | Das Material dieses Blocks | true        | `<blockmaterial:iron>` |



## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
myBlockBuilder.build(resourceLocation as String);
myBlockBuilder.build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |


### ohne HardnessAndResistenz

Legt die Härte- und Widerstandsstufen des Blocks fest. Im Gegensatz zur anderen Methode akzeptiert diese nur einen Parameter und verwendet diesen Wert für beide Eigenschaften.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessAndResistance als float);
myBlockBuilder.withHardnessAndResistance(0.5f);
```

| Parameter             | Type  | Beschreibung                       |
| --------------------- | ----- | ---------------------------------- |
| hardnessAndResistance | float | Der Wert für Härte und Widerstand. |



Legt die Härte- und Widerstandsstufen des Blocks fest. Im Gegensatz zur anderen Methode erlaubt es Ihnen mit dieser Methode jede Eigenschaft auf einen separaten Wert zu setzen.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHardnessAndResistance(hardnessIn als float, resistanceIn als float);
myBlockBuilder.withHardAndResistance(0.5f, 0.5f);
```

| Parameter    | Type  | Beschreibung                         |
| ------------ | ----- | ------------------------------------ |
| hardnessIn   | float | Der zu setzende Wert für Härte       |
| resistanceIn | float | Der zu setzende Wert für Widerstand. |


### withHarvestLevel

Legt das Mining Level fest, das benötigt wird, um diesen Block abzubauen

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestLevel(harvestLevel wie in);
myBlockBuilder.withHarvestLevel(3);
```

| Parameter   | Type | Beschreibung            |
| ----------- | ---- | ----------------------- |
| abruf Level | int  | Erntelevel erforderlich |


### withHarvestTool

Legt das benötigte Werkzeug fest, um diesen Block abzurufen

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withHarvestTool(harvestTool as mods.contenttweaker.item.MCToolType);
myBlockBuilder.withHarvestTool(<tooltype:shovel>);
```

| Parameter   | Type                                                                            | Beschreibung    |
| ----------- | ------------------------------------------------------------------------------- | --------------- |
| harvestTool | [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) | Der Werkzeugtyp |


### mit ItemGruppe

Legt die Elementgruppe fest, in der dieser Block angezeigt wird

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withItemGroup(Gruppe als mods.contenttweaker.item.MCItemGroup);
myBlockBuilder.withItemGroup(<itemgroup:building_blocks>);
```

| Parameter | Type                                                                              | Beschreibung       |
| --------- | --------------------------------------------------------------------------------- | ------------------ |
| gruppe    | [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup) | Zu setzende Gruppe |


### withLightValue

Legt den Lichtwert des Blocks fest.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLightValue(lightValueIn als int);
myBlockBuilder.withLightValue(15);
```

| Parameter    | Type | Beschreibung              |
| ------------ | ---- | ------------------------- |
| lightValueIn | int  | Der zu setzende Lichtwert |


### withLootFrom

Wird CoT anweisen, die Beutetabelle dieses Blocks mit dem der Weitergegebenen Block zu überschreiben. Momentan wird dies immer noch einen Beutetischeintrag erzeugen, obwohl er vom Spiel ignoriert wird.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withLootVrom(blockIn als crafttweaker.api.block.MCBlock);
myBlockBuilder.withLootVrom(<block:minecraft:diamond>);
```

| Parameter | Type                                                          | Beschreibung                                        |
| --------- | ------------------------------------------------------------- | --------------------------------------------------- |
| blockIn   | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | Der Block, dessen Beutetisch angewendet werden soll |


### mit MaxStackGröße

Legt die maximale Stapelgröße fest, die dieser Block haben kann, wenn er in deinem Inventar ist. Wird 64 sein, wenn unverändert.

 Gibt zurück: `Dieser Builder wird für Verkettung` verwendet

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withMaxStackSize(Größe wie in);
myBlockBuilder.withMaxStackSize(16);
```

| Parameter | Type | Beschreibung           |
| --------- | ---- | ---------------------- |
| grösse    | int  | Die zu setzende Größe. |


### ohne Rarität

Erlaubt dir, die Seltenheit dieses Blocks zu setzen.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withRarity(Seltenheit als String);
myBlockBuilder.withRarity("UNCOMMON");
```

| Parameter  | Type   | Beschreibung   |
| ---------- | ------ | -------------- |
| seltenheit | String | Die Seltenheit |


### rutschfest

Legt den Slipperiness fest.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withSlipperiness(slipperinessIn als float);
myBlockBuilder.withSlipperiness(0.5f);
```

| Parameter      | Type  | Beschreibung         |
| -------------- | ----- | -------------------- |
| slipperinessIn | float | Der zu setzende Wert |


### withType

Legt den bestimmten Typ dieses Blocks fest. Nachdem diese Methode genannt wird, wird der Kontext des Builders zu dem mehr zur Verfügung gestellten Typ-Builder wechseln. Das bedeutet, dass die Methoden dieses Builders nicht mehr verfügbar sein werden also sollten alle Eigenschaften, die Sie setzen möchten, gesetzt werden, bevor Sie diese Methode aufrufen.

 Gibt `einen Builder mit dem angegebenen Block zurück.`

Rückgabetyp: T

```zenscript
myBlockBuilder.withType<T>();
myBlockBuilder.withType<mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable>();
```

| Parametername | Grenzen                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------- |
| T             | [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder) |

### ohne Drops

Beschreibe CoT, dass dieser Block keine Beuteeinträge hat. Momentan wird dies immer noch einen Beutetischeintrag erzeugen, obwohl er vom Spiel ignoriert wird.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutDrops();
```

### ohne Bewegung blockieren

Gibt CoT an, dass dieser Block die Bewegung nicht blockiert.

 Gibt zurück: `Dieser Builder wird für Verkettung` verwendet

Rückgabetyp: [mods.contenttweaker.block.Blockbauer](/mods/contenttweaker/API/block/BlockBuilder)

```zenscript
myBlockBuilder.withoutMovementBlocking();
```



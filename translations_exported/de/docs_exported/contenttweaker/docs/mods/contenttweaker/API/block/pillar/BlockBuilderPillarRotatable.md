# BlockBuilderPillardrehbar

Ein spezieller Blockbauer, der es dir erlaubt Blöcke zu erstellen, die genauso gedreht werden können wie Protokolle. <p> Das bedeutet, dass es eine Textur für oben und unten und eine Textur für die Seiten hat. Standardmäßig sind diese Seiten der Name des Blocks, gefolgt von `_end` oder `Seiten`. Wie bei den meisten Dingen hier werden für Sie standardmäßig Beispielbilder generiert.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable
```

## Implementierte Schnittstellen
BlockBuilderPillarRotatable implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
neuer BlockBuilder().withType<BlockBuilderPillarRotatable>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |


### ohne EndTextur

Erlaubt es Ihnen, den Pfad der Textur zu überschreiben, die die Endseiten (oben/unten) verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.pillar.BlockBuilderPillaratable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
neuer BlockBuilder().withTyp<BlockBuilderPillarRotatable>().withEndTexture(endTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(<resource:contenttweaker:my_awesome_pillar_end>);
```

| Parameter  | Type                                                                             | Beschreibung                                      |
| ---------- | -------------------------------------------------------------------------------- | ------------------------------------------------- |
| endTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Die Textur, die für die Endseiten verwendet wird. |



Erlaubt es Ihnen, den Pfad der Textur zu überschreiben, die die Endseiten (oben/unten) verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt. Verwendet eine Funktion, die den Namen des Blocks als Eingabe nimmt und die End-Textur dafür zurückgibt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.pillar.BlockBuilderPillaratable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture(endTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withEndTexture((blockName als MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_end"));
```

| Parameter  | Type                                                                                                                                                                                                    | Beschreibung                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| endTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Die zu verwendende Funktion |


### mit SideTextur

Erlaubt es dir, den Pfad der Textur zu überschreiben, die die Seiten (alles außer oben/unten) verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.pillar.BlockBuilderPillaratable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
neuer BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(<resource:contenttweaker:my_awesome_pillar_side>);
```

| Parameter    | Type                                                                             | Beschreibung                                          |
| ------------ | -------------------------------------------------------------------------------- | ----------------------------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Die Textur, die für die Seiten verwendet werden soll. |



Erlaubt es dir, den Pfad der Textur zu überschreiben, die die Seiten (alles außer oben/unten) verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt. Verwendet eine Funktion, die den Namen des Blocks als Eingabe nimmt und die End-Textur dafür zurückgibt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.pillar.BlockBuilderPillaratable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable)

```zenscript
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderPillarRotatable>().withSideTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Beschreibung                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Die zu verwendende Funktion |




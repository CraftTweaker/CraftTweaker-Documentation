# BlockBuildertreppe

Ein spezieller Blockbauer, mit dem du Treppen erstellen kannst. <p> Treppe wird nicht einer, sondern drei Texturen haben, die Sie liefern müssen: Eine für die Oberseite, Eine für die Unterseite und eine für die Seiten. Standardmäßig verwenden diese Texturen Ihren Blocknamen als Namen, die von `_top`, `_bottom` oder `_sides` abgesetzt werden. Wie bei den meisten Dingen hier werden für Sie standardmäßig Beispielbilder generiert.

Diese Klasse wurde von einer Mod mit mod-id `contenttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
mods.contenttweaker.block.stairs.BlockBuilderTreppe
```

## Implementierte Schnittstellen
BlockBuilderStairs implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [mods.contenttweaker.api.IIsBuilder](/mods/contenttweaker/API/api/IIsBuilder)
- [mods.contenttweaker.block.BlockTypeBuilder](/mods/contenttweaker/API/block/BlockTypeBuilder)

## Methoden
### bauen

Weist CoT tatsächlich zu bauen, was dieser Baumeister eigentlich bauen soll.

```zenscript
neuer BlockBuilder().withType<BlockBuilderStairs>().build(resourceLocation as String);
new BlockBuilder().withType<BlockBuilderStairs>().build("my_awesome_block");
```

| Parameter          | Type   | Beschreibung                                    |
| ------------------ | ------ | ----------------------------------------------- |
| ressourcenstandort | String | Der Ressourcenpfad, der diesen Block geben soll |


### mit unterer Textur

Erlaubt es dir, den Pfad der Textur zu überschreiben, die die untere Seite verwenden soll. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
neuer BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter     | Type                                                                             | Beschreibung                                             |
| ------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| untere Textur | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Die Textur, die für die Unterseite verwendet werden soll |



Erlaubt es dir, den Pfad der Textur zu überschreiben, die die untere Seite verwenden soll. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt. Verwendet eine Funktion, die den Namen des Blocks als Eingabe nimmt und die End-Textur dafür zurückgibt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture(bottomTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withBottomTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_bottom"));
```

| Parameter     | Type                                                                                                                                                                                                    | Beschreibung                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| untere Textur | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Die zu verwendende Funktion |


### withSidesTextur

Erlaubt es dir, den Pfad der Textur zu überschreiben, die die Seiten verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
neuer BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Beschreibung                                  |
| ------------ | -------------------------------------------------------------------------------- | --------------------------------------------- |
| sidesTexture | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Die Textur, die für die Seiten verwendet wird |



Erlaubt es dir, den Pfad der Textur zu überschreiben, die die Seiten verwenden sollen. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt. Verwendet eine Funktion, die den Namen des Blocks als Eingabe nimmt und die End-Textur dafür zurückgibt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture(sidesTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
new BlockBuilder().withType<BlockBuilderStairs>().withSidesTexture((blockName as MCResourceLocation) => new MCResourceLocation(blockName.namespace, blockName.path + "_sides"));
```

| Parameter    | Type                                                                                                                                                                                                    | Beschreibung                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| sidesTexture | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Die zu verwendende Funktion |


### ohne TopTextur

Erlaubt es dir, den Pfad der Textur zu überschreiben, die die obere Seite verwenden soll. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
neuer BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as crafttweaker.api.util.MCResourceLocation);
new BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(<resource:contenttweaker:my_awesome_stairs_top>);
```

| Parameter | Type                                                                             | Beschreibung                                       |
| --------- | -------------------------------------------------------------------------------- | -------------------------------------------------- |
| topTextur | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Die Textur, die für die obere Seite verwendet wird |



Erlaubt es dir, den Pfad der Textur zu überschreiben, die die obere Seite verwenden soll. Wenn der Namensraum dieser Textur im Namensraum von CoT oder einer seiner Addons (welche es unterstützen) liegt, wird das Bild standardmäßig erstellt. Verwendet eine Funktion, die den Namen des Blocks als Eingabe nimmt und die End-Textur dafür zurückgibt.

 Gibt zurück: `Dieser Builder, verwendet für Methodenverkettung`

Rückgabetyp: [mods.contenttweaker.block.stairs.BlockBuilderStairs](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs)

```zenscript
neuer BlockBuilder().withType<BlockBuilderStairs>().withTopTexture(topTexture as function.Function<crafttweaker.api.util.MCResourceLocation, crafttweaker.api.util.MCResourceLocation>);
```

| Parameter | Type                                                                                                                                                                                                    | Beschreibung                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| topTextur | function.Function&lt;[crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation), [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)&gt; | Die zu verwendende Funktion |




# Mob-Stufen

Dieser Mod ist ein Addon für die [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Mob Stages ermöglichen die Konfiguration des Mob-Spawnens in einem benutzerdefinierten Progressionssystem. Für weitere Informationen darüber, wie die Mod funktioniert, schau dir die Mod Seite [hier an](https://minecraft.curseforge.com/projects/mob-stages)

## Globale Optionen

Erstellt einen neuen Globus Eintrag für den Mob. Pro Mob kann nur ein globaler Eintrag existieren.

```zenscript
// mods.MobStages.addStage(String-Bühne, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Fügt einen Ersatz für den Mob hinzu. Wenn der Mob nicht spawnen kann, weil es keine gültigen Spieler in der Nähe gibt, wird der ersetzte Mob an seinem Platz gespawnt.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Legt den Bereich fest, um nach gültigen Spielern zu suchen. Der Standardbereich ist 512 Blöcke, also ist dies optional.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Erlaubt es Spawnern, die Stufenüberprüfung zu überschreiben. Die Standardeinstellung ist falsch. Wenn auf "richtig" gesetzt, funktionieren die Spawner für diesen Mob, auch wenn es keine gültigen Spieler gibt.

```zenscript
// mods.MobStages.toggleSpawners(String entityId, boolean allow);
mods.MobStages.toggleSpawners("minecraft:zombie", true);
```

## Maßspezifische Optionen

Dimensionsspezifische Optionen sind fast identisch mit den globalen Optionen, haben sie jedoch noch ein weiteres Argument hinzugefügt, nämlich die Integer-Dimension-Id. Dimensionsspezifische Einträge überschreiben den globalen Eintrag in dieser Dimension. Du kannst nur einen Eintrag pro Mob, pro Dimension haben.

## Skript-Beispiel

```zenscript
// Creepers benötigen Stufe eins um
mods.MobStages.addStage("one", "minecraft:creeper");

// Skelette erfordern Stufe 2 oder Spawner.
mods.MobStages.addStage("zwei", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Spiders erfordern Stufe drei im Nether.
mods.MobStages.addStage("drei", "minecraft:spider", -1);

// Zombies erfordern Stufe 4 im Nether und werden durch Fledermäuse ersetzt, wenn sie dies nicht können.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```
# Fases de criatura

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Las etapas de criatura permiten que la generación de ratones sea configurada en un sistema de progresión personalizado. Para más información sobre cómo funciona el mod, revisa la página de mod [aquí](https://minecraft.curseforge.com/projects/mob-stages)

## Opciones globales

Crea una nueva entrada de gloabl para el Mob. Sólo puede existir una entrada global por mob.

```zenscript
// mods.MobStages.addStage(String stage, String entityId);
mods.MobStages.addStage("one", "minecraft:zombie");
```

Añade un reemplazo para el mob. Si el mob no aparece porque no hay jugadores válidos cerca, el mob de reemplazo aparecerá en su lugar.

```zenscript
// mods.MobStages.addReplacement(String entityId, String replacementId);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:slime");
```

Establece el rango para buscar jugadores válidos. El rango por defecto es de 512 bloques, así que esto es opcional.

```zenscript
// mods.MobStages.addRange(String entityId, int range);
mods.MobStages.addRange("minecraft:zombie", 32);
```

Permite a los generadores sobreescribir la comprobación de escena. El valor por defecto es falso. Si se establece en verdadero, los spawners trabajarán para este Mob, incluso si no hay jugadores válidos.

```zenscript
// mods.MobStages.toggleSpawners(String entityId, boolean allow);
mods.MobStages.toggleSpawners("minecraft:zombie", true);
```

## Opciones específicas de la dimensión

Las opciones específicas de la dimensión son casi las mismas que las opciones globales, sin embargo tienen otro argumento añadido al final, que es la dimensión Integer id. Las entradas específicas de la dimensión anularán la entrada global en esa dimensión. Sólo puedes tener una entrada por mob, por dimensión.

## Ejemplo de script

```zenscript
// Los creepers requieren la etapa uno para generar
mods.MobStages.addStage("one", "minecraft:creeper");

// Los esqueletos requieren la etapa dos, o cualquier spawner.
mods.MobStages.addStage("dos", "minecraft:skeleton");
mods.MobStages.toggleSpawner("minecraft:skeleton", true);

// Las arañas requieren la etapa tres en el ninguno de los dos.
mods.MobStages.addStage("three", "minecraft:spider", -1);

// Los zombies requieren el estadio 4 en el ninguno y son reemplazados por murciélagos si no pueden.
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.toggleSpawner("minecraft:zombie", true, -1);
mods.MobStages.addStage("four", "minecraft:zombie", -1);
mods.MobStages.addReplacement("minecraft:zombie", "minecraft:bat", -1);
```
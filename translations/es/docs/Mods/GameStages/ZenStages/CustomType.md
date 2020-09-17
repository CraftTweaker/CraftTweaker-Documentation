# Tipos personalizados

Los tipos personalizados son una nueva y poderosa manera de crear tus propias ** cosas personalizadas en el escenario. Esencialmente lo que te permite hacer es, diga, por ejemplo, la etapa de un evento de Minecraft o Etapa una lista de bloques para evitar que un jugador interactúe o se rompa. El uso de [Eventos](/Vanilla/Events/IEventManager/) proporciona Craftweaker. Esto te da la capacidad de bloquear más cosas. Crear una experiencia personalizada completa en el juego sin necesidad de mods adicionales. Como todo lo que necesitas es ZenStages y CraftTweaker suena bastante fresco, ¿eh?

Este es un sistema todavía bastante nuevo y *puede* tener algunos errores. Si notas alguna, por favor infórmanos a [Nuestro Repo](https://github.com/DarkPacks/ZenStages/issues) para que podamos verlo!

Nota: Este es un tipo personalizado completo nada comprobará contra esto internamente. Necesitarás crear y escuchar los [eventos](/Vanilla/Events/IEventManager/) para luego llamar a los métodos proporcionados en [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) para realizar las verificaciones. Así que el nombre de *slug/name* que usas para el tipo necesitarás anotar en algún lugar para saber qué hace qué.

Nota: También es un estándar recomendado que utilice nombres únicos para **todos** sus tipos personalizados.

## Importando el paquete

`importar mods.zenstages.type.CustomStageType;`

## Cómo crearlos

Los tipos personalizados se crean a través de [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) utilizando el siguiente método.

```zenscript
// initCustomType(string name, string value);
// initCustomType(string name, string[] values);
// initCustomType(string name, int value);
// initCustomType(string name, int[] values);
// initCustomType(string name, IIngredient value);
// initCustomType(string name, IIngredient[] values);
var MyCustomType as CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Una vez que haya creado el Tipo Personalizado, ahora puede asignar ese Tipo a una etapa [](/Mods/GameStages/ZenStages/Stage/). Llamando a lo siguiente.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Cómo realizar una comprobación a un tipo personalizado

Este método requiere que haya establecido una etapa a un tipo. Utilizando el método anterior. De lo contrario, devuelve nulo.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Este método no requiere un Tipo Personalizado para ser *Staged* a una etapa.

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```
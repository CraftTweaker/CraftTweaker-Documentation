# Etapas de Tinker

Este mod es un complemento para la [API de GameStages](https://minecraft.curseforge.com/projects/game-stages). Tinker Stages permite que aspectos del mod de Tinkers Construct sean puestos en un sistema de progresión personalizado configurado por el autor del modpack. Para más información, echa un vistazo a la página de mod [aquí](https://minecraft.curseforge.com/projects/tinkerstages)

## Restricciones generales

Restringe la fabricación de herramientas a una etapa. Si se añaden múltiples etapas utilizando este método, el jugador necesitará al menos uno de ellos.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("uno");
```

Restringe la sustitución de partes a una etapa. Si se añaden múltiples etapas utilizando este método, el jugador necesitará al menos uno de ellos.

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("uno");
```

Restringe la construcción de partes a una etapa. Si se añaden múltiples etapas utilizando este método, el jugador necesitará al menos uno de ellos.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("uno");
```

Restringe la aplicación de modificadores a una etapa. Si se añaden múltiples etapas utilizando este método, el jugador necesitará al menos uno de ellos.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("uno");
```

## Restricciones específicas

Evita que un tipo de herramienta específico sea fabricado en la estación de herramientas. Por ejemplo, puede restringir la fabricación de martillos hasta una etapa específica.

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "uno", "tconstruct:pickaxe");
```

Evita que un material sea usado por el jugador. Incluye fabricación, construcción de piezas, y uso de la herramienta.

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("uno", "stone");
```

Evita que un modificador específico sea aplicado a una herramienta o usado.

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("dos", "mending_moss");
```

## Ejemplo de script

```zenscript
///RESTRICCIONES GENERAL
//Previene todas las herramientas a menos que la etapa esté desbloqueada.
mods.TinkerStages.addGeneralCraftingStage("una");

//Previene que todas las herramientas se intercambien a menos que la etapa esté descodificada.
mods.TinkerStages.addGeneralPartReplacingStage("una");

//Prvents toda la construcción de partes a menos que la etapa esté desbloqueada.
mods.TinkerStages.addGeneralPartBuildingStage("una");

//Previene aplicar cualquier modificador de herramienta a menos que la etapa esté desbloqueada.
mods.TinkerStages.addGeneralModifierStage("uno");


///SPECIFIC RESTRICCCIONES
//Previene la creación de picos a menos que la etapa esté desbloqueada.
mods.TinkerStages.addToolTypeStage("dos", "tconstruct:pickaxe");

//Evita que el material sea usado. 
mods.TinkerStages.addMaterialStage("doso", "stone");

//Previene que el modificador sea aplicado.
mods.TinkerStages.addModifierStage("dos", "mending_moss");
```
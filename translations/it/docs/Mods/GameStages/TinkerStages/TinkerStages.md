# Fasi Di Tinker

Questa mod è un addon per l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Tinker Stages permette che gli aspetti della modalità Tinkers Construct vengano inseriti in un sistema di progressione personalizzato impostato dall'autore del modpack. Per maggiori informazioni, consulta la pagina delle mod [qui](https://minecraft.curseforge.com/projects/tinkerstages)

## Restrizioni Generali

Limita la creazione di strumenti a uno stadio. Se vengono aggiunti più stadi usando questo metodo, il giocatore avrà bisogno di almeno uno di essi.

```zenscript
// mods.TinkerStages.addGeneralCraftingStage(String stage);
mods.TinkerStages.addGeneralCraftingStage("one");
```

Limita la sostituzione della parte a uno stadio. Se vengono aggiunti più stadi usando questo metodo, il giocatore avrà bisogno di almeno uno di essi.

```zenscript
// mods.TinkerStages.addGeneralPartReplacingStage(String stage);
mods.TinkerStages.addGeneralPartReplacingStage("one");
```

Limita la costruzione di parti a uno stadio. Se vengono aggiunti più stadi usando questo metodo, il giocatore avrà bisogno di almeno uno di essi.

```zenscript
// mods.TinkerStages.addGeneralPartBuildingStage(String stage);
mods.TinkerStages.addGeneralPartBuildingStage("one");
```

Limita l'applicazione di modificatori a uno stadio. Se vengono aggiunti più stadi usando questo metodo, il giocatore avrà bisogno di almeno uno di essi.

```zenscript
// mods.TinkerStages.addGeneralModifierStage(String stage);
mods.TinkerStages.addGeneralModifierStage("one");
```

## Restrizioni Specifiche

Impedisce che un tipo di strumento specifico venga creato presso la stazione degli utensili. Ad esempio, è possibile limitare la creazione di martelli fino a uno stadio specifico.

```zenscript
// mods.TinkerStages.addToolTypeStage(String stage, String toolId);
mods.TinkerStages.addToolTypeStage(String "one", "tconstruct:pickaxe");
```

Impedisce che il giocatore utilizzi un materiale. Compreso la creazione, costruzione di parti, e utilizzando lo strumento.

```zenscript
// mods.TinkerStages.addMaterialStage(String stage, String material);
mods.TinkerStages.addMaterialStage("one", "stone");
```

Impedisce che un modificatore specifico venga applicato a uno strumento o utilizzato.

```zenscript
// mods.TinkerStages.addModifierStage(String stage, String modifier);
mods.TinkerStages.addModifierStage("two", "mending_moss");
```

## Script Di Esempio

```zenscript
//RESTRIZIONI GENERALI
//Previene tutti gli strumenti a meno che lo stadio non sia sbloccato.
mods.TinkerStages.addGeneralCraftingStage("one");

//Previene lo scambio di tutti gli strumenti a meno che lo stadio non sia unlcoked.
mods.TinkerStages.addGeneralPartReplacingStage("one");

//Apre tutti i brani a meno che lo stadio non sia sbloccato.
mods.TinkerStages.addGeneralPartBuildingStage("one");

//Previene l'applicazione di qualsiasi modificatore di strumenti a meno che lo stadio non sia sbloccato.
mods.TinkerStages.addGeneralModifierStage("one");


//SPECIFIC RESTRICTIONS
//Previene la creazione di picconi a meno che lo stadio non sia sbloccato.
mods.TinkerStages.addToolTypeStage("two", "tconstruct:pickaxe");

//Impedisce l'uso del materiale. 
mods.TinkerStages.addMaterialStage("two", "stone");

//Impedisce l'applicazione del modificatore.
mods.TinkerStages.addModifierStage("two", "mending_moss");
```
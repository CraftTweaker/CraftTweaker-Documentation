# ZenStager

Questa classe è il gestore principale per la creazione di nuovi [Stages](/Mods/GameStages/ZenStages/Stage/), che poi è possibile costruire per dire al gioco di iniziare a mettere in scena quello che hai staged. Viene precaricato con metodi per consentire una facile integrazione con altre mod utilizzando l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages) insieme ad alcune modifiche personalizzate per rendere i produttori di modpack vite poco più facili.

Puoi trovare maggiori informazioni e l'ultima fonte per la classe [qui](https://github.com/DarkPacks/ZenStages/blob/master/src/main/java/uk/artdude/zenstages/stager/ZenStager.java).

## Importazione del pacchetto

ZenStager : `import mods.zenstages.ZenStager;`

Stage *(Recommended to import also)* : `import mods.zenstages.Stage;`

## Metodi

### Crea Fase

Crea e restituisce la nuova [fase](/Mods/GameStages/ZenStages/Stage/)

```zenscript
// mods.zenstages.ZenStager.initStage(string stageName);
var TestStage = ZenStager.initStage("test");
```

Quando hai creato il tuo Stage dovresti creare un file statico/globale che contenga quanto segue in modo da poter accedere allo Stage su altri script/classi.

**Nota: Non avere la creazione `initStage` e `statica` nello stesso script. A causa di limitazioni e altri problemi, il `initStage` verrà chiamato ogni volta che fai riferimento a un membro statico. Quindi tenere separati l'init e la creazione statica**

```zenscript
import mods.zenstages.ZenStager;

statico TestStage = ZenStager.getStage("test"); // Il nome è quello appena creato.
```

### Metodi Di Aiuto

Ottieni una [fase](/Mods/GameStages/ZenStages/Stage/) *(Returns null se non trovato)*

```zenscript
// mods.zenstages.ZenStager.getStage(string stageName);
var TestStageGet = ZenStager.getStage("test");
```

Ottieni una mappa delle [fasi](/Mods/GameStages/ZenStages/Stage/) che vengono create.

```zenscript
// mods.zenstages.ZenStager.getStageMap();
var StageMap come Stage[string] = ZenStager.getStageMap();
```

Ottieni una mappa dei liquidi in stadio.

```zenscript
// mods.zenstages.ZenStager.getStagedLiquids();
var LiquidMap come ILiquidStack[][string] = ZenStager.getStagedLiquids();
```

### Metodi Di Staging

Aggiungi un nome del pacchetto. Questo richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato. Questo segue la stessa logica di [qui](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addPackage(string packageName, Stage[] stages);
ZenStager.addPackage("appeng", [TestStage]);
```

Aggiungi un nome del pacchetto. Questo richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato. Questo segue la stessa logica di [qui](/Mods/GameStages/RecipeStages/RecipeStages/).

```zenscript
// mods.zenstages.ZenStager.addContainer(string packageName, Stage[] stages);
ZenStager.addContainer("my.awesome.container", [TestStage]);
```

Ottieni la fase degli ingredienti, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata.

```zenscript
// mods.zenstages.ZenStager.getIngredientStage(ingrediente IIngrediente);
var StickStage come stadio = ZenStager.getIngredientStage(<minecraft:stick>);
```

Ottenere lo stadio dello stack liquido, se messo in scena restituirà lo stadio [](/Mods/GameStages/ZenStages/Stage/) o null se non trovato.

```zenscript
// mods.zenstages.ZenStager.getLiquidStage(ILiquidStack liquidStack);
var StickStage come stadio = ZenStager.getLiquidStage(<liquid:water>);
```

Ottieni la fase del nome della ricetta, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata. Richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getRecipeNameStage(string recipeName);
var RecipeNameStage come Stage = ZenStager.getRecipeNameStage("minecraft:boat");
```

Ottieni la fase del contenitore, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata. Richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getContainerStages(string containerName);
var ContainerStage as Stage = ZenStager.getContainerStages("my.awesome.container");
```

Ottieni la fase del pacchetto, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata. Richiede [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getPackageStages(string packageName);
var PackageStage come Stage = ZenStager.getPackageStages("appeng");
```

Ottenere lo stadio di dimensione, se messo in scena restituirà il [Stage](/Mods/GameStages/ZenStages/Stage/) o null se non trovato. Richiede [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getDimensionStage(int dimId);
var DimStage as Stage = ZenStager.getDimensionStage(-1);
```

Ottieni la fase mob, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata. Richiede [MobStages](/Mods/GameStages/MobStages/MobStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getMobStage(string mobName);
var MobStage come Stage = ZenStager.getMobStage("minecraft:skeleton");
```

Ottieni la fase Materiale TiC, se messa in scena restituirà la fase [](/Mods/GameStages/ZenStages/Stage/) o nulla se non trovata. Richiede [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) per essere installato.

```zenscript
// mods.zenstages.ZenStager.getTiCMaterialStage(materiale stringa);
var MobStage come stadio = ZenStager.getTiCMaterialStage("bronze");
```

### Controlla se qualcosa è in scena

Tipi Supportati:

- contenitore
- dimensione
- ingrediente
- mob
- mod
- mulitblock
- minerale
- pacchetto
- recipename
- tinker

```zenscript
// mods.zenstages.ZenStager.isStaged(string type, string value);
// mods.zenstages.ZenStager.isStaged(string type, int value);
// mods.zenstages.ZenStager.isStaged(string type, IIngredient value);
ZenStager.isStaged("ingredient", <minecraft:stick>);
ZenStager.isStaged("container", "my. fantastico contenitore");
ZenStager.isStaged("mob", "minecraft:scheletro");
ZenStager.isStaged("tinker", "bronze");
ZenStager.isStaged("tinker", "tconstruct:crossbow");
ZenStager.isStaged("recipename", "minecraft:boat");
ZenStager.isStaged("dimensione", -1);
```

### Debug

Chiamare questo metodo farà il controllo della mod sopra le fasi [](/Mods/GameStages/ZenStages/Stage/) che hai creato e ciò che è staged. Per vedere se hai erroneamente *messo in scena* qualcosa più di una volta. Se qualcuno viene trovato, vengono registrati nel file `crafttweaker.log`. Raccontare ciò che è duplicato in scena e in quali fasi si trova. Questo è un metodo ideale / strumento da utilizzare prima di rilasciare aggiornamenti a un modpack o solo lo sviluppo generale di un modpack.

```zenscript
// mods.zenstages.ZenStager.checkConflicts();
ZenStager.checkConflicts();
```

### Fasi Di Costruzione

Questo è **importante** chiamare dopo aver completato l'aggiunta di voci alle tue fasi. Questo invita tutte le mod a mettere in scena effettivamente detti voci. Il mancato funzionamento di questo metodo comporterà nulla in stadio!

```zenscript
// mods.zenstager.ZenStager.buildAll();
ZenStager.buildAll();
```
# Comandi

CraftTweaker aggiunge comandi che ti aiuteranno a creare script, sono forniti per contribuire a ridurre il tempo di sviluppo degli script.

Il prefisso per i comandi sono: `/crafttweaker` or `/ct`

Puoi anche usare uno di questi alias: `/minetweaker` or `/mt`

Tutti i comandi possono essere trovati in ingame facendo:

`/crafttweaker help`

o

`/ct help`

# Elenco dei comandi

## Biomi

Uso:

`/crafttweaker biomes`

`/ct biomi`

Descrizione:

Elenca tutti i biomi che sono nel gioco.

## BiomeTypes

Uso:

`/crafttweaker biomeTypes`

`/ct biomeTypes`

Descrizione:

Elenca tutti i biomeTipi che sono nel gioco.

## BlockInfo

Uso:

`/crafttweaker blockinfo`

`/ct blockinfo`

Descrizione:

Attiva o disattiva il lettore di blocchi. In modalità informazioni sul blocco, facendo clic con il tasto destro del mouse un blocco ti dirà il nome, i metadati e i dati dell'entità delle piastrelle, se applicabili.

## Blocchi

Uso:

`/crafttweaker blocks`

`/ct blocchi`

Descrizione:

Esegue un elenco di tutti i blocchi del gioco nel file crafttweaker.log.

## Bug

Uso:

`/crafttweaker bugs`

`/ct bug`

Descrizione:

Apre il browser con il bug tracker di GitHub.

## Conflitto

Uso:

`/crafttweaker conflict`

`/ct conflitto`

Descrizione:

Esegue un elenco di tutte le ricette di crafting table in conflitto nel file crafttweaker.log.  
Nota che questo funziona solo su un CLIENT con JEI installato!

## Discord

Uso:

`/crafttweaker discord`

`/ct discord`

Descrizione:

Apre il tuo browser con un link a [il server Discord](https://www.discord.blamejared.com).

## Documenti

Uso:

`/crafttweaker docs`

`/ct docs`

Descrizione:

Apre il tuo browser a questa pagina di documenti (stessa di `/ct wiki`).

## DumpZs

Uso:

`/crafttweaker dumpzs`

`/ct dumping`

Descrizione:

Esegue un dump ZenScript in una cartella crafttweaker_dump all'interno della directory minecraft come file HTML.  
È possibile utilizzare uno o più obiettivi di dump che verranno eseguiti consecutivamente (se si fornisce un obiettivo due volte verrà eseguito due volte).  
Gli obiettivi possono essere trovati utilizzando l'auto-completamento (tasto tabulazione).  
Per impostazione predefinita `log`, `html` e `json` sono registrati come obiettivi.  
Questo includerà tutti i gestori di parentesi registrati, ZenTypes, Funzioni globali, ZenExpansions e tutti i pacchetti registrati, compresi i loro metodi.  
Nota che non tutti questi possono essere utilizzati all'interno degli script!

## Entità

Uso:

`/crafttweaker entities`

`/ct entità`

Descrizione:

Esegue un elenco di tutte le entità nel gioco nel file crafttweaker.log.

## Dai Oggetto

Uso:

`/crafttweaker give <minecraft:bedrock>`

`/ct give <minecraft:bedrock>`

Descrizione:

Dà al giocatore l'oggetto usando la sintassi del gestore delle parentesi CrT.  
Puoi anche applicare i tag aggiungendo un `. ithTag()` call.  
Nota che questo è un parser piuttosto semplice e potrebbe non funzionare per ogni caso!

## Mano

Uso:

`/crafttweaker hand`

`/ct mano`

Descrizione:

Stampa il nome dell'elemento in mano alla chat.

Copia anche il nome negli appunti e stampa voci oreditte.

## Inventario

Uso:

`/crafttweaker inventario`

`/ct inventario`

Descrizione:

Produce un elenco di tutti gli elementi nel tuo inventario nel file crafttweaker.log.

## JeiCategories

Uso:

`/crafttweaker jeiCategories`

`/ct jeiCategories`

Descrizione:

Esegue un elenco di tutte le categorie jei registrate nel file crafttweaker.log.  
Richiede JEI per essere installato (sorpresa)!

## Json

Uso:

`/crafttweaker json` `/crafttweaker json escaped`

`/ct json` `/ct json escaped`

Descrizione:

Stampa il nbt dell'elemento in mano come JSON alla chat.  
Questo formato differisce dalla formattazione IData che CraftTweaker usa.  
Puoi cliccarlo per essere copiato negli appunti.  
Puoi anche privare l'argomento `fuggito` per sfuggire automaticamente alla stringa risultante.

## Liquidi

Uso:

`/crafttweaker liquids`

`/ct liquidi`

Descrizione:

Produce un elenco di tutti i liquidi nel gioco nel file crafttweaker.log.

## Registro

Uso:

`/crafttweaker log`

`/ct log`

Descrizione:

Invia un link cliccabile per aprire il crafttweaker.log.

## Mods

Uso:

`/crafttweaker mods`

`/ct mods`

Descrizione:

Produce un elenco di tutte le mod e le loro versioni nel gioco al file crafttweaker.log e lo stampa in chat.

## Nomi

Uso:

`/crafttweaker names [category]`

`/ct nomi [category]`

Descrizione:

Produce un elenco di tutti gli elementi del gioco nel file crafttweaker.log.  
L'argomento `categoria` è facoltativo e estenderà l'elenco con le informazioni seguenti:

* tempo di masterizzazione
* creativetabs
* danneggiabile
* display
* incantabilità
* valore alimentare
* maxdamage
* maxstack
* maxuse
* modid
* rarità
* riparabile
* costo di riparazione
* saturationvalue
* unloc

È inoltre possibile visualizzare tutti i parametri disponibili utilizzando la funzione di completamento automatico TAB-Key.

## Nbt

Uso:

`/crafttweaker nbt`

`/ct nbt`

Descrizione:

Uscita la NBT del blocco che stai guardando o l'oggetto che stai tenendo nel file crafttweaker.log.

## OreDict

Uso:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Descrizione:

Produce un elenco di tutte le voci di OreDict nel gioco nel file crafttweaker.log.

Se viene fornito un nome, i nomi di tutti gli elementi registrati all'oredict verranno visualizzati nel file crafttweaker.log.

## Pozioni

Uso:

`/crafttweaker pozioni`

`/ct pozioni`

Descrizione:

Produce un elenco di tutte le pozioni nel gioco nel file crafttweaker.log.

## Nomi RecipeName

Uso:

`/crafttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Descrizione:

Produce un elenco di tutti i nomi di ricette nel gioco nel file crafttweaker.log.  
Un modid può essere fornito per filtrare i risultati.

## Ricette

Uso:

`/crafttweaker ricette`

`/ct ricette`

Descrizione:

Produce un elenco di tutte le ricette di creazione nel gioco al file crafttweaker.log.

## Ricette (Hand)

Uso:

`/crafttweaker ricette mano`

`/ct ricette mano`

Descrizione:

Produce un elenco di tutte le ricette di creazione per l'oggetto nella mano del giocatore nel gioco al file crafttweaker.log.

## Ricette (Fornace)

Uso:

`/crafttweaker ricette fornace`

`/ct fornace ricette`

Descrizione:

Produce un elenco di tutte le ricette della fornace nel gioco al file crafttweaker.log.

## Script

Uso:

`/crafttweaker scripts`

`/ct script`

Descrizione:

Invia un link cliccabile per aprire la directory degli script.  
Può essere eseguito anche da una riga di comando che invece stampa il percorso assoluto alla directory del log.

## Semi

Uso:

`/crafttweaker seed`

`/ct semi`

Descrizione:

Esegue un elenco di tutti gli elementi nel registro dei seed nel file crafttweaker.log.

## Sintassi

Uso:

`/crafttweaker syntax`

`/ct sintassi`

Descrizione:

Legge attraverso tutti gli script e produrrà tutti gli errori che trova nelle sintassi. Nota che questo non applicherà le modifiche degli script, è necessario riavviare il gioco per vederle in vigore.

## Wiki

Uso:

`/crafttweaker wiki`

`/ct wiki`

Descrizione:

Apre il tuo browser a questa pagina wiki (stessa di `/ct docs`).

## ZsLint

Uso:

`/crafttweaker zslint`

`/ct zslint`

Descrizione:

Inizia la presa zslint.
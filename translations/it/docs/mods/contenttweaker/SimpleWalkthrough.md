# Semplice Passeggiata

Ehi lì, kindlich qui. Quindi stai provando ContentTweaker per 1.15, eh?

A volte io di solito abbreviare ContentTweaker con CoT per risparmiarmi alcune lettere (è più un automatismo da Discord già), quindi stare con me, okay? Poi, prima vi consiglio di installare anche una mod di gestione delle risorse, in modo che i blocchi/oggetti che hai un modo di aggiungere texture e modelli per blocchi e oggetti in seguito.

ContentTweaker cercherà di creare file modello e una semplice immagine senza texture nella cartella delle risorse, finché rileva la mod [The loader](https://www.curseforge.com/minecraft/mc-mods/the-loader) or [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) installata. Se nessuno di questi è installato, stamperà solo un messaggio sul registro che indica che non creerà texture per te. Ad un certo punto sarà anche possibile disabilitare la generazione di texture del tutto, ma non nel curren Alpha/Beta build.

Per le texture generate, CoT non sovrascriverà i file se già esistono, in modo da poter sostituire i file esistenti con quelli propri e CoT non annullerà queste modifiche.


Ora, arriviamo ad esso, vero? Citerò alcuni esempi per alcuni semplici blocchi e elementi. Se vuoi vedere tutto questo supporto a queste classi, puoi trovare l'esportazione API nella cartella API proprio sotto questo file nella barra di navigazione!

## Loader ContentTweaker
Dal momento che CraftTweaker in 1.14+ caricherà mentre il server è in funzione, abbiamo bisogno di un modo per caricare gli script da qualche altra parte. Questo è il motivo per cui il `#loader contenttweaker` è!  
Basta metterlo da qualche parte nel tuo file (preferibile la parte superiore) e sei impostato per andare.  
Ricorda **non sono permessi script crafttweaker** in `#loader contenttweaker`in esecuzione in diverse fasi del ciclo laod!


## Blocchi

Per creare blocchi è necessario creare un oggetto [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) .  
Una volta che hai che puoi impostare le proprietà più semplici in un modello di costruttore.

Si potrebbe quindi chiamare direttamente `build(name)` su di esso ed essere fatto se si desidera creare un blocco di base.  
Oppure puoi specializzarti con `conType` e fornire una classe di costruttore specializzata, ad esempio [Scala da costruzione](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) o [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Controlla le loro rispettive pagine per vedere quali funzioni aggiuntive offrono. Tieni presente che una volta effettuata la chiamata conType non c'è alcun ritorno indietro, quindi imposta tutte le proprietà di base prima di quella chiamata.

Ricorda, qualunque cosa tu faccia, alla fine della catena **hai bisogno di una `build(name)` call**, altrimenti non accadrà nulla!

Hai parlato abbastanza, vuoi un esempio di copia/incolla, vero?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker.block.pillar.BlockBuilderPillarRotatable;


//Il modo più semplice, uses blockamterial IRON
new BlockBuilder()
    //Will delegate to the Basic Builder
    . uild("generic_block");


//Imposta un diverso materiale a blocchi.
new BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


//Il Tipo di Pilastro è fondamentalmente lo stesso dei log, una texture in alto/basso e una per i lati.
//Può essere ruotato su tutti gli assi, proprio come i registri.
//I nomi delle texture di default saranno "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Stairs.
//Ha 3 Textures, top, bottom, lati, per impostazione predefinita saranno "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Oggetti

Per gli oggetti più o meno fai lo stesso, ma questa volta hai bisogno di un [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
Puoi di nuovo utilizzare direttamente `build(name)` , o passare a una versione specializzata utilizzando `conType`.  
Al momento di questa scrittura esiste solo [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool), però.

Ricorda, qualunque cosa tu faccia, alla fine della catena **hai bisogno di una `build(name)` call**, altrimenti non accadrà nulla!

Hai parlato abbastanza, vuoi un esempio di copia/incolla, vero?
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//Il modo più semplice di creare oggetti.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize e MaxDamage si contraddicono a vicenda, quindi usa solo 1
    . uild("other_item");


//Se vuoi che gli strumenti siano impostati, devi impostare il tipo.
//Dal momento in cui imposterai il tipo cambierai i contesti, quindi gli altri metodi non saranno più disponibili.
//Ciò significa che è necessario impostare la durata e il come _prima_ la chiamata conType .
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //Livello di raccolta dell'ascia = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //Pala livello di raccolta 3 e distruggere la velocità 4.0
    . uild("my_tool");



//Se si desidera uno strumento che fa danni, è anche possibile utilizzare il tipo di strumento
nuovo ItemBuilder()
    . ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withDurabilityCostAttack(1) //Per impostazione predefinita: 2
    .build("my_mace");

```

## Nomi
Quindi, come faresti a dare i nomi giusti?  
Per questo, hai bisogno di un file di lang.  
Al momento di questa scrittura CoT non ha ancora creato quello per ya, così avrete bisogno di crearlo da soli.  
Nel tuo pacchetto di risorse, trova la cartella `assets/contenttweaker` .  
In lì, crea una cartella chiamata `lang` se non esiste ancora, e crea un file chiamato `en_us. figlio` lì dentro.  
Raccomando di iniziare sempre con l'en_us uno, dal momento che questo è ciò che il gioco cadrà se non riesce a trovare il nome per un'altra lingua. In seguito sentiti libero di ripetere questo con altri codici di lang pure.

In esso dovrete creare una mappa di valore chiave per le voci. Le chiavi, chiamate anche chiavi di traduzione, o in versioni precedenti nome non localizzato, dipendono dal nome del blocco/elemento che hai usato, e assomiglieranno
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Per il valore, è possibile impostare come l'elemento è chiamato nome ingame in lì. Se non sei sicuro della sintassi, controlla l'esempio qui sotto, o prova un Validatore JSON se hai la sintassi.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Generic Block",
  "item.contenttweaker.generic_item": "Generic Item",
  "item.contenttweaker.generic_item_2": "Generic Item the 2nd",
  "item.contenttweaker.generic_item_3": "Generic Item the charmed one"
}
```
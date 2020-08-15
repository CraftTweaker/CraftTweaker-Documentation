# Fasi Articolo

Questa mod è un addon per l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Gli Item Stages consentono di accedere a elementi e blocchi da inserire in un sistema di progressione personalizzato impostato dal creatore di modpack. Se un giocatore non ha la fase necessaria, il giocatore avrà problemi a usare l'oggetto. Per saperne di più su come funziona, consulta la pagina delle mod [qui](https://minecraft.curseforge.com/projects/item-stages)

## Staging di un elemento

Perché un oggetto sia limitato con questa modalità, deve essere associato a uno stadio. Questo può essere fatto in alcuni modi diversi.

```zenscript
// Fina un singolo blocco o elemento. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// Fa un elemento con NBT parziale. Per esempio in questa fase tutti i libri di incantesimo LV 5.
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));

// Stages all items with an ore dictionary tag.
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// Fina tutti gli elementi che vengono aggiunti da una mod specifica.
mods.ItemStages.stageModItems("stage_name", "modid");

// Rimuove uno stadio da un elemento specifico, utile quando abbinato a stageModItems per ridurre la dimensione dello script.
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## Liquidi Di Staging

Potresti voler mettere in scena liquidi, questo è fatto principalmente per nasconderli in JEI.

```zenscript
// Fa un singolo fluido come l'acqua.
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## Incantesimi Di Staging

Puoi mettere in scena incantesimi per impedire ai giocatori di usare oggetti che hanno l'incanto su di loro.

```zenscript
// Fa un incantesimo specifico. In questo caso la protezione.
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// Fa un incantesimo specifico, a un livello specifico. In questo caso Protezione II.
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## Cambiare il nome dell'oggetto sconosciuto.

Potresti voler dare ai tuoi oggetti limitati un nuovo nome mentre sono nascosti. Questo può essere usato per aggiungere scherzi e sottili lore al tuo pacchetto.

```zenscript
// Imposta tutta la lana per essere chiamata "Clump of Fur" per i giocatori che non hanno il giusto palco.
mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
```

## Staging a tooltip

È possibile impostare parti dei suggerimenti per nascondere le informazioni. Questo è particolarmente utile quando si tenta di mettere in scena mod come il progetto E che aggiungono un suggerimento "EMC:" alla maggior parte degli oggetti.

```zenscript
// Rimuove qualsiasi riga in un suggerimento che inizia con "EMC:"
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## Organizzare una categoria di ricette

È possibile impostare l'accesso a un'intera categoria di ricette con JEI. Ad esempio, se scendi la categoria forno e un giocatore non ha il palco, non saranno in grado di vedere le ricette fornaci.

```zenscript
// Fa una categoria di ricette specifica. In questo esempio stiamo mettendo in scena la categoria incudin.
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```
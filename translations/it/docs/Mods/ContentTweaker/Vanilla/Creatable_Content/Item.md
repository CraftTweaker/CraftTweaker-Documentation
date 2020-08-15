# Elemento

Questo ti permette di aggiungere oggetti al gioco!

## Crea la rappresentanza dell'oggetto

Prima di poter aggiungere l'oggetto, è necessario creare un Item Representation che vi permetterà di impostare le proprietà dell'elemento che si desidera aggiungere.  
È qui che arriva il [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) in:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Importa il pacchetto di rappresentazione

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.Item;`

## ZenProperties

Per ottenere/impostare le proprietà è possibile utilizzare ZenGetter/Setters rispettando o i ZenMethods:

```zenscript
//nome proprietà: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Nome Proprietà          | Tipo                                                                                                            | Richiesto | Valore Predefinito | Descrizione/Note                                                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- | --------- | ------------------ | --------------------------------------------------------------------------------------------------------------- |
| beaconPayment           | boolean                                                                                                         | No        | falso              | Può essere dato a un faro per abilitare i bonus                                                                 |
| creativeTab             | [ICreativeTab](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                    | No        | Varie              | La scheda Creativa la voce verrà inserita                                                                       |
| incandescente           | boolean                                                                                                         | No        | falso              | Può essere usato per dare al tuo oggetto l'effetto luminoso (come se fosse incantato).                          |
| itemColorSupplier       | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)         | No        | -1 come colore     | Il colore dell'oggetto                                                                                          |
| itemDestroyedBlock      | [IItemDestroyedBlock](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)       | No        | falso              | Cosa succede quando l'oggetto ha appena distrutto un blocco?                                                    |
| itemDestroySpeed        | [IItemDestroySpeed](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)           | No        | null               | Determina la velocità di rottura del blocco dell'elemento.                                                      |
| oggettoGetContainerItem | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)   | No        | null               | Cosa rimarrà nella griglia di creazione quando questo oggetto è stato utilizzato in una ricetta?                |
| itemRightClick          | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)               | No        |                    | Chiamato quando il giocatore fa clic con il tasto destro con l'elemento                                         |
| itemUseAction           | EnumUseAction                                                                                                   | No        | "NONE"             | Quale animazione userà l'oggetto ("NONE", "EAT", "DRINK", "BLOCK", "BOW")                                       |
| localizedNameSupplier   | [ILocalizedNameSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | No        | null               | Può essere usato per determinare programmaticamente il nome del tuo oggetto                                     |
| maxDamage               | int                                                                                                             | No        | -1                 | Quanti usi ha l'oggetto? Meno di 0 significa che non può essere danneggiato                                     |
| maxStackSize            | int                                                                                                             | No        | 64                 | Quanti oggetti possono essere inseriti in una pila? Meno di 0 significa dimensione dello stack di standart (64) |
| onItemUpdate            | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                       | No        | null               | Chiamato ogni tick finché l'oggetto è nell'inventario di un giocatore                                           |
| onItemUse               | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                             | No        | null               | Chiamato quando il giocatore fa clic destro su un blocco con l'oggetto                                          |
| onItemUseFinish         | [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                 | No        | null               | Chiamato quando il giocatore finisce usando l'oggetto                                                           |
| rarità                  | EnumRarity                                                                                                      | No        | COMUNE             | Quanto è raro un elemento, determina il colore ToolTip ("COMMON", "UNCOMMON", "RARE", "EPIC")                   |
| smeltingExprerience     | galleggiante                                                                                                    | No        | -1                 | Quanto esperienziano il giocatore guadagna per fondere quell'oggetto in una fornace?                            |
| textureLocation         | [CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                          | No        | null               | La posizione delle risorse dell'oggetto, usata per le texture, ecc.                                             |
| toolClass               | stringa                                                                                                         | No        |                    | Quali tipi di blocco lo strumento può rompere                                                                   |
| toolLevel               | int                                                                                                             | No        | -1                 | Il livello dei blocchi può essere rotto                                                                         |
| unlocalizedName         | stringa                                                                                                         | Sì        |                    | Nome, dovrebbe essere tutto minuscolo                                                                           |

## Registrazione della voce

Devi chiamare questo metodo per registrare l'elemento nel gioco!  
Altrimenti non accadrà nulla!  
Dopo aver chiamato questa funzione, non è possibile annullare la registrazione dell'elemento o modificare nessuna delle sue proprietà!

```zenscript
item.register();
```

## Script Di Esempio

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods. ontenttweaker.Commands;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRightClick = function(stack, world, player, hand) {
    Comandi. all("tabellone giocatori set @p name 5", player, world);
    return "Pass";
};
zsItem.register();
```

## Localizzazione dell'oggetto

Dovrai aggiungere `item.contenttweaker.itemName.name=Nome localizzato` ai file di lingua rispondente.  
Esempio in en_us. ang file `item.contenttweaker.zsItem.name=Your itemName Here` will show `Your itemName Here` in the game.

In alternativa, è possibile utilizzare la funzione di localizzazione [di CraftTweaker](/Vanilla/Game/IGame/), anche se è consigliabile utilizzare i file di lingua!
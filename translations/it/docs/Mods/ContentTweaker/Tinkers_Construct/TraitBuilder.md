# Tratti Personalizzati

Utilizzando questo pacchetto è possibile creare tratto che si può quindi mettere sui vostri strumenti!

## Importare la classe

Potrebbe essere necessario importare la classe se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.tconstruct.TraitBuilder;`

## Creare un tratto

Prima di tutto, dovrai creare un costruttore di tratti.  
Questo può essere fatto usando la funzione statica:

```zenscript
//create(Identificatore string, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

L'identificatore `` deve essere unico!  
Per il `colore`, si suggerisce di utilizzare la notazione esadecimale come mostrato sopra.  
`maxLevel` è il livello massimo che il tratto può diventare, e sarà predefinito a 0.  
`countPerLevel` è il numero di sottolivelli che il tratto può avere (come la Redstone che ha 50).

Dopo aver completato tutte le modifiche qui sotto, dovrai registrare il tuo carattere.  
Questo può essere fatto utilizzando il metodo `registro` , che restituirà una [Rappresentanza](/Mods/ContentTweaker/Tinkers_Construct/Trait/) del nuovo tratto.

```zenscript
myTrait.register();
```

Dopo la registrazione, è ancora possibile modificare il costruttore, il tratto stesso non può più essere modificato.  
In questo modo puoi creare più tratti simili facilmente.

## Elementi Modificatori

Se si combina l'ingrediente dato con uno strumento nella forgiatura di utensili di un tinker, è possibile applicare il tratto come modificatore.

```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `elemento` è l'elemento con cui è abbinato. È possibile utilizzare [condizioni articolo](/Vanilla/Items/Item_Conditions/) ma nessun trasformatore. 
- `amountNeeded` is the amount of items that is matched in. È possibile dividerli su tutti gli slot forniti dalla toolforge, che consente anche di andare al di sopra di 64. Nell'esempio di cui sopra, avete bisogno di 4 blocchi di ferro per aggiunta. Predefiniti a 1.
- `amountMatched` is the amount of trait points added per `amountNeeded`. Nell'esempio sopra quattro blocchi di ferro danno due punti di tratto. Predefiniti a 1.
- Se si utilizza la funzione `remove`, rimuoverà tutti gli ingredienti tratti che corrispondono per l'articolo.

## Proprietà

È possibile impostare e ottenere queste proprietà utilizzando i nomi indicati:

| Nome                 | Tipo    |
| -------------------- | ------- |
| colore               | int     |
| countPerLevel        | int     |
| hidden               | bool    |
| identifier           | stringa |
| localizedDescription | stringa |
| localizedName        | stringa |
| maxLevel             | int     |

## Proprietà Calcolate

Alcune proprietà dovranno essere calcolate.  
È possibile impostare le funzioni di proprietà specificate:

### CanApplyTogether

Verifica se un tratto può essere aggiunto a uno strumento che ha già un altro tratto o [incantesimo](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition enchant){....};
```

### Extra info

La Stringa restituita[] verrà visualizzata come informazioni aggiuntive nella stazione degli strumenti.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## Aggiunta Di Funzionalità

Ora che hai creato un tratto devi farlo modificare qualcosa, vero?  
Questo è ciò che i gestori degli eventi sono per:  
Sono chiamati ogni volta che un utente fa qualcosa con lo strumento che contiene il carattere.

Qui sotto vedrete tutti i possibili gestori, insieme alle informazioni su ciò che ritornano e come scrivere la funzione per loro. Ricorda che dovrai sostituire `myTrait` con il tuo nome di variabile.  
Inoltre, devi solo utilizzare i gestori di cui hai bisogno, non hai bisogno di gestori vuoti solo in modo che hai riempito tutto.

<details>
    <summary>Tutti i manipolatori in poche parole</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">beforeBlockBreak</a></li>
        <li><a href="#afterblockbreak">afterBlockBreak</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">calcCrit</a></li>
        <li><a href="#calcdamage">calcDanno</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockBack</a></li>
        <li><a href="#afterhit">afterHit</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">onToolRepair</a></li>
    </ul>
</details>

### onUpdate

Chiamato ogni tick dallo strumento viene caricato (questo significa nell'inventario del giocatore).  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [IWorld](/Vanilla/World/IWorld/) che rappresenta il `mondo`
- Un [IEntity](/Vanilla/Entities/IEntity/) che rappresenta il `proprietario`
- Un int che rappresenta il `itemSlot`
- Un booleano che descrive se lo strumento attualmente `èSelezionato`

**Non ritorna nulla.**

Creato utilizzando:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, owner, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Chiamato quando viene estratto un blocco.  
Fai attenzione perché questo evento viene catturato anche dai gestori di vaniglia blockBreak.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [PlayerBreakSpeedEvent](/Vanilla/Events/Events/PlayerBreakSpeed/)

**Non ritorna nulla.**

Creato utilizzando:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### beforeBlockBreak

Chiamato poco prima che un blocco sia rotto.  
Fai attenzione perché questo evento è anche catturato dai gestori di vaniglia blockBreak.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [BlockBreakEvent](/Vanilla/Events/Events/BlockBreak/)

**Non ritorna nulla.**

Creato utilizzando:

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### afterBlockBreak

Chiamato dopo che il blocco è stato distrutto.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [IWorld](/Vanilla/World/IWorld/) che rappresenta il `mondo`
- Un [IBlockState](/Vanilla/Blocks/IBlockState/) che rappresenta il blocco `rotto`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `minatore`
- Un bool che rappresenta se l'estrazione `era Efficace`

**Non ritorna nulla.**

Creato utilizzando:

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Chiamato ogni volta che un blocco è stato rotto.  
Fai attenzione perché questo evento è anche chiamato da vaniglia onBlockHarvestBreak handlers.  
A differenza del gestore di vaniglia, questo gestore verrà eseguito solo quando un giocatore ha rotto il blocco.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**Restituisce nulla**

Creato utilizzando:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### calcCrit

Chiamato prima che il danno fatto all'entità sia calcolato per determinare se sarà un crit o meno.  
Restituire `false` non fermerà un colpo che è già un crit dall'essere così.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `obiettivo`

**Restituisce un brano** che è `vero` se il colpo dovrebbe criticare falsi ogni volta.

Creato utilizzando:

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; //or false
};
```

### calcDanno

Chiamato quando un'entità viene colpita, ma ancora prima che il danno venga inflitto e prima che venga aggiunto il danno critico.  
Il danno crit verrà calcolato dal risultato di questo.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `obiettivo`
- Un galleggiante che rappresenta il `originalDamage` dello strumento (danni non modificati strumento)
- Un galleggiante che rappresenta il `nuovo danno` dello strumento (il danno che lo strumento farà fino a questo punto, può essere originaleDanno, o già essere modificato da altri tratti).
- Un booleano che rappresenta se il colpo `isCritical`

**Restituisce un galleggiante** che rappresenta il nuovo danno. Altrimenti restituisce `nuovo danno`

Creato usando

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, originalDamage, newDamage, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### onHit

Chiamato quando un'entità viene colpita, poco prima che il danno venga inflitto.  
Tutti i calcoli dei danni sono già stati effettuati a questo punto.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `obiettivo`
- Un galleggiante che rappresenta il `danno` dello strumento (critico incluso)
- Un booleano che rappresenta se il colpo `isCritical`

**Restituisce nulla**

Creato usando

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
    //CODE
};
```

### calcKnockBack

Chiamato dopo che un'entità è colpita per modificare il knockback applicato.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `obiettivo`
- Un galleggiante che rappresenta il `danno` (incluso crit) dello strumento
- Un galleggiante che rappresenta l'originale `dello strumentoKnockback` (knockback dello strumento non modificato)
- Un galleggiante che rappresenta il `newKnockback dello strumento` (il knockBack lo strumento farà fino a questo punto, può essere originalKnockback, o già essere modificato da altri tratti).
- Un booleano che rappresenta se il colpo `isCritical`

**Restituisce un float** che rappresenta il nuovo knockback. Altrimenti restituisci `newKnockback`

Creato usando

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    return newDamage; //Or your modified value
};
```

### afterHit

Chiamato dopo che un'entità è stata colpita e dopo che il danno è stato inflitto.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `obiettivo`
- Un galleggiante che rappresenta il `dealtDamage dello strumento`
- Un branco che rappresenta se il colpo `era Critico`
- Un branco che rappresenta se l'entità `wasHit`. Può essere falso se l'entità era invulnerabile o aveva altri modi di espellere il danno.

**Restituisce nulla**

Creato usando

```zenscript
mytrait.afterHit = function(trait, tool, attacker, target, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

Chiamato quando il giocatore che tiene premuto lo strumento blocca l'attacco.  
Altrimenti `onHit` verrà chiamato.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [IPlayer](/Vanilla/Players/IPlayer/) che rappresenta il `giocatore`
- Un [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Restituisce nulla**

Creato usando

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### onPlayerHurt

Chiamato quando il giocatore che tiene premuto lo strumento DID NON BLOCK l'attacco.  
Altrimenti `onBlock` verrà chiamato.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un [IPlayer](/Vanilla/Players/IPlayer/) che rappresenta il `giocatore`
- Una [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta il `attaccante`
- Un [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Restituisce nulla**

Creato usando

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Chiamato prima che la durata degli strumenti venga diminuita.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un int che rappresenta il `importo non modificato` della durata da ridurre.
- Un suggerimento che rappresenta il `nuovoImporto` di durata da ridurre, che può già essere modificato da altre caratteristiche.
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta lo strumento corrente `titolare`

**Restituisce un int** che rappresenta il nuovo importo. Altrimenti restituisce `nuovoImporto`

Creato usando

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Or your modified value
};
```

### calcToolHeal

Chiamato prima che la durata degli strumenti venga aumentata.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `utilizzato`
- Un int che rappresenta il `importo non modificato` della durata da aumentare.
- Un int che rappresenta il `nuovoImporto` di durata da aumentare, che può già essere modificato da altre caratteristiche.
- Un [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) che rappresenta lo strumento corrente `titolare`

**Restituisce un int** che rappresenta il nuovo importo. Altrimenti restituisce `nuovoImporto`

Creato usando

```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Or your modified value
};
```

### onToolRepair

Chiamato prima che lo strumento viene riparato con materiale di riparazione di tis.  
Da non confondere con `onToolHeal` che viene chiamato dopo.  
Verrà chiamato più volte se vengono utilizzati più elementi contemporaneamente.  
Parametri:

- Un [Trait Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) che rappresenta il tratto `attualmente utilizzato`.
- Un [IItemStack](/Vanilla/Items/IItemStack/) che rappresenta lo strumento `` da riparare
- Un suggerimento che rappresenta `la quantità` di durata da aumentare.

**Restituisce nulla**

Creato usando

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## Esempio

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooo";
testTrait.localizedDescription = "Questo è divertente! Purtroppo, non fa nulla... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```
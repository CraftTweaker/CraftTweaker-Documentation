# Eigene Merkmale

Mit diesem Paket können Sie ein Merkmal erstellen, das Sie dann auf Ihre Werkzeuge setzen können!

## Diese Klasse importieren

Möglicherweise ist es erforderlich, dass Sie die Klasse importieren, wenn Sie Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere mods.contenttweaker.tconstruct.TraitBuilder;`

## Ein Merkmal erstellen

Zuallererst musst du einen Merkmalsbauer erstellen.  
Dies kann mit der statischen Funktion erledigt werden:

```zenscript
//create(String Identifier, int color, @Optional int maxLevel, @Optional int countPerLevel)
val myTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test", 0xffaadd, 100, 20);
```

Der `-Bezeichner` muss eindeutig sein!  
Für die `Farbe`wird empfohlen, die Hexadezimalnotation wie oben dargestellt.  
`maxLevel` ist die maximale Ebene, die das Merkmal werden kann, und wird standardmäßig auf 0 gesetzt.  
`countPerLevel` ist, wie viele Unterlevels das Merkmal haben kann (wie Redstone mit 50).

Nachdem Sie alle nachstehenden Änderungen abgeschlossen haben, müssen Sie Ihr Merkmal registrieren.  
Dies kann mit der `Registrierungsmethode` geschehen, die eine [Representation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) des neuen Merkmals zurückgibt.

```zenscript
myTrait.register();
```

Nach der Registrierung können Sie den Builder noch modifizieren, das Merkmal selbst kann nicht mehr geändert werden.  
Auf diese Weise können Sie einfach mehrere ähnliche Merkmale erstellen.

## Bearbeiter Elemente

Kombiniert man die angegebene Zutat mit einem Werkzeug in der Werkzeugschmiede, kann man das Merkmal als Modifikator anwenden.

```zenscript
//myTrait.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(1) int amountMatched));
myTrait.addItem(<item:minecraft:iron_pickaxe>);
myTrait.addItem(<item:minecraft:iron_block>, 4, 2);

//myTrait.removeItem(IItemStack stack);
myTrait.removeItem(<item:minecraft:iron_pickaxe>);
```

- `Gegenstand` ist der Gegenstand, auf den man zutrifft. Sie können [Artikelbedingungen](/Vanilla/Items/Item_Conditions/) verwenden, aber keine Transformatoren. 
- `Der benötigte Betrag` ist die Anzahl der Gegenstände, gegen die abgestimmt wird. Sie können sie über alle Slots der Toolforge aufteilen, so dass Sie auch über 64 hinausgehen können. Im obigen Beispiel benötigen Sie 4 Eisenblöcke pro Zuschlag. Standard ist 1.
- `Betrag übereinstimmend` ist die Menge an Merkmalspunkten pro `Betrag. Benötigt`. Im obigen Beispiel geben vier Eisenblöcke zwei Merkmalspunkte. Standard ist 1.
- Wenn du die `-Entfernungsfunktion`verwendest, werden alle Eigenschaftsbestandteile, die mit dem Gegenstand übereinstimmen, entfernt.

## Eigenschaften

Sie können diese Eigenschaften mit den angegebenen Namen einstellen und holen:

| Name                      | Type   |
| ------------------------- | ------ |
| farben                    | int    |
| countPerLevel             | int    |
| hidden                    | bool   |
| identifier                | string |
| lokalisierte Beschreibung | string |
| localizedName             | string |
| maximaler Level           | int    |

## Berechnete Eigenschaften

Einige Objekte müssen berechnet werden.  
Sie können die angegebenen Eigenschaftsfunktionen festlegen:

### CanApplyTogether

Überprüfen Sie, ob ein Merkmal einem Werkzeug hinzugefügt werden kann, das bereits ein anderes Merkmal besitzt, oder [Verzauberung](/Vanilla/Enchantments/IEnchantmentDefinition/).

```zenscript
myTrait.canApplyTogetherTrait = function(TraitRepresentation thisTrait, String otherTrait){....};
myTrait.canApplyTogetherEnchantment = function(TraitRepresentation thisTrait, IEnchantmentDefinition){....};
```

### Extra info

Der zurückgegebene String[] wird als zusätzliche Informationen in der Toolstation angezeigt.

```zenscript
myTrait.extraInfo = function(TraitRepresentation thisTrait, IItemStack item, IData tag){....};
```

## Funktion hinzufügen

Nun, da Sie ein Merkmal erstellt haben, müssen Sie es etwas verändern, oder?  
Dafür sind die Merkmals-Ereignis-Handler bestimmt:  
Sie werden aufgerufen, wenn ein Benutzer etwas mit dem Merkmal des Merkmals tut.

Unten sehen Sie alle möglichen Handler zusammen mit Informationen darüber, was sie zurückgeben und wie sie die Funktion für sie schreiben können. Denken Sie daran, dass Sie `myTrait` durch Ihren eigenen Variablennamen ersetzen müssen.  
Außerdem müssen Sie nur die Handler verwenden, die Sie benötigen Sie brauchen keine leeren Handler nur, damit Sie alles ausgefüllt haben.

<details>
    <summary>Alle Handler in einer Kurzform</summary>
    <ul>
        <li><a href="#onupdate">onUpdate</a></li>
        <li><a href="#getminingspeed">getMiningSpeed</a></li>
        <li><a href="#beforeblockbreak">vor BlockPause</a></li>
        <li><a href="#afterblockbreak">nach BlockPause</a></li>
        <li><a href="#onblockharvestdrops">onBlockHarvestDrops</a></li>
        <li><a href="#calccrit">calccrit</a></li>
        <li><a href="#calcdamage">calcSchaden</a></li>
        <li><a href="#onhit">onHit</a></li>
        <li><a href="#calcknockback">calcKnockBack</a></li>
        <li><a href="#afterhit">nach Treffer</a></li>
        <li><a href="#onblock">onBlock</a></li>
        <li><a href="#onplayerhurt">onPlayerHurt</a></li>
        <li><a href="#ontooldamage">onToolDamage</a></li>
        <li><a href="#ontoolheal">onToolHeal</a></li>
        <li><a href="#ontoolrepair">onToolRepair</a></li>
    </ul>
</details>

### onUpdate

Jeder Ticker mit dem Werkzeug wird geladen (d.h. im Inventar des Spielers).  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IWorld](/Vanilla/World/IWorld/) repräsentiert die `Welt`
- Eine [IEntity](/Vanilla/Entities/IEntity/) die den `Besitzer` repräsentiert
- Eine Int, die den `Item Slot` repräsentiert
- Ein boolescher Wert, der beschreibt, ob das Werkzeug `derzeit ausgewählt ist`

**Gibt nichts zurück.**

Erstellt mit:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, world, ownerer, itemSlot, isSelected) {
    //CODE
};
```

### getMiningSpeed

Wird aufgerufen, wenn ein Block abgebaut wird.  
Vorsicht, da dieses Ereignis auch von Vanilla BlockBreak Handles gefangen wird.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Ein [PlayerBreakSpeedEvent](/Vanilla/Events/Events/PlayerBreakSpeed/)

**Gibt nichts zurück.**

Erstellt mit:

```zenscript
myTrait.getMiningSpeed = function(trait, tool, event) {
    //CODE
};
```

### vor BlockPause

Wird kurz aufgerufen, bevor ein Block kaputt ist.  
Vorsicht, da dieses Ereignis auch von Vanilla BlockBreak Handles gefangen wird.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Ein [BlockBreakBreakEvent](/Vanilla/Events/Events/BlockBreak/)

**Gibt nichts zurück.**

Erstellt mit:

```zenscript
myTrait.beforeBlockBreak = function(trait, tool, event) {
    //CODE
};
```

### nach BlockPause

Wird aufgerufen, nachdem der Block zerstört wurde.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IWorld](/Vanilla/World/IWorld/) repräsentiert die `Welt`
- Ein [IBlockState](/Vanilla/Blocks/IBlockState/) stellt den kaputten `Block` dar
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Miner`
- Ein Bool, der repräsentiert, wenn der Bergbau `wirkungslos ist`

**Gibt nichts zurück.**

Erstellt mit:

```zenscript
myTrait.afterBlockBreak = function(trait, tool, world, blockstate, miner, wasEffective) {
    //CODE
};
```

### onBlockHarvestDrops

Wird aufgerufen, wenn ein Block gebrochen wurde.  
Sei vorsichtig, da dieses Ereignis auch von Vanilla onBlockHarvestBreak Handles genannt wird.  
Im Gegensatz zum Vanille-Handler wird dieser Handler jedoch nur ausgeführt, wenn ein Spieler den Block kaputt gemacht hat.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Ein [BlockHarvestDropsEvent](/Vanilla/Events/Events/BlockHarvestDrops/)

**Gibt nichts zurück**

Erstellt mit:

```zenscript
myTrait.onBlockHarvestDrops = function(trait, tool, event) {
    //CODE
};
```

### calccrit

Aufgerufen, bevor der Schaden an der Entität berechnet wird, um festzustellen, ob es sich um einen Krit handelt oder nicht.  
Zurückgebend `false` wird keinen Treffer stoppen, der bereits ein Cit ist.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert das `Ziel`

**Gibt einen Bool** zurück, der `true` ist, wenn der Treffer falsch sein soll.

Erstellt mit:

```zenscript
myTrait.calcCrit = function(trait, tool, attacker, target) {
    //CODE
    return true; //or false
};
```

### calcSchaden

Wird aufgerufen, wenn eine Einheit getroffen wird, aber noch bevor der Schaden zugefügt wird und bevor der Krit Schaden hinzugefügt wird.  
Der Krits Schaden wird hieraus berechnet.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert das `Ziel`
- Ein Float, der den `Originalschaden` des Werkzeugs repräsentiert (unmodifizierter Werkzeugschaden)
- Ein Float, der den `neuen Schaden des Werkzeugs repräsentiert` (der Schaden, den das Werkzeug bis zu diesem Punkt erleidet, kann Originalschaden sein oder bereits durch andere Merkmale modifiziert werden).
- Ein boolescher, der repräsentiert, wenn der Treffer `isCritical`

**Gibt eine Schwimmer** zurück, die den neuen Schaden repräsentiert. Andernfalls `newDamage` zurückgeben

Erstellt mit

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, object, originalDamage, newDamage, isCritical) {
    //CODE
    return newDamage; //Oder Ihr modifizierter Wert
};
```

### onHit

Wird aufgerufen, wenn eine Einheit getroffen wird, kurz bevor der Schaden zugefügt wird.  
Alle Schadensberechnungen wurden bereits durchgeführt.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert das `Ziel`
- Ein Float, der den `Schaden` des Werkzeugs repräsentiert (inkl. Kritschaden)
- Ein boolescher, der repräsentiert, wenn der Treffer `isCritical`

**Gibt nichts zurück**

Erstellt mit

```zenscript
myTrait.onHit = function(trait, tool, attacker, target, damage, isCritical) {
    //CODE
};
```

### calcKnockBack

Wird aufgerufen, nachdem eine Entität getroffen wurde, um den angewandten Rückschlag zu ändern.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert das `Ziel`
- Ein Float, der den `Schaden` des Werkzeugs darstellt (einschließlich Kritter)
- Ein Float, der das Werkzeug `originalKnockback` repräsentiert (unverändertes Werkzeugrückschritt)
- Ein Float, der den `newKnockback` des Werkzeugs repräsentiert (das KnockBack macht das Werkzeug bis zu diesem Punkt kann originalKnockback sein oder bereits durch andere Merkmale modifiziert werden).
- Ein boolescher, der repräsentiert, wenn der Treffer `isCritical`

**Gibt einen Schwebe** zurück, der den neuen Rückschlag repräsentiert. Andernfalls `newKnockback` zurückgeben

Erstellt mit

```zenscript
myTrait.calcDamage = function(trait, tool, attacker, target, damage, originalKnockBack, newKnockBack, isCritical) {
    //CODE
    return newDamage; //Oder Ihr modifizierter Wert
};
```

### nach Treffer

Wird aufgerufen, nachdem eine Entität getroffen wurde und der Schaden zugefügt wurde.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert das `Ziel`
- Ein Float, der den `Depotschaden` des Tools repräsentiert
- Ein Bool, der repräsentiert, wenn der Treffer `wasCritical`
- Ein Bool, der repräsentiert, wenn die Entität `` warf. Kann falsch sein, wenn die Entität war unverwundbar oder hatte einige andere Möglichkeiten, den Schaden zu erhitzen.

**Gibt nichts zurück**

Erstellt mit

```zenscript
mytrait.afterHit = function(trait, tool, attacker, damageDealt, wasCritical, wasHit) {
    //CODE
};
```

### onBlock

Wird aufgerufen, wenn der Spieler, der das Werkzeug hält, den Angriff blockiert.  
Andernfalls wird `onHit` aufgerufen.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Ein [IPlayer](/Vanilla/Players/IPlayer/) repräsentiert den `Spieler`
- Ein [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Gibt nichts zurück**

Erstellt mit

```zenscript
myTrait.onBlock = function(trait, tool, player, event) {
    //CODE
};
```

### onPlayerHurt

Wird aufgerufen, wenn der Spieler das Werkzeug DID NICHT BLOCK den Angriff hält.  
Andernfalls `onBlock` wird aufgerufen.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Ein [IPlayer](/Vanilla/Players/IPlayer/) repräsentiert den `Spieler`
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den `Angreifer`
- Ein [EntityLivingHurtEvent](/Vanilla/Events/Events/EntityLivingHurt/)

**Gibt nichts zurück**

Erstellt mit

```zenscript
myTrait.onPlayerHurt = function(trait, tool, player, event) {
    //CODE
};
```

### onToolDamage

Angerufen, bevor die Werkzeuge, Haltbarkeit verringert wird.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine Int, die den `unveränderten Betrag` der Haltbarkeit repräsentiert, die reduziert werden soll.
- Eine Int, die den `newamount` der zu verringernden Haltbarkeit repräsentiert, die bereits durch andere Merkmale geändert werden kann.
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den aktuellen Werkzeuge `Halter`

**Gibt eine Int** zurück, die den neuen Betrag repräsentiert. Andernfalls `newamount zurückgeben`

Erstellt mit

```zenscript
myTrait.onToolDamage = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Oder Ihr modifizierter Wert
};
```

### calcToolHeal

Angerufen, bevor die Werkzeuge Haltbarkeit erhöht wird.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) repräsentiert das benutzte `Werkzeug`
- Eine Int, die den `unveränderten Betrag` der zu erhöhenden Haltbarkeit repräsentiert.
- Eine Int, die den `newamount` der zu erhöhenden Haltbarkeit repräsentiert, die bereits durch andere Merkmale geändert werden kann.
- Eine [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) repräsentiert den aktuellen Werkzeuge `Halter`

**Gibt eine Int** zurück, die den neuen Betrag repräsentiert. Andernfalls `newamount zurückgeben`

Erstellt mit

```zenscript
myTrait.calcToolHeal = function(trait, tool, unmodifiedAmount, newAmount, holder) {
    //CODE
    return newAmount; //Oder Ihr geänderter Wert
};
```

### onToolRepair

Aufgerufen, bevor das Werkzeug mit tis Reparaturmaterial repariert wird.  
Nicht zu verwechseln mit `onToolHeal` , der danach aufgerufen wird.  
Wird mehrmals aufgerufen, wenn mehrere Elemente gleichzeitig verwendet werden.  
Parameter:

- Eine [Eigenschaftsrepräsentation](/Mods/ContentTweaker/Tinkers_Construct/Trait/) die das aktuell verwendete `Merkmal` repräsentiert.
- Ein [IItemStack](/Vanilla/Items/IItemStack/) stellt das `Werkzeug` dar, das repariert werden soll
- Eine Int, die den `Betrag` der zu erhöhenden Haltbarkeit repräsentiert.

**Gibt nichts zurück**

Erstellt mit

```zenscript
myTrait.onToolRepair = function(trait, tool, amount) {
    //CODE
};
```

## Beispiel

```zenscript
#loader contenttweaker
#modloaded tconstruct

val testTrait = mods.contenttweaker.tconstruct.TraitBuilder.create("kindlich_test");
testTrait.color = 0xffaadd;
testTrait.maxLevel = 100;
testTrait. ountPerLevel = 20;
testTrait.addItem(<item:minecraft:iron_pickaxe>);
testTrait.addItem(<item:minecraft:iron_block>, 4, 2);
testTrait.localizedName = "Whooooooooooooooooooooooooou";
testTrait.localizedDescription = "Das macht Spaß! Leider macht es nicht... \u2639";
testTrait.afterHit = function(thisTrait, tool, attacker, target, damageDealt, wasCrit, wasHit) {
    attacker.heal(damageDealt);
};
testTrait.register();
```
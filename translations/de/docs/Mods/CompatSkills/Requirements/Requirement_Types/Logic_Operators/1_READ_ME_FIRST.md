# Logische Anforderungssyntax

Nun, da Sie wissen, welche Logik-Tore sind kann ich beschreiben die Syntax in Reskillable implementiert, dass sie verwendet werden können. In einem späteren Abschnitt wird es weitere detaillierte Beispiele geben.

In allen folgenden Syntaxen ist `Anforderung` die Zeichenkettenrepräsentation jeder anderen unterstützten Anforderung (einschließlich derer, die von CompatSkills oder anderen Addons hinzugefügt wurden).

* * *

## Einheitliche Notwendigkeitstore

### NICHT Anforderung

Die einfachste Logikvoraussetzung, die Reskillable unterstützt, ist die Fähigkeit, eine Anforderung umzukehren. Dies geschieht mit einem **NICHT** Gate und die Syntax dafür ist `nicht|Anforderung`. Wie oben im Abschnitt über die Logiktore, beschrieben diese logische Anforderung wird nur erfüllt, wenn die angegebene `-Anforderung` nicht erfüllt ist.

* * *

## Binäre Anforderungstore

Die anderen logischen Anforderungen sind etwas komplexer, da sie zwei *Eingabe* erfordern. As the logic gates are relatively simple the order of the requirements does not actually matter, however I will be referring to them as `requirement<sub>1</sub>` and `requirement<sub>2</sub>` as to differentiate which one is which.

They also share the syntax: `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `nor`, `xor`, or `xnor`.  
**Note**: The brackets around `requirement<sub>1</sub>` and `requirement<sub>2</sub>` are needed.

* * *

### UND Anforderung

Die Anforderung **UND** im Gegensatz zu den anderen Logikanforderungen ist hauptsächlich für verschachtelte Logikvoraussetzungen nützlich (mehr auf dieser unteren Unterseite), als Sperre eines Gegenstands oder eines anderen Objekts mit mehreren Anforderungen erfordert, dass alle angegebenen Anforderungen erfüllt werden. Dies ist die gleiche wie die **UND** Funktionalität, sollte also wenn möglich verwendet werden so dass der Tooltip einfacher zu lesen ist.

## Beispiele

Alle folgenden Beispiele werden mit der Syntax der CompatSkill's CraftTweaker Unterstützung angezeigt, da es einfacher zu lesen ist. Die logischen Anforderungen funktionieren ebenfalls in Ordnung.

Alle untenstehenden Beispielskripte des CrT-Skripts verwenden die Import-Anweisung: `importiere mods.compatskills.Requirement. ddRequirement;` dient hauptsächlich dazu, die Längen der anderen Zeilen zu reduzieren und sie lesbarer zu machen. (Wenn Sie also eines der Beispiele kopieren, müssen Sie es oben in Ihre Skriptdatei einbinden. Ein paar der folgenden Beispiele, die direkt mit `Mods beginnen. ompatskills.` sind Schlösser, die für CompatSkills spezifisch sind und für die ich annehmbare logische Beispiele gefunden habe.

* * *

Erlaube nur das Angreifen von Zombieschweinchen außerhalb des Nethers: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Allow entering the nether if a player has an attack or defense level of at least 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "or|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

Sobald ein Spieler das Level 24 und die Beweglichkeit Level 24 erreicht hat, kann er Lederrüstungen verwenden:

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    

* * *

Erlaube nur die Verwendung einer Holzschaufel bis der Spieler Minen oder Sammeln Level 5 erhält: `addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");`

* * *

Erlaube einem Spieler nur Enderperlen zu verwenden, wenn er Magie 32 hat oder wenn er Agilität 32 hat. Lassen Sie sie es jedoch nicht verwenden, wenn sie beide Fähigkeiten auf Stufe 32: `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32]");`. Dies kann nützlich sein, wenn Sie mehrere Verlaufsbäume haben möchten und sicherstellen, dass sie einem folgen müssen, wenn sie weiterhin in der Lage sein wollen, bestimmte Gegenstände zu verwenden.

* * *

Es war schwierig, ein Beispiel für **XNOR**zu finden, aber dies ist ein Beispiel dafür, wie es funktionieren kann.

Erlaube einem Spieler die Level 5 Verteidigung nur wenn er noch keine Punkte in Angriff genommen hat oder wenn er Level 32 angreift: `Mods. ompatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### Verschachtelte logische Anforderungen

Verschachtelte logische Anforderungen sind dann, wenn Sie eine logische Anforderung als eines der `Anforderungen` Parameter in einer anderen logischen Anforderung verwenden. Besondere Aufmerksamkeit widmen wir der Platzierung von Halterungen bei verschachtelten Anforderungen.

* * *

Only allow diamond ore to be broken if the player has mining level 20 or if the player has both gathering level 25 and mining level 15: `addRequirement(<minecraft:diamond_ore>, "or|[reskillable:mining|20]~[and|[reskillable:gathering|25]~[reskillable:mining|15]]");` *Note*: This also has the side effect of not allowing players to place diamond ore unless they meet the requirement as well.

* * *

Only allow using the elytra with agility 15 in the end or having agility and magic levels 25 while not being in the end: `addRequirement(<minecraft:elytra:*>, "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` *Note*: Once you reach agility and magic 25 you are unable to use the elytra in the end. Dies ist zum Teil nur als Beispiel und nicht unbedingt das, was jemand will.

Another way that the above requirement could be written is: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` because both sides require at least agility 15.
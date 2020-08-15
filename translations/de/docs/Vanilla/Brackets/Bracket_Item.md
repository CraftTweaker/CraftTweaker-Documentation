# Artikel Klammerhandler

Der Gegenstandsklasse-Handler gibt dir Zugang zu den Gegenständen im Spiel. Es ist nur möglich, im Spiel registrierte Gegenstände zu erhalten so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn Sie die Elemente des Mods in einem ITem Klammerhandler referenzieren.

Artikel werden im Klammerhandler wie folgt referenziert:

```zenscript
<modid:itemname>
```

Mit dem `-Modid` ist das Modid der Mod, zu der das Objekt gehört und `Elementname` ist der Name des Elements, Es wird empfohlen, `/ct hand` zu verwenden, um den korrekten Namen des Elements zu erhalten.

Im Allgemeinen ist es wie dies:

```zenscript
<item:modid:itemname:meta>
```

Mit `Element` als erster Eintrag, heißt es explizit "Dies muss ein Element sein!" zu CT.  
Wie Sie oben gesehen haben: Optional.  
Normalerweise werden Sie dies nie benötigen, außer wenn Sie sich mit mehreren benutzerdefinierten Klammerhandlern befassen.  
`Modid` ist das Modid der Mod, zu der der Gegenstand gehört.  
`Elementname` ist der Name des Elements, benutzen Sie /ct hand, um den korrekten Namen zu erhalten.  
`meta` ist der Metawert des Elements (z.B. Schadenwert, Typen, etc.). Dies ist eine Ganzzahl.  
Sie können auch einen Platzhalter verwenden `*` , um alle Meta-Werte zu adressieren.  
Auch optional: Wenn es ausgelassen wird, ist es 0.

Normalerweise wird hierdurch ein IItemStack Objekt zurückgegeben.  
Bitte lesen Sie [den entsprechenden Wiki-Eintrag](/Vanilla/Items/IItemStack/) für weitere Informationen.

## Beispiele

Ein Beispiel für den Artikel Klammerhandler wäre:

```zenscript
//aple
<minecraft:apple>

//Kohle
<minecraft:coal>
<minecraft:coal:0>

//Kohle
<minecraft:coal:1>

//Kohle und Kohle
<minecraft:coal:*>
<item:minecraft:coal:*>
```

Dadurch erhalten Sie Zugriff auf das `Apple` Element.
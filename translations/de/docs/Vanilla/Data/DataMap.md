# DataMap

Eine Karte, die manchmal auch als assoziatives Array bezeichnet wird, ist eine Datenstruktur, mit der Sie mehrere Elemente speichern können.  
Im Gegensatz zu einem Array können Sie aber auch jedem dieser Elemente einen Schlüssel zum Abruf geben.  
Die DataMap erweitert [IData](/Vanilla/Data/IData/), so dass jede DataMap IData ist, Sie diese Informationen später benötigen.

## Erstelle eine Karte:

Eine Karte ist eine spezielle Art von [IData](/Vanilla/Data/IData/), also müssen Sie am Ende dieses Interface importieren:  
`Crafttweaker importieren. ata.IData;`

Möglicherweise haben Sie bemerkt, dass kein Typ in eine Karte konvertiert werden kann (auch kann keine Karte zu irgendeinem Typ außer Strings konvertiert werden) also muss es eine andere Möglichkeit geben, sie zu schaffen!  
Es ist:

```zenscript
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} as IData;
```

Das Wichtigste an sich ist:  
Karten werden als `Karte<String,IData>`behandelt!  
Das bedeutet, dass Ihre Schlüssel keine Zeichen enthalten sollten, die normale CT-Zeichenketten nicht handhaben können.  
Es bedeutet auch, dass, während der Schlüssel ein String ist, der Wert ein weiteres [IData](/Vanilla/Data/IData/) Objekt ist.  
Du kannst sogar Karten in Karten nesten (genau das tun viele NBT-Daten):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "hallo"
                    }
                } als IData;
```

## Abrufen von Mitgliedern

Leider sind Karten, die wie oben erstellt wurden, unveränderlich, so dass Sie ihre Mitglieder nicht ändern können.  
Um das Mitglied einer Karte abzurufen, musst du seinen Schlüsselnamen kennen. Dann können Sie dies tun:

```zenscript
val mySecondMap = {key1: "value1",
                   Tasten2: "Wert2",
                   key3: 3} als IData;

//Ruft das Mitglied "key1" ab
var k1 = mySecondMap. ey1 als IData;
print(k1.asString());

//Holt das Mitglied namens "key2"
var k2 = mySecondMap.memberGet("key2") as IData;
print(k2.asString());
```

## Karten ändern

Sie können Karten von einander hinzufügen oder substracten, um eine neue Karte mit geänderten Werten zu erhalten.  
Dies funktioniert sogar bei verschachtelten Karten!

```zenscript
val map1 as IData = {
    key1 : "hallo"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

Drucken (Karte 1 + Karte). sString()); //Druckt {key1 : "hello", key2 : "bye", key3 : "override"}



val map3 as IData = {
    key1 : "two",
    key2 : "two",
    key3 : "drei"
};

Druck(map3 - "key1"). sString()); //Druckt {key2 : "two", key3 : "three"}

val map4 as IData = {
    key3 : "anything"
};

print(map3 - map4). sString()); //Druckt {key1 : "two", key2 : "two"}
```
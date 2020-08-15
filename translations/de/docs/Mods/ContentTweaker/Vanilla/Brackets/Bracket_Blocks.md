# Klammerhandler blockieren

Der Block-Klammerhandler gibt dir Zugriff auf die Blöcke im Spiel. Es ist nur möglich Blöcke im Spiel zu registrieren so dass das Hinzufügen oder Entfernen von Mods Probleme verursachen kann, wenn du die Blöcke des Mods in einem Block Klammer Handler referenzierst.

Blöcke werden auf diese Weise im Klammer-Handler referenziert:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

Wenn der Block gefunden wird, wird ein [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) Objekt zurückgegeben.  
Bitte lesen Sie den [entsprechenden Wiki-Eintrag](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) für weitere Informationen darüber, was Sie damit tun können.
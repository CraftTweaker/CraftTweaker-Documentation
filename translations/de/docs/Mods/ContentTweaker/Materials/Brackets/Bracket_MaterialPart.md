# Materialteilklasse-Handler

Der Materialteilklasse-Handler gibt dir Zugang zu den Materialteilen im Spiel. Es ist nur möglich, Material Teile im Spiel zu registrieren, daher müssen Sie vorsichtig mit der Ladeordnung der Skripte sein.

Materialteile werden auf diese Weise im Klammer-Handler des Materials verwiesen:

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Wenn das Materialteil gefunden wird, wird ein MaterialPartDefinition-Objekt zurückgegeben.  
Dies ist ein Objekt, das als beides fungiert ein [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) sowie ein [IItemStack](/Vanilla/Items/IItemStack/) Objekt, , so dass die Methoden beider Schnittstellen an der zurückgegebenen Definition funktionieren.
# Gestore Parentesi Materiale

Il Material Part Bracket Handler ti dà accesso ai Material Parts nel gioco. È solo possibile ottenere Parti di Materiale registrate nel gioco, quindi è necessario fare attenzione all'ordine di caricamento di script.

Le parti materiali sono referenziate nel supporto materiale in questo modo:

```zenscript
<materialpart:material:part>

<materialpart:platinum:gear>
```

Se viene trovata la Parte Materiale, questo restituirà un MaterialPartDefinition Object.  
Questo è un oggetto che agisce come entrambi, un [IMaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) e un oggetto [IItemStack](/Vanilla/Items/IItemStack/) , quindi i metodi di entrambe le interfacce lavoreranno sulla definizione restituita.
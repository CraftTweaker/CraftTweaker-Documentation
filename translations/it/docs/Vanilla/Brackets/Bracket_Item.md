# Gestore Staffa Oggetto

Il Gestore di parentesi di oggetti ti dà accesso agli oggetti nel gioco. È possibile ottenere solo gli oggetti registrati nel gioco, quindi l'aggiunta o la rimozione di mod può causare problemi se si fa riferimento agli elementi della mod in un Gestore di parentesi ITem.

Gli elementi sono referenziati nel Gestore delle parentesi di oggetti in questo modo:

```zenscript
<modid:itemname>
```

Con il `modid` che è la modid della mod che l'oggetto appartiene, e `nome-articolo` essendo il nome dell'elemento, Si consiglia di utilizzare `/ct mano` per ottenere il nome corretto dell'articolo.

Generalmente è così:

```zenscript
<item:modid:itemname:meta>
```

Con l'oggetto `` come prima voce, dice in modo specifico "Questo deve essere un oggetto!" a CT.  
Come hai visto sopra: Facoltativo.  
Di solito non avrai mai bisogno di questo, a meno che non si tratti di diversi gestori di parentesi personalizzati.  
`modid` è la modid della mod a cui appartiene l'oggetto.  
`itemname` è il nome dell'oggetto, usa /ct mano per ottenere il nome corretto.  
`meta` è il meta valore dell'oggetto (ad esempio valore danno, tipi, ecc.). Questo è un Integer.  
Puoi anche usare un jolly `*` per indirizzare tutti i meta valori.  
Opzionale anche: Se lasciato fuori sarà 0.

Normalmente, questo restituirà un oggetto IItemStack.  
Si prega di fare riferimento a [la rispettiva voce wiki](/Vanilla/Items/IItemStack/) per ulteriori informazioni.

## Esempi

Un esempio del gestore di parentesi di oggetti sarebbe:

```zenscript
//apple
<minecraft:apple>

//coal
<minecraft:coal>
<minecraft:coal:0>

//charcoal
<minecraft:coal:1>

//entrambi, carbone e carbone
<minecraft:coal:*>
<item:minecraft:coal:*>
```

Questo ti darà accesso all'elemento `Apple`.
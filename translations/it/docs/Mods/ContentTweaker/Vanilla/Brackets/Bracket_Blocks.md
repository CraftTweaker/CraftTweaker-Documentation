# Gestore Parentesi Blocco

Il Block Bracket Handler ti dà accesso ai blocchi del gioco. È possibile ottenere solo blocchi registrati nel gioco, quindi aggiungere o rimuovere le mod può causare problemi se si fa riferimento ai blocchi della mod in un Block Bracket Handler.

I blocchi sono referenziati nel gestore della staffa di blocco in questo modo:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

Se il blocco viene trovato, questo restituirà un oggetto [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) .  
Si prega di fare riferimento alla [rispettiva voce Wiki](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) per ulteriori informazioni su ciò che si può fare con questi.